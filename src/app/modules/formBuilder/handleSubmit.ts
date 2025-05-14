function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const rawFormData = new FormData(e.target as HTMLFormElement);
  const entries = rawFormData.entries();

  // To account for multiple selection fields, we need to need the value as FormDataEntryValue[] also
  const formValues: Record<string, FormDataEntryValue | FormDataEntryValue[]> =
    {};

  for (const [key, value] of entries) {
    if (!formValues[key]) {
      formValues[key] = value;
    } else {
      // if we have already encountered this key, that means we
      // encountered a field which can have multiple values for
      // the same name. For eg. multiSelect or checbox.
      if (Array.isArray(formValues[key])) {
        formValues[key].push(value);
      } else {
        formValues[key] = [formValues[key], value];
      }
    }
  }
  console.log("onSave", { formValues });
  return formValues;
}

export default handleSubmit;
