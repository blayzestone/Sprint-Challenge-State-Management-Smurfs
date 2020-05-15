import { UPDATE_FORM_VALUES } from '../actions/formActions';

const initialState = {
  id: 0,
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
    default:
      return state;
  } 
}