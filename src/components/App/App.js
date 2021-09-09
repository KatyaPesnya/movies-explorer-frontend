import React from "react";
import {  Route, Switch } from "react-router-dom";

import Main from '../Main/Main';
import Login from '../Login/Login'
import Register from '../Register/Register'
import NotFound from '../NotFound/NotFound'
import Movies from '../Movies/Movies'
import SavedMovies from "../SavedMovies/SavedMovies";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  exact path="/">
          <Main />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route exact path="/profile"></Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <NotFound />
          </Route>
      </Switch>

    </div>
  );
}

export default App;