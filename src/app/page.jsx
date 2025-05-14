import FormBuilder from "./modules/formBuilder/FormBuilder";
import React from "react";
import formData from "./modules/formBuilder/formData";

export default function Home() {
  /**
   * This is a React component that renders a form using a custom FormBuilder component.
   * The form is dynamically generated based on a formData object,
   * which specifies various fields such as text inputs, checkboxes, and select/multi-select options.
   * The form allows the user to provide details such as their name, proficiency in programming languages,
   * availability to work in the office, and more.
   */

  return (
    <div className="container font-[family-name:var(--font-geist-sans)]">
      <FormBuilder formData={formData} />
    </div>
  );
}
