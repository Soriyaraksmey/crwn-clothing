import React from "react";
import "./form-input.styles.scss";
const FormInput = ({ handelChange, label, ...orthersProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handelChange} {...orthersProps} />
      {label ? (
        <label
          className={`${
            orthersProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
