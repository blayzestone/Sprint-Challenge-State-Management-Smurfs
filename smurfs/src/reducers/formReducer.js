import { UPDATE_FORM_VALUES, FILL_FORM, SUBMIT_FORM } from '../actions/formActions';

const initialState = {
  id: null,
  name: "",
  age: "",
  height: "",
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_VALUES:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    case SUBMIT_FORM:
      return initialState;
    case FILL_FORM:
      return action.payload;
    default:
      return state;
  } 
}