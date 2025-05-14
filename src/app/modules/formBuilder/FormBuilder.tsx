"use client";
import React from "react";
import handleSubmit from "./handleSubmit";
import { type FormField, type FormData } from "./formData";

interface FormBuilderProps {
  formData: FormData<string>;
}

function renderFromField(field: FormField<string>) {
  if (field.type === "text") {
    return (
      <div className="field" key={`$form-field-${field.name}`}>
        <label htmlFor={field.name}>
          {field.label}
          <input
            type="text"
            name={field.name}
            id={field.name}
            placeholder={field.label}
          />
        </label>
      </div>
    );
  }

  if (field.type === "checkbox") {
    return (
      <div className="field" key={`$form-field-${field.name}`}>
        <div>{field.label}</div>
        <div style={{ display: "inline-flex", gap: "16px" }}>
          {field.options?.map((option) => (
            <div key={`input-checkbox-${option}`}>
              <label htmlFor={option}>{option}</label>
              <input
                type="checkbox"
                name={`${field.name}-${option}`}
                id={`${field.name}-${option}`}
              />{" "}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (field.type === "multiSelect" || field.type === "select") {
    const { label, name, options, type } = field;
    return (
      <div className="field" key={`$form-field-${name}`}>
        <label htmlFor={name}>{label}</label>
        <select name={name} id={name} multiple={type === "multiSelect"}>
          {options?.map((option) => (
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
      <button type="submit">Submit</button>
    </form>
  );
}
