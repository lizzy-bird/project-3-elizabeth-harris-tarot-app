import { useState } from 'react';
import './App.css';
import RandomTarotCard from './RandomTarotCard';
// import TarotCardSearch from './TarotCardSearch';
 


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
    <>
    <main className="App">
      <h1>Tarot Card App</h1>
      <p className="instructions">Take a moment to pause and set your intention, then click the button below to pull a card.</p>

      <div className="selectors">


        <div className="random">
          {/* Random Card Button */}
          {/* If randomCard is true, display the card info */}
          <button onClick={handleRandomCard}>{randomCard ? "Start Over" : "Get a Random Card"}</button>
        </div>

        {/* <div className="search">
          <form action="submit">
              //!Need to put in some kind of loop to create an <option> element for each card in the API
              //!Need to tie the user selection to display the given card info (meaning up and rev) to the user (is this handleCardSearch?)
            <label htmlFor="dropdown">Select a Card:</label>  
            <select name="Search" id="dropdown">
              <option value="" hidden>Search by Card Name</option>

              
              <TarotCardSearch/>
              
            
              
            </select>
          </form>
        </div> */}


      </div>

      {randomCard
        ? <RandomTarotCard />
        : null
      }
      
      

    </main>
    
    <footer>
      <p><a href="https://junocollege.com/">Made at ©Juno College 2021</a></p>

      </footer>
    </>
  );
}

// const selectedCard = document.getElementById('tarotCard');

// selectedCard.addEventListener('click', handleCardSearch);

// function handleCardSearch (card) {

//   const name = card.target.label;
//   const upright = card.target.dataset.upright;
//   const reverse = card.target.dataset.reverse;
//   const tarotImage = `/images/${card.value}.jpg`;
//   const description = card.target.dataset.description;

//   console.log( `${name}, ${upright}, ${reverse}, ${description}`)

//   return (

//     <section className="tarotCardInfo clearfix"> 
//         <img src={tarotImage} alt={name} />
//         <h2>{name}</h2>
//         <h4>Meaning Upright:</h4>
//         <p>{upright}</p>
//         <h4>Meaning Reverse:</h4>
//         <p>{reverse}</p>
//     </section>
      
//   )

        
// }

export default App;