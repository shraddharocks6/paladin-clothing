import React from "react";

import "./form-input.styles.scss";

//With this label prop, we are selectively rendering a label because we don't know if we actually need it or not. If we need a label property, we'll generate one. If we dont't need it, there is no need to generate one
const FormInput = ({ handleChange, label, type, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...otherProps}
      type={type}
    />
    {
      //Shrink class gets applied whenever the user types something in
    }
    {label ? (
      <label
        className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;