export const FORM_INPUTS = {
  TEXT: "text",
  CHECKBOX: "checkbox",
  SELECT: "select",
  MULTI_SELECT: "multiSelect",
} as const;
interface BaseFormField {
  name: string;
  label: string;
}

interface TextFormField extends BaseFormField {
  type: typeof FORM_INPUTS.TEXT;
}

interface OptionsFormField<T extends string> extends BaseFormField {
  type:
    | typeof FORM_INPUTS.CHECKBOX
    | typeof FORM_INPUTS.MULTI_SELECT
    | typeof FORM_INPUTS.SELECT;
  options: T[];
}

export type FormField<T extends string> = TextFormField | OptionsFormField<T>;

const fields = [
  {
    type: FORM_INPUTS.TEXT,
    name: "firstName",
    label: "First Name",
  },
  {
    type: FORM_INPUTS.TEXT,
    name: "lastName",
    label: "Last Name",
  },
  {
    type: FORM_INPUTS.CHECKBOX,
    name: "isSoftwareEngineer",
    label: "Are you a Software Engineer?",
    options: ["yes", "no"],
  },
  {
    type: FORM_INPUTS.MULTI_SELECT,
    name: "proficiency",
    label: "Which languages are you proficient in?",
    options: ["Javascript", "Java", "Python", "CSS", "SQL", "None of them"],
  },
  {
    type: FORM_INPUTS.MULTI_SELECT,
    name: "officeDays",
    label: "When can you come to our office in Palo Alto?",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Never"],
  },
  {
    type: FORM_INPUTS.SELECT,
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
