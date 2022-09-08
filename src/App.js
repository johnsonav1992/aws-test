import './App.css';
import {useState} from 'react'
import axios from 'axios';

function App() {
  const [word, setWord] = useState("Barricuda")

  const handleClick = () => {
    axios
      .get('/word')
      .then(({data}) => {
        setWord(data)
      })
      .catch((err) => {
        alert("Oops, it doesn't seem to work. Can't access the server.")
      })
  }

  return (
    <div className="App">
      <header>
        <h2>Hosting test</h2>
      </header>
      <h1 className='big-title'>Testing Hosting</h1>
      <h2>The current word: <span className='word'>{word}</span></h2>
      <p>This page should have a button that can retreive a word from the server. The button will send out an axios call that requests the server to give us a random word. The word will be send back and saved to state, which will be displayed up above.! </p>
      <button onClick={handleClick}>Get new Word</button>
    </div>
  );
}

export default App;
