"use client";

import React from "react";
import handleSubmit from "./handleSubmit";
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
      <form className="form" name="applicantForm" onSubmit={handleSubmit}>
        {fields.map(renderFromField)}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
