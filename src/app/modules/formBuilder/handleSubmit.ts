function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const rawFormData = new FormData(e.target as HTMLFormElement);
  const formValues = Object.fromEntries(rawFormData);

  console.log("formValues", formValues);
}

export default handleSubmit;
