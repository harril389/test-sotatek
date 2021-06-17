import React from "react";
import { Task } from "../components";

const NewTask = (props) => {
  return (
    <div className="root-new-task">
      <div className="title">New Task</div>
      <Task />
    </div>
  );
};

export default NewTask;
