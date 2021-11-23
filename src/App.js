import { useState } from 'react';
import './App.css';
import RandomTarotCard from './RandomTarotCard';


function App() {

  //initialize states to contain the user info

  const [randomCard, setRandomCard] = useState(false)


  



  //define event handlers
  const handleRandomCard = () => {
    //when the button is clicked, make a request for a random card

    setRandomCard(!randomCard);
    //now go connect it to the button
  }

 
  return (
    <main class="App">
      <h1>Tarot Card App</h1>
      <div className="selectors">
        <div className="random">
          {/* Random Card Button */}
          {/* If randomCard is true, display the card info */}
          <button onClick={handleRandomCard}>Get a Random Tarot Card</button>
        </div>

      </div>

    {
      randomCard
        ? <RandomTarotCard/>
        : null
    }
    </main>
  );
}

export default App;
