interface BaseFormField {
  name: string;
  label: string;
}

interface TextFormField extends BaseFormField {
  type: "text";
}

interface OptionsFormField<T extends string> extends BaseFormField {
  type: "checkbox" | "multiSelect" | "select";
  options: T[];
}

export type FormField<T extends string> = TextFormField | OptionsFormField<T>;

const fields = [
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
    options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Never"],
  },
  {
    type: "select",
    name: "operatingSystem",
    label: "What's your favorite operating system to code on?",
    options: ["Mac", "Windows", "Linux"],
  },
] as const satisfies FormField<string>[];

export interface FormData<T extends string> {
  fields: FormField<T>[];
}

const formData = { fields } as const satisfies FormData<string>;

export default formData;
