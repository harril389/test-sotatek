import React, { useState } from "react";

const InputArea = (props) => {
  const { value, placeHolder, name, onInput, cols, rows } = props;

  const [data, setData] = useState(value);

  const onChange = (e) => {
    onInput(name, e.target.value);
    setData(e.target.value);
  };

  return (
    <textarea
      className="root-textarea"
      placeholder={placeHolder}
      name={name}
      value={data}
      cols={cols}
      rows={rows}
      onChange={(e) => {
        onChange(e);
      }}
    />
  );
};

export default InputArea;
