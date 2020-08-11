import React from "react";

const Example = (props) => {
  const {
    type,
    id,
    name,
    labelText,
    required,
    placeholder,
    invalidMessage,
    value,
  } = props;

  return (
    <div className="form-group row">
      <label htmlFor={id} className="col-sm-2 col-form-label">
        {labelText}
      </label>
      <div className="col-sm-5">
        <input
          type={type}
          className="form-control"
          id={id}
          name={name}
          aria-describedby="emailHelp"
          placeholder={placeholder}
          ref={props.register({
            required: "CO",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
              message: invalidMessage,
            },
          })}
        />
        {props.errors[name] && props.errors[name].message}
        <small id="emailHelp" className="form-text text-muted">
          Zostaną na niego wysłane dalsze szczegóły zamówienia.
        </small>
      </div>
    </div>
  );
};
Example.defaultProps = {
  type: null,
  labelText: null,
  radioName: null,
  required: null,
  id: null,
  value: null,
  placeholder: null,
  invalidMessage: null,
};
export default Example;
