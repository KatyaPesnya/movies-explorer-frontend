import React from 'react';
import { Link, useHistory } from 'react-router-dom'

function NotFound(){
    const history = useHistory();
return(
    <main className="not-found">
       <h3 className="not-found__title"> 404 </h3>
       <p className="not-found__text"> Страница не найдена</p>
    <Link className="not-found__button" onClick={()=> history.goBack()}>Назад</Link>
    </main>
)
}

export default NotFound;
