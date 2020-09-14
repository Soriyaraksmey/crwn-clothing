import React from "react";
import "./custom-button.styles.scss";

const CustomeButton = ({ children, isgoogleSingin, ...ortherProps }) => {
  return (
    <button
      className={`${isgoogleSingin ? "google-sing-in" : ""} custom-button`}
      {...ortherProps}
    >
      {children}
    </button>
  );
};

export default CustomeButton;
