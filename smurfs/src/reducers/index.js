import { combineReducers } from 'redux';
import { smurfsReducer as smurfs } from './smurfsReducer';
import { formReducer as formValues } from './formReducer';

export default combineReducers({
  smurfs,
  formValues,
});