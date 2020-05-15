export const UPDATE_FORM_VALUES = "UPDATE_FORM_VALUES";

export const updateFormValues = (name, value) => {
  return { type: UPDATE_FORM_VALUES, payload: { name, value } }
}