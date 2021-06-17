import React, { useState } from "react";

const Input = (props) => {
  const {
    value,
    placeHolder,
    type,
    required,
    notification,
    name,
    onInput,
    min,
    max,
  } = props;

  const [check, setCheck] = useState(false);
  const [data, setData] = useState(value);

  const onChange = (e) => {
    onInput(name, e.target.value);
    setData(e.target.value);
    if (e.target.value.length === 0) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <div className="root-input">
      <input
        className={`input ${check ? "btn-input" : ""}`}
        placeholder={placeHolder}
        name={name}
        required={required}
        value={data}
        type={type}
        min={min}
        max={max}
        onChange={(e) => {
          onChange(e);
        }}
      />
      {check && <label className="notification">{notification}</label>}
    </div>
  );
};

export default Input;
