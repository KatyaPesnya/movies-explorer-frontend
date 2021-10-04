import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

function App(props) {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  // const [movies, setMovies] = React.useState([]);
  const history = useHistory();



  React.useEffect(() => {
    console.log(loggedIn);
    const token = localStorage.getItem('token');
    mainApi.checkToken(token)
      .then((data) => {
        setLoggedIn(true);
        console.log(data);
        history.push('/movies');
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    mainApi.getUserProfile()
      .then((userData) => setCurrentUser(userData))
      .catch((err) => console.log(err));
  }, [loggedIn]);
  // React.useEffect(() => {
  //   if (loggedIn) {
  //     Promise.all([mainApi.checkToken(), moviesApi.getMovies()])
  //       .then(([userData]) => {
  //         setCurrentUser(userData.data);
  //         // setSavedMovies(moviesData.data);
  //         // setSavedMoviesId(moviesData.map((movie) => movie.movieId));
  //       })
  //       .catch((e) => console.log(e));
  //   }
  // }, [loggedIn]);

  const login = (data) => {
    mainApi.login(data).then((res) => {
      setLoggedIn(true);
      localStorage.setItem('token', res.token);
      history.push('/movies');
    })
    .catch((err) =>  console.log(err));
}
  const register = (data) => {
    mainApi
      .register(data)
      .then((res) => {
        localStorage.setItem('token', res.token);
        // history.push('/movies');
    })
      .catch(err =>  console.log(err))
  }

  const handleSignOut = (evt) => {
    evt.preventDefault()
    setLoggedIn(false);
    setCurrentUser({})
    localStorage.clear()
    history.push("/")
  }

  const handleUpdateProfile = (data) => {
    const token = localStorage.getItem("jwt")
    if(token) {
      mainApi.updateUserProfile(data, token)
      .then((res) =>{
        setCurrentUser(res.data)
        localStorage.setItem('user', JSON.stringify(res.data))
      })
      .catch((err) => {
        console.log(err);
      }); 
    }
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
          />
          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onSignOut={handleSignOut}
            onUpdateProfile={handleUpdateProfile}
          />
          <Route exact path="/signin">
            <Login 
            onLogin={login}
            />
          </Route>
          <Route exact path="/signup">
            <Register 
            onRegister={register}
             />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  )
};

export default App;
