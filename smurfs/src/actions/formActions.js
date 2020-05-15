export const UPDATE_FORM_VALUES = "UPDATE_FORM_VALUES";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const FILL_FORM = "FILL_FORM";

export const updateFormValues = (name, value) => {
  return { type: UPDATE_FORM_VALUES, payload: { name, value } }
}

export const submitForm = () => {
  return { type: SUBMIT_FORM }
}

export const fillForm = formValues => {
  return { type: FILL_FORM, payload: formValues }
}