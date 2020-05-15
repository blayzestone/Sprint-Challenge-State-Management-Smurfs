import { UPDATE_FORM_VALUES } from '../actions/formActions';

const initialState = {
  editTargetId: null,
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