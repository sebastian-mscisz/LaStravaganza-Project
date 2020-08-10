import React from "react";
import { useForm } from "react-hook-form";

const FormField = (props) => {
  const { register, errors } = useForm();
  const {
    type,
    id,
    radioName,
    labelText,
    required,
    placeholder,
    invalidMessage,
    value,
  } = props;
  console.log(type);
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
        {errors.id && errors.id.message}
        <label className="form-check-label" htmlFor={id}>
          {labelText}
        </label>
      </div>
    );
  } else if (type === "text" && name == "email") {
    field = (
      <div className="form-group row">
        <label htmlFor={id} className="col-sm-2 col-form-label">
          {text}
        </label>
        <div className="col-sm-5">
          <input
            type={type}
            className="form-control"
            id={id}
            name={id}
            aria-describedby="emailHelp"
            placeholder={placeholder}
            value={value}
            ref={register({
              required: { required },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/,
                message: { invalidMessage },
              },
            })}
          />
          {errors.id && errors.id.message}
          <small id="emailHelp" className="form-text text-muted">
            Zostaną na niego wysłane dalsze szczegóły zamówienia.
          </small>
        </div>
      </div>
    );
  } else if (type === "text" && id == "number") {
    field = (
      <div className="form-group row">
        <label htmlFor={id} className="col-sm-2 col-form-label">
          {text}
        </label>
        <div className="col-sm-5">
          <input
            type={type}
            className="form-control"
            id={id}
            name={id}
            aria-describedby="Help"
            placeholder={placeholder}
            value={value}
            ref={register({
              required: { required },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/,
                message: { invalidMessage },
              },
            })}
          />
          {errors.id && errors.id.message}
        </div>
      </div>
    );
  } else if (type === "text") {
    field = (
      <div className="form-group row">
        <label htmlFor={id} className="col-sm-2 col-form-label">
          {labelText}
        </label>
        <div className="col-sm-5">
          <input
            type={type}
            className="form-control"
            id={id}
            name={id}
            aria-describedby="Help"
            placeholder={placeholder}
            value={value}
            ref={register({
              required: { required },
            })}
          />
          {errors.id && errors.id.message}
        </div>
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
