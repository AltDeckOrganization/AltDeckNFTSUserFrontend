import React from "react";

export const Button = (props) => {
  return (
    <button
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
      style={{ ...props.style }}
      tabIndex={props.tabIndex || 0}
      type="button"
    >
      {props.children}
    </button>
  );
};
