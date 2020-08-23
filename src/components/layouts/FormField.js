import React from "react";

const FormField = (props) => {
  const {
    type,
    id,
    name,
    radioName,
    labelText,
    placeholder,
    error,
    errorMessage,
    value,
  } = props;
  let field = "";
  if (type === "radio") {
    field = (
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={radioName}
          id={id}
          value={value}
        />
        <label className="form-check-label" htmlFor={id}>
          {labelText}
        </label>
      </div>
    );
  } else if (type === "text" && id == "inputEmail") {
    field = (
      <div className="form-group row">
        <label htmlFor={id} className="col-sm-3 col-form-label">
          {labelText}
        </label>
        <div className="col-sm-9 m-auto">
          <input
            type={type}
            className="form-control"
            id={id}
            name={name}
            aria-describedby="emailHelp"
            placeholder={placeholder}
            value={value}
            onChange={props.handleUserInfoChange}
          />
          {error && errorMessage}
          <small id="emailHelp" className="form-text text-muted">
            Zostaną na niego wysłane dalsze szczegóły zamówienia.
          </small>
        </div>
      </div>
    );
  } else if (type === "tel") {
    field = (
      <div className="form-group row">
        <label htmlFor={id} className="col-sm-3 col-form-label">
          {labelText}
        </label>
        <div className="col-sm-9 m-auto">
          <input
            type={type}
            className="form-control"
            id={id}
            name={name}
            aria-describedby="Help"
            placeholder={placeholder}
            value={value}
            onChange={props.handleUserInfoChange}
          />
          {error && errorMessage}
        </div>
      </div>
    );
  } else if (type === "text") {
    field = (
      <div className="form-group row">
        <label htmlFor={id} className="col-sm-3 col-form-label">
          {labelText}
        </label>
        <div className="col-sm-9 m-auto">
          <input
            type={type}
            className="form-control"
            id={id}
            name={name}
            aria-describedby="Help"
            placeholder={placeholder}
            value={value}
            onChange={props.handleUserInfoChange}
          />
          {error && errorMessage}
        </div>
      </div>
    );
  } else if (type === "checkbox") {
    field = (
      <div className="row pl-3">
        <input
          className="col-auto mt-1"
          type={type}
          id={id}
          name={name}
          aria-describedby="Help"
          checked={value}
        />
        <label className="col pl-2" htmlFor={id}>
          {labelText}
        </label>
        {error && errorMessage}
      </div>
    );
  }
  return field;
};
FormField.defaultProps = {
  type: null,
  labelText: null,
  radioName: null,
  required: null,
  id: null,
  value: null,
  placeholder: null,
  invalidMessage: null,
};
export default FormField;
