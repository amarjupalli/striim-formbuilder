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

export default function FormBuilder({ formData }: FormBuilderProps) {
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
