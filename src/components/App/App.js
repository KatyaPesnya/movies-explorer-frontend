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
// import moviesApi from "../../utils/MoviesApi";

function App(props) {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [token, setToken] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  // const [movies, setMovies] = React.useState([]);
  const history = useHistory();
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false);

  const checkToken = React.useCallback(
    () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setToken(token);
      mainApi.checkToken(token)
    .then((res) => {
      if (res) {
        setLoggedIn(true); 
        history.push("/");
      }
    })
      .catch((err) => {
        console.log(err);
      });
    }
  }, 
  [history]
  );

  React.useEffect(() => {
      checkToken();
  }, [checkToken])

  React.useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem('jwt');
      mainApi.getUserProfile(token)
      .then((res) => {
                // const [userData] = res;
                setCurrentUser(res.data);
              })
      .catch((err) => console.log(err));
    }
  }, [loggedIn])

  function register(data) {
    setIsLoading(true);
    mainApi.register(data).then(
      (data) => {
        setIsSuccess(false);
        login({
email:data.email,
password: data.password
        })
        history.push("/movies");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(true);
        })  
  }

  function login(data) {
    setIsLoading(true);
    mainApi.login(data).then(
      (res) => {
        setLoggedIn(true);
        localStorage.setItem("jwt", res.data.token);
        setToken(res.token);
        history.push("/movies");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })  
  }


 function handleUpdateProfile(data) {
    const token = localStorage.getItem("jwt")
    setIsLoading(true);
    if(token) {
      mainApi.updateUserProfile(data,  token)
  
      .then((res) =>{
        setIsLoading(false);
        setIsSuccess(false);
        setCurrentUser(res.data)
         localStorage.setItem('currentUser', JSON.stringify(res.data))
      })
      .catch((err) => {
        setIsSuccess(true)
        console.log(err);

      }); 
    }
  }

  function handleSignOut(evt) {
    evt.preventDefault()
    setLoggedIn(false);
    setCurrentUser({})
    localStorage.clear()
    history.push("/")
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
             isSuccess={isSuccess}
             isLoading={isLoading}
          />
          <Route exact path="/signin">
            <Login 
            onLogin={login}
            isLoading={isLoading}
             
            />
          </Route>
          <Route exact path="/signup">
            <Register 
            isSuccess={isSuccess}
            onRegister={register}
            isLoading={isLoading}
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
