import { useState, useEffect } from 'react';



function TarotCardSearch () {


    const [ tarotCardSearch, setTarotCardSearch ] = useState([]);
    const [moreInfo, setMoreInfo] = useState(true);

    const handleMoreInfo = () => {
      setMoreInfo(!moreInfo);
      console.log("IS this this on?");
    
    }
    

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

    let handleCardSearch = (card) => {

      const name = card.target.label;
      const upright = card.target.dataset.upright;
      const reverse = card.target.dataset.reverse;
      const tarotImage = `/images/${card.value}.jpg`;
      const description = card.target.dataset.description;

      console.log( `${name}, ${upright}, ${reverse}, ${description}`)

      return (
        <section className="tarotCardInfo clearfix"> 
            <img src={tarotImage} alt={name} />
            <h2>{name}</h2>
            <h4>Meaning Upright:</h4>
            <p>{upright}</p>
            <h4>Meaning Reverse:</h4>
            <p>{reverse}</p>
            <button onClick={handleMoreInfo}>{moreInfo ? "More Info" : "Less Info"}</button>
            {
              moreInfo
              ? null 
              : 
              <>
              <h2>Description:</h2>
              <p>{description}</p>
              </>
            }
          
        </section>
      )
      
             
    }

    

    
   
    

    return(
      <>
      
      {tarotCardSearch.map(({name, name_short, meaning_up, meaning_rev, desc}) => {
                     
                                
        return(
          <option className="card" key={name_short} value={name_short} data-upright={meaning_up} data-reverse={meaning_rev} data-description={desc} onClick={handleCardSearch}>{name}</option>

          

        )
            
      }

      )}
      </>


        
    )
}




export default TarotCardSearch; 
