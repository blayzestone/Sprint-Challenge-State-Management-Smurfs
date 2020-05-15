import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";

import { fetchSmurfs } from '../actions/smurfsActions';

import CreateSmurfForm from './CreateSmurfForm';

const App = () => {
  const isFetching = useSelector(state => state.smurfs.isFetching);
  const smurfs = useSelector(state => state.smurfs.smurfsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, []);

    return (
      <div className="App">
        { isFetching && <div>Fetching Smurfs...</div> }
        {
          smurfs.map(smurf => {
            return (
              <ul>
                <li>{smurf.name}</li>
                <li>{smurf.age}</li>
                <li>{smurf.height}</li>
              </ul>
            );
          })
        }
        <CreateSmurfForm />
      </div>
    );
}

export default App;
