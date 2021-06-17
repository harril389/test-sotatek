import React from "react";

const Button = (props) => {
  const { type, name, color, width, ...defaultProps } = props;
  return (
    <button
      className="root-button semiBold-md-txt"
      type={type}
      style={{ backgroundColor: color, width: width }}
      {...defaultProps}
    >
      {name}
    </button>
  );
};

Button.defaultProps = { color: "#01cce8" };
export default Button;
