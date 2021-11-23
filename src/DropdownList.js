//create a function to generate a dynamic dropdown list by looping through all the card names in the API

//property: "name"
import { useState, useEffect } from 'react';
import RandomTarotCard from './RandomTarotCard';

function DropDownList(props) {

    RandomTarotCard(false);

    const [allCards, setAllCards] = useState([])

    const cardList = allCards.map((card) => {
        return card.name;
    })


    useEffect( () => {
        //make a fetch request
        //store the returned data from API in state
    
        fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random')
          .then((result) => {
            return result.json()
          })
          .then((jsonResult) => {
            setAllCards(jsonResult.cards)
            
          })
    
    }, [])

    //map through the results to create a new array (spread operator?)
    //

    


    


}

export default DropDownList;