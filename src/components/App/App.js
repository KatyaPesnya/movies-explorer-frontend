import React from "react";
import { Route, Switch } from "react-router-dom";
//import Header from '../Header/Header';
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/movies"></Route>
        <Route path="/saved-movies"></Route>
        <Route path="/profile"></Route>
        <Route path="/signin"></Route>
        <Route path="/signup"></Route>
      </Switch>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
