import React from "react";
import { setStorage, getStorage } from "../storage";
import Button from "./Button";

const BulkAction = (props) => {
  const onDelete = () => {
    let dataStorage = getStorage("task");
    if (dataStorage) {
      let newData = dataStorage.data;
      newData.map(
        (element, index) => element.checked === true && newData.splice(index, 1)
      );
      setStorage("task", { data: newData });
      window.location.reload();
    }
  };

  return (
    <div className="root-bulk-action">
      <div className="title-bulk-action">Bulk Action:</div>
      <div className="box-button-bulk-action">
        <div>
          <Button name="done" />
        </div>
        <div>
          <Button name="remove" color="#da5451" onClick={() => onDelete()} />
        </div>
      </div>
    </div>
  );
};

export default BulkAction;
