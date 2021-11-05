import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
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

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [token, setToken] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

    /**
   * Все фильмы
   */
  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [filteredShortMovies, setFilteredShortMovies] = React.useState([]);
  const [shortFilmValue, setShortFilmValue] = React.useState(false);

  const history = useHistory();
  const pathname = useLocation();
  const [isSuccess, setIsSuccess] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [errorMessageMovies, setErrorMessageMovies] = React.useState(false);

    /**
   * Все лайкнутые фильмы
   */
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedFilteredMovies, setSavedFilteredMovies] = React.useState([]);
  const [savedFilteredShortMovies, setSavedFilteredShortMovies] = React.useState([]);
  const [mappedSavedFilteredMovies, setMappedSavedFilteredMovies] = React.useState([]);

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setToken(token);
      mainApi
        .checkToken(token)
        .then((data) => {
          if (data) {
            setLoggedIn(true);
            history.push("/movies");
          }
        })
        .catch((err) => {
          console.log(err);
          history.push("/signin");
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    const filtered = movies.filter((movie) => {
      const mov = savedFilteredMovies.find((item) => {
        return item.movieId === String(movie.id);
      });
      return !!mov;
    });

    const mapped = filtered.map((item) => {
      const savedMovie = savedFilteredMovies.find((mov) => { return mov.movieId === String(item.id); })

      return {
        ...savedMovie,
        ...item,
      }
    });

    setMappedSavedFilteredMovies(mapped)

  }, [savedFilteredMovies])

 /**
   * Сохранение всех фильмов в стейт из локалстореджа
   */
  React.useEffect(() => {
    const movies = localStorage.getItem("movies");
    if (movies) {
      const result = JSON.parse(movies);
      setMovies(result);
    }
  }, [loggedIn])

  React.useEffect(() => {

    if (loggedIn) {
 const token = localStorage.getItem("jwt");

      mainApi
        .getSavedMovies(token) // мы делаем запрос на сервер , нам приходят наши сохраненные фильмы
        .then(({ data }) => {
          setSavedMovies(data);
          setSavedFilteredMovies(data);
        })
        .catch((err) => console.log(err));
    } else {
      setSavedMovies([]);
    }
  }, [loggedIn]);
  
  React.useEffect(() => {
    setSavedFilteredMovies(savedMovies); //тогда мы добавляем их в массив фильтрованных сохраненных фильмов
  }, [savedMovies]);

  //поиск среди сохраненных фильмов
  function handleSearchSavedMovies(text) {
    setErrorMessageMovies(false);
    setIsNotFound(false);

    const filteredMovies = filterKeyword(savedMovies, text);
    setSavedFilteredMovies(filteredMovies); //тогда мы добавляем их в массив фильтрованных сохраненных фильмов
  }

  React.useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem("jwt");
      mainApi.getUserProfile(token)
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((e) => console.log(e));
    }
  }, [loggedIn]);

  /**
   * Регистрация пользователя
   **/

  function register(registerData) {
    mainApi
      .register(registerData)
      .then(({ data: responseData }) => {
        if (responseData) {
          login(
            {
               email: responseData.email,
               password: registerData.password 
              }
              );
        } else {
          Promise.reject(`Ошибка ${responseData.status}`);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess("Что-то пошло не так. Попробуйте еще раз.");
      });
  }

  /**
   * Авторизация пользователя
   **/

  function login(data) {
    mainApi
      .login(data)
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem("jwt", res.data.token);
        setToken(res.token);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess("Что-то пошло не так. Попробуйте еще раз.");
      });
  }

  function handleUpdateProfile(data) {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .updateUserProfile(data, token)
        .then((res) => {
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          setCurrentUser(res.data);
          history.push(pathname.pathname);
          setIsSuccess("Профиль успешно обновлен.");
        })
        .catch((err) => {
          setIsSuccess("При обновлении профиля произошла ошибка.");
          console.log(err);
        });
    }
  }

  function handleSignOut(evt) {
    evt.preventDefault();
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");

    history.push("/");
    setMovies([]);
    setFilteredMovies([]);
    setFilteredShortMovies([]);
    setSavedMovies([]);
    setSavedFilteredMovies([]);
    setSavedFilteredShortMovies([]);
  }

  // запрос с сервера для поиска фильмов
  function handleSearchMovies(text) {
    setIsLoading(true);
    setErrorMessageMovies(false);
    setIsNotFound(false);
    if (!movies.length === 0) {
      const filteredMovies = filterKeyword(movies, text);

      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
      setFilteredMovies(filteredMovies);
    } else {
      moviesApi
        .getMovies()
        .then(({ data }) => {
          setMovies(data);
          localStorage.setItem("movies", JSON.stringify(data));
          const filteredMovies = filterKeyword(data, text);
          if (filteredMovies.length === 0) {
            setIsNotFound(true);
          } else {
            setIsNotFound(false);
          }
          setFilteredMovies(filteredMovies);
          if (shortFilmValue) {
            const filteredMoviesShort = filterShortfilm(filteredMovies);
            if (!filteredMoviesShort.length === 0) {
              setIsNotFound(false);
            } else {
              setFilteredShortMovies(filteredMoviesShort);
            }
          }
        })
        .catch((err) => {
          console.log(err);
          setErrorMessageMovies(true);
          setIsNotFound(false);
        });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }

  //счетчик по ключевым словам
  function filterKeyword(films, text) {
    let result = [];
    films.forEach((movie) => {
      if (movie.nameRU.toLowerCase().includes(text.toLowerCase())) {
        result.push(movie);
      }
    });
    return result;
  }

  //счетчик фильмов по времени
  function filterShortfilm(films) {
    return films.filter((movie) => {
      return movie.duration <= 40;
    });
  }

  //при нажатии лайка фильм сохраняется на наш бекенд
  function saveMovieAfterLike(movie) {
    setIsLoading(true);
    const token = localStorage.getItem("jwt"); //запросили токен
    if (token) {
      //если токен пришел
      mainApi
        .saveMovie(movie, token) //делаем запрос на сервер
        .then(({data}) => {
          let moviesArr = [...savedMovies]; //создаем массив , в который добавлем сохраненные фильмы
          moviesArr.push(data); //добавляем фильмы
          setSavedMovies(moviesArr); // массив с фильмами теперь не пустой
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessageMovies(true);
          setIsNotFound(false);
        });
    }
  }

  //поиск среди сохраненных фильмов
  function handleSearchSavedMovies(text) {
    setErrorMessageMovies(false);
    setIsNotFound(false);
      const filteredMovies = (filterKeyword(savedMovies, text));
        //тогда мы добавляем их в массив фильтрованных сохраненных фильмов
      setSavedFilteredMovies(filteredMovies); 
  }

  function deleteSavedMovies(id) {
    console.log(id)
    if (token) {
      mainApi
        .deleteSavedMovie(id, token)

        .then((res) => {
          setIsLoading(true);
          const moviesArr = savedMovies.filter((movie) => {
            return movie._id !== id;
          });
          setSavedMovies(moviesArr);
        })
        .catch((err) => {
          setErrorMessageMovies(true);
          setIsNotFound(false);
        });

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
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
            movies={
              filteredShortMovies.length ? filteredShortMovies : filteredMovies
            }
            component={Movies}
            errorMessageMovies={errorMessageMovies}
            isLoading={isLoading}
            onSearchMovies={handleSearchMovies}
            isNotFound={isNotFound}
            shortFilmValue={shortFilmValue}
            setShortFilmValue={setShortFilmValue}
            saveMovieAfterLike={saveMovieAfterLike}
            deleteSavedMovies={deleteSavedMovies}
            savedMovies={savedMovies}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            isNotFound={isNotFound}
            shortFilmValue={shortFilmValue}
            setShortFilmValue={setShortFilmValue}
            errorMessageMovies={errorMessageMovies}
            isLoading={isLoading}
            onSavedMoviesSearch={handleSearchSavedMovies}
            movies={ mappedSavedFilteredMovies }
            savedMovies={savedMovies}
            saveMovieAfterLike={saveMovieAfterLike}
            deleteSavedMovies={deleteSavedMovies}
          />
          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onSignOut={handleSignOut}
            onUpdateProfile={handleUpdateProfile}
            isSuccess={isSuccess}
            setIsSuccess={setIsSuccess}
          />
          <Route exact path="/signin">
            <Login
              onLogin={login}
              setIsSuccess={setIsSuccess}
              isSuccess={isSuccess}
            />
          </Route>
          <Route exact path="/signup">
            <Register
              isSuccess={isSuccess}
              setIsSuccess={setIsSuccess}
              onRegister={register}
            />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
