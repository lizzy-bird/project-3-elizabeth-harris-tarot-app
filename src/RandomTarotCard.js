import { useState, useEffect } from 'react';

function RandomTarotCard() {

  //initialize state to hold the tarot card info

  const [randomTarotCard, setRandomTarotCard ] = useState([]);

  const [moreInfo, setMoreInfo] = useState(true);

  const handleMoreInfo = () => {
    setMoreInfo(!moreInfo);
    console.log(randomTarotCard.desc);
    return (
      <>
      <h2>Description:</h2>
      <p>{randomTarotCard.desc}</p>
      </>
    )
  }

  const tarotImage = `/images/${randomTarotCard.name_short}.jpg`

  //define a useEffect, which will run the "side effect" of fetching the tarot card data only when the component is rendered in the DOM

  useEffect( () => {
    //make a fetch request
    //store the returned data from API in state

    fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random')
      .then((result) => {
        return result.json()
      })
      .then((jsonResult) => {
        setRandomTarotCard(jsonResult.cards[0])
      })

  }, [])

  // Does the image element need a key? What even is a key? 

  return (
    <section class="tarotCardInfo"> 
        <img src={tarotImage} alt={randomTarotCard.name} />
        <h2>{randomTarotCard.name}</h2>
        <h4>Meaning Upright:</h4>
        <p>{randomTarotCard.meaning_up}</p>
        <h4>Meaning Reverse:</h4>
        <p>{randomTarotCard.meaning_rev}</p>
        <button onClick={handleMoreInfo}>{moreInfo ? "More Info" : "Less Info"}</button>
        {
          moreInfo
          ? null 
          : 
          <>
          <h2>Description:</h2>
          <p>{randomTarotCard.desc}</p>
          </>
        }
      
    </section>
  )
}

export default RandomTarotCard;