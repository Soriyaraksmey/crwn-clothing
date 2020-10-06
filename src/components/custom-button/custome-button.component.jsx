import React from "react";
import "./custom-button.styles.scss";

const CustomeButton = ({
  children,
  inverted,
  isgoogleSingin,
  ...ortherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isgoogleSingin ? "google-sing-in" : ""
      } custom-button`}
      {...ortherProps}
    >
      {children}
    </button>
  );
};

export default CustomeButton;
