import React from "react";

function renderFromField(field) {
  if (field.type === "text") {
    return (
      <div key={`$form-field-${field.name}`}>
        <label htmlFor={field.name}>
          {field.label}
          <input type="text" name={field.name} placeholder={field.label} />
        </label>
      </div>
    );
  }
  // TODO: handle all field types
}

export default function FormBuilder({ formData }) {
  const { fields } = formData;
  return (
    <div>
      <form name="applicantForm">{fields.map(renderFromField)}</form>
    </div>
  );
}
