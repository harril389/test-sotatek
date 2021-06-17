import React, { useState } from "react";
// import { Input, Button, InputArea, Selected } from "../components";
import Input from "./Input";
import Button from "./Button";
import InputArea from "./InputArea";
import Selected from "./Selected";
import { Priority, getDate, getValueOf, uid } from "../ultis";
import { setStorage, getStorage } from "../storage";

const Task = (props) => {
  const { dataTask, isUpdate } = props;

  const [data, setData] = useState(dataTask);

  const onChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (data?.title.length === 0) {
      alert("Chưa nhập tiêu đề");
    } else if (getValueOf(getDate()) > getValueOf(data?.dueDate)) {
      alert("Không được chọn ngày trong quá khứ");
    } else {
      if (!isUpdate) {
        data.id = uid();
      }
      data.dueDate = getValueOf(data?.dueDate);
      data.priority = parseInt(data.priority);
      let dataStorage = getStorage("task");
      if (!dataStorage) {
        setStorage("task", { data: [data] });
      } else {
        let newData = dataStorage.data;
        if (isUpdate) {
          let indexId = newData.findIndex((element) => element.id === data.id);
          newData.splice(indexId, 1);
          setStorage("task", { data: newData });
        }
        let indexDate = newData.findIndex(
          (element) => element.dueDate >= data.dueDate
        );
        if (indexDate === -1) {
          newData.push(data);
        } else {
          let indexPriority = newData.findIndex(
            (element) =>
              element.dueDate === data.dueDate &&
              element.priority <= data.priority
          );
          if (indexPriority === -1) {
            let index = newData.findIndex(
              (element) => element.dueDate > data.dueDate
            );
            if (index === -1) {
              newData.push(data);
            } else {
              newData.splice(index, 0, data);
            }
          } else {
            newData.splice(indexPriority, 0, data);
          }
        }
        setStorage("task", { data: newData });
      }
    }
    window.location.reload();
  };

  return (
    <form className="root-task" onSubmit={onSubmit}>
      <div className="body">
        <Input
          placeHolder="nhap text"
          notification="phai nhap"
          name="title"
          value={data?.title || ""}
          onInput={(name, value) => onChange(name, value)}
          required={true}
        />
        <div className="box-description">
          <div>Description</div>
          <InputArea
            placeHolder="nhap text"
            name="description"
            cols={40}
            rows={10}
            value={data?.description || ""}
            onInput={(name, value) => onChange(name, value)}
          />
        </div>
        <div className="box-select">
          <div className="col">
            <Input
              placeHolder="nhap text"
              notification="phai nhap"
              type="date"
              name="dueDate"
              value={getDate(data?.dueDate) || ""}
              min={getDate()}
              onInput={(name, value) => onChange(name, value)}
            />
          </div>
          <div className="col">
            <Selected
              defaultValue={changeNamePriority(data?.priority) || "normal"}
              listOption={Priority}
              name="priority"
              onInput={(name, value) => onChange(name, value)}
            />
          </div>
        </div>
      </div>

      <div className="footer">
        <Button
          name={`${isUpdate ? "update" : "add"}`}
          color="#4caf50"
          type="submit"
        />
      </div>
    </form>
  );
};

Task.defaultProps = {
  dataTask: {
    id: "",
    title: "",
    description: "",
    dueDate: getDate(),
    priority: 2,
    checked: false,
  },
  isUpdate: false,
};

const changeNamePriority = (data) => {
  if (data === 1) return "low";
  else if (data === 2) return "normal";
  else return "high";
};

export default Task;
