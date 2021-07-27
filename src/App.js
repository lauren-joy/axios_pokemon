import React, {useState, useEffect} from 'react';
import './App.css';
import axios from'axios';
import { react } from '@babel/types';

function App() {
  const [poke, setPoke]= useState([]);

    useEffect(()=>{
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then(response=>{setPoke(response.data.results)})
      
      .catch((err)=>{
        console.log(err);
      })
    }, []);

    return (
      <div className="App">
        <button className="btn">Fetch Pokemon</button>
        <ul >
          {poke.map((pokeObj, index)=>{
            return (<li key={index}>{pokeObj.name}</li>)
            })
          }
        </ul>
      </div>
    )
}

export default App;
