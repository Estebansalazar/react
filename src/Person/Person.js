//1) debemos importar react
import React from 'react';


// () => {
//     return <p> I'm a person! </p>
// } is the same function (){ return <p> I'm a person! </p>}



//con props recibimos info en la funcion
const person = (props) => {
    return (
        <div className="App-header"> 
            <p> I'm a gil {props.name} and I'm {props.age} old </p>
            <p>{props.children}</p>  {/* Obtenemos lo que tenemos dentro de nuestro componente y lo convertims en parrafo*/}
        </div>
    )
};

export default person;