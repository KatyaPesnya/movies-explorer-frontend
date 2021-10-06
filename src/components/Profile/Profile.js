import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import useForm from "../../hooks/useForm";
import  CurrentUserContext  from "../../contexts/CurrentUserContext";


function Profile({ onSignOut, onUpdateProfile,isSuccess}) {

  const currentUser = React.useContext(CurrentUserContext)
//  console.log(currentUser)
  const { values, handleChange, errors, resetForm, isValid } = useForm({});

  const [isValidForm, setIsValidForm] = React.useState(false)

 React.useEffect(()=>{
  if (currentUser) {
    resetForm(currentUser)
  }
 }, [currentUser, resetForm])

React.useEffect(() =>{
setIsValidForm(isValid)
}, [values, isValid])

React.useEffect(()=> {
if(currentUser.name === values.name && currentUser.email === values.email ){
  setIsValidForm(true);
}else setIsValidForm(false)
}, [currentUser, values]
)

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateProfile({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <main className="profile">
      <div className="profile__container">
        <Header />
      </div>
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1> 
      <form className="profile__form" 
      onSubmit={handleSubmit}
      >
        <label className="profile__info-input" htmlFor="name">
          Имя
          <input
            placeholder={currentUser.name}
            className="profile__input"
            name="name"
            required
            type="text"
            minLength="2"
            maxLength="30"
            value={values.name || ''}
            onChange={handleChange}
            id="name"
          />
        </label>
        <span className="profile__error"> {errors.name || ''}</span>
        <label className="profile__info-input" htmlFor="email">
          E-mail
          <input
            className="profile__input"
            placeholder={currentUser.email}
            name="email"
            required
            type="email"
            id="email"
            value={values.email || ''}
            onChange={handleChange}
          />
        </label>

        <span className="profile__error">{errors.email || ""} </span>
{ isSuccess ? (<span className="profile__error"> Что-то пошло не так! Попробуйте еще раз. </span>
  ) : ""}
        <button 
        className="profile__paragraph"
         type="submit"
         disabled={!isValid}
          >
          Редактировать
        </button>
      </form>
      <button 
      className="profile__link"
      type="button"
      onClick={onSignOut}
      >
        Выйти из аккаунта
        </button>

    </main>
  );

}

export default Profile;
