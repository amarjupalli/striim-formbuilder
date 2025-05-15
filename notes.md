## Striim FormBuilder exercise

1. Moved form fields into `formData.ts`. The fields returned can be customized. Schemas can live in this file.
2. Added types for fields and form builder in `formData.ts`. The fields are some what strongly typed.
3. Kept the `renderFromField` in `FormBuilder` component. It could be seperated.
4. Used HTML form elements and supported attributes.
   a. Didn't use any validation in the submit handler but added required attribute on a few fields.
   b. Didn't implement error any explicity handling.
   c. Similary we could validate the input value and their format using other attributes such as pattern, minlength to enforce strict client side validations.
5. `handleSubmit` client side handler will handle multi select and checkbox values too.
6. Added support for Radio button for "Are you a Software Engineer?" question.
7. Deployed to Vercel here https://striim-formbuilder.vercel.app/.
8. Tried to use server actions for form submission. Small sample is in https://github.com/amarjupalli/striim-formbuilder/pull/1.
9. Struggled with action/handler being passed from server component to client component with the starter code.
10. Timeboxed this effort to ~4.5 hours.
