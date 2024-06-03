
import { useEffect, useState } from 'react'


const EpisodeController = ({numberOfEpisodes}) => {
  const [cards,setCards] = useState([])
  const [elementsLoaded, setElementsLoaded] = useState(false);
  const URIs = [
    'spotify:episode:0XGBddxZwbs8C9howkLwoY',
    'spotify:episode:1qymtgNCFlF6ARhpcj73aw', 
    'spotify:episode:0FSYRtvfoxnoWhqRn1H7zQ',
    'spotify:episode:34Uf8nkgz5wCeEzZftzEi9',
    'spotify:episode:6NCWEhFRXAc4RtYrI3leUz',
    'spotify:episode:1zm3Vw0mWH8yQ4YXrjvLRQ',
  ]

  useEffect(()=>{
    let newCards = []
    for(let i = 0; i < numberOfEpisodes; i++){
      // const newCard = <CardPlayer key={i} number={i}/>
      const newCard = {key:i, uri:URIs[i]}
      newCards.push(newCard)

    }

    setCards(prevCards => [...prevCards, ...newCards]);
    setElementsLoaded(true);
  },[numberOfEpisodes])

    useEffect(()=>{
      if(elementsLoaded) {
        window.onSpotifyIframeApiReady = (IFrameAPI) => {
          cards.forEach(cardItem => {
              const element = document.getElementById(`embed-iframe-${cardItem.key}`);
              const options = {
                  uri: cardItem.uri
                };
              const callback = (EmbedController) => {};
              IFrameAPI.createController(element, options, callback);
          })
        }
        
      }
      
  }, [elementsLoaded, cards])
    
    return (<>
      {cards.map(cardItem => (
        <div className="m-4">
          <div key={cardItem.key} id={`embed-iframe-${cardItem.key}`}></div>
        </div>
        
      ))}
    </>);
} 


export default EpisodeController;