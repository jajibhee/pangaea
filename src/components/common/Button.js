import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={(e) => props.onClick && props.onClick(e)}
    >
      {props.title}
    </button>
  );
};

export default Button;
