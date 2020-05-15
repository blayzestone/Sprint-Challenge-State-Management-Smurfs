import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fillForm } from '../actions/formActions';

const SmurfList = () => {
  const smurfs = useSelector(state => state.smurfs.smurfsList);
  const dispatch = useDispatch();

  return (
    <>
      {smurfs.map(smurf => {
        return (
          <div key={smurf.id}>
            <div>{smurf.name}</div>
            <div>{smurf.age}</div>
            <div>{smurf.height}</div>
            <button onClick={ () => dispatch(fillForm(smurf)) }>Edit</button>
          </div>
        );
      })}
    </>
  );
}

export default SmurfList;