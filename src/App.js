import { useState } from 'react';
import './App.css';
import RandomTarotCard from './RandomTarotCard';
import TarotCardSearch from './TarotCardSearch';

function App() {

  //initialize states to contain the user info

  const [randomCard, setRandomCard] = useState(false)

  const [cardSearch, setCardSearch] = useState('')

  //define event handlers
  const handleRandomCard = () => {
    //when the button is clicked, make a request for a random card

    setRandomCard(!randomCard);
    //now go connect it to the button
  }

  const handleCardSearch = () => {

    setCardSearch() //!What can I put in here to target the form dropdown? 
  }
 
  return (
    <main class="App">
      <h1>Tarot Card App</h1>
      
      <div class="random">
        {/* Random Card Button */}
        {/* If randomCard is true, display the card info */}
        <button onClick={handleRandomCard}>Get a Random Tarot Card</button>
      </div>

      <div class="search">
        <form action="submit">
            {/* //!Need to put in some kind of loop to create an <option> element for each card in the API
            //!Need to tie the user selection to display the given card info (meaning up and rev) to the user (is this handleCardSearch?) */}
          <label for="dropdown">Select a Card:</label>  
          <select name="" id="dropdown">
            <option value="#">Name of the Card</option> 
          </select>
        </form>
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
