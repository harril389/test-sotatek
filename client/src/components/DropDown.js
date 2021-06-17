import React, { useState } from "react";
import Button from "./Button";
import Task from "./Task";
import { setStorage, getStorage } from "../storage";

const DropDown = (props) => {
  const { data, onInput } = props;
  const [open, setOpen] = useState(false);
  const onChange = () => {
    onInput(data?.id);
  };

  const onDelete = () => {
    let dataStorage = getStorage("task");
    if (dataStorage) {
      let newData = dataStorage.data;
      let indexId = newData.findIndex((element) => element.id === data.id);
      newData.splice(indexId, 1);
      setStorage("task", { data: newData });
      window.location.reload();
    }
  };

  return (
    <div className="root-drop-down">
      <div className="header-drop-down">
        <div className="check-box">
          <input type="checkbox" onChange={onChange} checked={data?.checked} />
        </div>
        <div
          className="title"
          style={{ color: changeColorPriority(data?.priority) }}
        >
          {data?.title}
        </div>
        <div className="box-button">
          <div>
            <Button
              name={`${open ? "close" : "detail"}`}
              onClick={() => setOpen(!open)}
            />
          </div>
          <div>
            <Button name="remove" color="#da5451" onClick={() => onDelete()} />
          </div>
        </div>
      </div>
      <div className={`main-drop-down ${open && "display"}`}>
        <Task dataTask={data} isUpdate={true} />
      </div>
    </div>
  );
};

const changeColorPriority = (data) => {
  if (data === 1) return "#6af326";
  else if (data === 2) return "#fffe04";
  else return "#f30501";
};

export default DropDown;
