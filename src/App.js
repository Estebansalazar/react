import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const app = props => {
  
    const [personsState, setPersonsState] = useState({
      persons:[
      {name: 'Esteban', age: 25 },
      { name: 'Manu', age: 38 },
      {name: 'Carlos', age: 56 }
        ] 
    });
    
  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);
    const switchNameHandler = () => {
      // console.log('was click');
      // Dont do this _>this.state.persons[0].name = 'maximilian';
      //! para setear el set debemos usar setState
      setPersonsState({
        persons: [
          { name: 'Carlos', age: 25 },
          { name: 'Manu asdas d a', age: 38 },
          { name: 'Carlos', age: 56 }
        ]
      });
    };
  
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hola soy react</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My name is tebi</Person>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </header>
        
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'soy terrible de reat'));
  }


export default app;


