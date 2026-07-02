import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'

// Page Opens
// jokes = []     initially empty array
// fetch()
// Backend sends data --> RawJSON --> JS Object
// setJokes(data)   
// jokes = [.....]
// React renders again
// Display jokes

function App() {
  const [jokes, setJokes] = useState([])     
  // means jokes = [] and setJokes is a function to update jokes

  useEffect(() => {
    axios.get('/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
      });

  }, []);

  return (
    <>
      <h1>HELLO WORLD</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
