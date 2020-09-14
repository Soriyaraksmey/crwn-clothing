import React from "react";
import "./custom-button.styles.scss";

const CustomeButton = ({ children, ...ortherProps }) => {
  return (
    <button className="custom-button" {...ortherProps}>
      {children}
    </button>
  );
};

export default CustomeButton;
