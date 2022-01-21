import { useState, useEffect } from 'react';



function TarotCardSearch () {


    const [ tarotCardSearch, setTarotCardSearch ] = useState([]);
    // const [moreInfo, setMoreInfo] = useState(true);

    // const handleMoreInfo = () => {
    //   setMoreInfo(!moreInfo);
    //   console.log("IS this this on?");
    
    // }
    

    useEffect( () => {
        //make a fetch request
        //store the returned data from API in state
    
        fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/')
          .then((result) => {
            return result.json()
          })
          .then((jsonResult) => {
            setTarotCardSearch(jsonResult.cards)
          })
    
    }, [])

    

    return(
        
        
        
      <>
      
      {tarotCardSearch.map(({name, name_short, meaning_up, meaning_rev, desc}) => {
        return(
          <option id="tarotCard" key={name_short} value={name_short} data-upright={meaning_up} data-reverse={meaning_rev} data-description={desc}>{name}</option>
        )
      }
      )}
      </>
    )
}












export default TarotCardSearch; 
