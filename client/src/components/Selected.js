import React, { useState } from "react";
import { ArrowIcon } from "../theme/icons";

const Selected = (props) => {
  const { name, listOption, onInput, defaultValue } = props;

  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(defaultValue);
  const [hold, setHold] = useState(false);

  const onClick = (e) => {
    setChange(e.target.name);
    onInput(name, e.target.value);
    setOpen(false);
  };

  return (
    <div className="root-select">
      <button
        type="button"
        className="button"
        onClick={() => setOpen(true)}
        onBlur={() => setOpen(hold)}
      >
        <div className="label semiBold-md-txt eclipse-hidden">{change}</div>
        <div
          className="arrow"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
        >
          <ArrowIcon />
        </div>
      </button>
      <div
        className="main"
        style={{ display: open ? "block" : "none" }}
        tabIndex="0"
        onMouseEnter={() => setHold(true)}
        onMouseLeave={() => setHold(false)}
        onBlur={() => setOpen(false)}
      >
        {listOption.map((option, index) => (
          <button
            key={index}
            type="button"
            onClick={(e) => onClick(e)}
            name={option.name}
            value={option.value}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selected;
