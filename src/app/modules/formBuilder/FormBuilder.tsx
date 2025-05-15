"use client";
import { type FormField, type FormBuilderData, FORM_INPUTS } from "./formData";
import handleSubmit from "./actions";
import { useFormStatus } from "react-dom";

interface FormBuilderProps {
  formData: FormBuilderData<string>;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
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
        <div style={{ display: "inline-flex", gap: "16px", flexWrap: "wrap" }}>
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

  if (field.type === FORM_INPUTS.RADIO_BUTTON) {
    return (
      <div className="field" key={`$form-field-${field.name}`}>
        <label>{field.label}</label>
        <div style={{ display: "inline-flex", gap: "16px", flexWrap: "wrap" }}>
          {field.options.map((option) => (
            <div key={`input-radio-${option}`}>
              <label htmlFor={option}>{option}</label>
              <input
                type="radio"
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
    <form className="form" name="applicantForm" action={handleSubmit}>
      {fields.map(renderFromField)}
      <div className="buttonContainer">
        <SubmitButton />
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}
