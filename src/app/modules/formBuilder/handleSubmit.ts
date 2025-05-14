function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  console.log(
    "On Save, formValues:",
    new FormData(e.target as HTMLFormElement),
  );
}

export default handleSubmit;
