import React, { useState } from "react";
import { connect } from 'react-redux';
import { getData, addData } from '../actions/actions';

import "./App.css";

import Smurfs from "./Smurfs";
import NewSmurfForm from "./NewSmurfForm";

const App = props => {

  const [smurf, setSmurf] = useState({ name: '', age: '', height: '' });

  const handleChange = event => {
    event.preventDefault();
    setSmurf({...smurf, [event.target.name]: event.target.value });
  };

  const handleSubmit= event => {
    event.preventDefault();
    props.addData(smurf);
    setSmurf({ name: '', age: '', height: '' });
  };

  document.title = "Brad's Smurf Village";
  
  return (
    <div className="App">
      <h1>Brad's SMURFS! 2.0 W/ Redux</h1>
      <NewSmurfForm smurf={smurf} change={handleChange} submit={handleSubmit} />
      <Smurfs />
    </div>
  )
};


export default connect(null, {getData, addData})(App);
