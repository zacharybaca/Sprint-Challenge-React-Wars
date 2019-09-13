import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [character, setCharacter] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios
    .get(`https://swapi.co/api/people/`)
    .then(response => {
      const person = response.data.results;
      console.log(person);
      setCharacter(person);
    })
    .catch(error => {
      console.log(error);
    })
}, [])
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    <div className="card-container">
      {character.map(person => {
        return <CharacterCard person={person} key={person.name}/>
      })}
    </div>
    </div>
  );
}

export default App;
