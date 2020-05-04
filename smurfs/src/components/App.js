import React, { Component } from "react";
import "./App.css";

import Smurfs from "./Smurfs";
import NewSmurfForm from "./NewSmurfForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Brad's SMURFS! 2.0 W/ Redux</h1>
        <NewSmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
