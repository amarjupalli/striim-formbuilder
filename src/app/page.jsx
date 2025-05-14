import FormBuilder from "./modules/formBuilder/FormBuilder";
import React from "react";

export default function Home() {
  /**
  This is a React component that renders a form using a custom FormBuilder component. 
  The form is dynamically generated based on a formData object, 
  which specifies various fields such as text inputs, checkboxes, and select/multi-select options. 
  The form allows the user to provide details such as their name, proficiency in programming languages, 
  availability to work in the office, and more.
  
   */
  const formData = {
    fields: [
      {
        type: "text",
        name: "firstName",
        label: "First Name",
      },
      {
        type: "text",
        name: "lastName",
        label: "Last Name",
      },
      {
        type: "checkbox",
        name: "isSoftwareEngineer",
        label: "Are you a Software Engineer?",
        options: ["yes", "no"],
      },
      {
        type: "multiSelect",
        name: "proficiency",
        label: "Which languages are you proficient in?",
        options: ["Javascript", "Java", "Python", "CSS", "SQL", "None of them"],
      },
      {
        type: "multiSelect",
        name: "officeDays",
        label: "When can you come to our office in Palo Alto?",
        options: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Never",
        ],
      },
      {
        type: "select",
        name: "operatingSystem",
        label: "What's your favorite operating system to code on?",
        options: ["Mac", "Windows", "Linux"],
      },
    ],
  };

  return (
    <div className="container font-[family-name:var(--font-geist-sans)]">
      <FormBuilder formData={formData} />
    </div>
  );
}
