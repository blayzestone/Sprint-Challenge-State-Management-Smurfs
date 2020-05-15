import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';

import { createSmurf } from '../actions/smurfsActions';
import { updateFormValues } from '../actions/formActions';

const CreateSmurfForm = () => {
  const formValues = useSelector(state => state.formValues);
  const dispatch = useDispatch();

  const inputHandler = evt => {
    const name = evt.target.name;
    const value = evt.target.value;

    dispatch(updateFormValues(name, value));
  }

  const submitHandler = evt => {
    const smurf = {
      ...formValues,
      id: Date.now(),
    }
    
    evt.preventDefault();
    dispatch(createSmurf(smurf));
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>Create Smurf</h2>
      <label htmlFor="name">Name: </label>
      <input onChange={inputHandler} type="text" id="name" name="name" value={formValues.name} />
      <label htmlFor="age">Age: </label>
      <input onChange={inputHandler} type="text" id="age" name="age" value={formValues.age} />
      <label htmlFor="height">Height: </label>
      <input onChange={inputHandler} type="text" id="height" name="height" value={formValues.height} />
      <button>Submit</button>
    </form>
  );
}

export default CreateSmurfForm;