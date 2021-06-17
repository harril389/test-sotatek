import React, { useState, useEffect } from "react";
import { getStorage, setStorage } from "../storage";
import { DropDown, BulkAction } from "../components";

const ToDoList = (props) => {
  const dataStorage = getStorage("task");

  const [data, setData] = useState();

  const onSearch = (e) => {
    let listTask = dataStorage.data;
    let newData = [];
    let value = e.target.value.trim();
    if (value.length > 0) {
      for (let i = 0; i < listTask.length; i++) {
        if (listTask[i].title.match(value)) {
          newData.push(listTask[i]);
        }
      }
      setData(newData);
    } else {
      setData(listTask);
    }
  };
  useEffect(() => {
    if (dataStorage && dataStorage?.data.length > 0) {
      setData(dataStorage.data);
    }
  }, []);

  const onChangeCheckBox = (id) => {
    let dataStorage = getStorage("task");
    if (dataStorage) {
      let newData = dataStorage.data;
      let indexId = newData.findIndex((element) => element.id === id);
      newData[indexId].checked = !newData[indexId].checked;
      setStorage("task", { data: newData });
      window.location.reload();
    }
  };

  return (
    <div className="root-to-do-list">
      <div className="title">To Do List </div>
      <input
        className="search"
        placeholder="search..."
        type="text"
        onChange={(e) => {
          onSearch(e);
        }}
      />
      <div>
        {data &&
          data.map((item) => (
            <DropDown
              key={item.id}
              data={item}
              onInput={(id) => onChangeCheckBox(id)}
            />
          ))}
      </div>
      {checkDone() && <BulkAction />}
    </div>
  );
};

const checkDone = () => {
  let dataStorage = getStorage("task");
  if (dataStorage) {
    let newData = dataStorage.data;
    let index = newData.findIndex((element) => element.checked === true);
    return index === -1 ? false : true;
  }
};

export default ToDoList;
