import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";

import { fetchSmurfs } from '../actions/smurfsActions';

import SmurfList from './SmurfList';
import CreateSmurfForm from './CreateSmurfForm';

const App = () => {
  const isFetching = useSelector(state => state.smurfs.isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, []);

    return (
      <div className="App">
        { isFetching && <div>Fetching Smurfs...</div> }
        <SmurfList />
        <CreateSmurfForm />
      </div>
    );
}

export default App;
