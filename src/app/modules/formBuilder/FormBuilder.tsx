"use client";
import React from "react";
import handleSubmit from "./handleSubmit";
import { type FormField, type FormBuilderData, FORM_INPUTS } from "./formData";

interface FormBuilderProps {
  formData: FormBuilderData<string>;
}

function renderFromField(field: FormField<string>) {
  if (field.type === FORM_INPUTS.TEXT) {
    return (
      <div className="field" key={`$form-field-${field.name}`}>
        <label htmlFor={field.name}>{field.label}</label>
        <input
          type="text"
          name={field.name}
          id={field.name}
          placeholder={field.label}
          required={!!field.required}
        />
      </div>
    );
  }

  if (field.type === FORM_INPUTS.CHECKBOX) {
    return (
      <div className="field" key={`$form-field-${field.name}`}>
        <label>{field.label}</label>
        <div style={{ display: "inline-flex", gap: "16px" }}>
          {field.options.map((option) => (
            <div key={`input-checkbox-${option}`}>
              <label htmlFor={option}>{option}</label>
              <input
                type="checkbox"
                name={field.name}
                value={option}
                id={`${field.name}-${option}`}
                required={!!field.required}
              />{" "}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (
    field.type === FORM_INPUTS.MULTI_SELECT ||
    field.type === FORM_INPUTS.SELECT
  ) {
    const { label, name, options, type } = field;
    return (
      <div className="field" key={`$form-field-${name}`}>
        <label htmlFor={name}>{label}</label>
        <select
          name={name}
          id={name}
          multiple={type === "multiSelect"}
          required={!!field.required}
        >
          {options.map((option) => (
            <option key={`${name}-option-${option}`} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default function FormBuilder({ formData }: FormBuilderProps) {
  const { fields } = formData;
  return (
    <form className="form" name="applicantForm" onSubmit={handleSubmit}>
      {fields.map(renderFromField)}
      <div className="buttonContainer">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}
