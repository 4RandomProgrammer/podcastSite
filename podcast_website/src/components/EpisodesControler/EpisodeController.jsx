
import { useEffect, useState } from 'react'


const EpisodeController = ({numberOfEpisodes, Episodekey}) => {
  const [cards,setCards] = useState([])
  const [elementsLoaded, setElementsLoaded] = useState(false);
  const URIs = [
    'spotify:episode:0XGBddxZwbs8C9howkLwoY',
    'spotify:episode:1qymtgNCFlF6ARhpcj73aw', 
    'spotify:episode:0FSYRtvfoxnoWhqRn1H7zQ',
    'spotify:episode:34Uf8nkgz5wCeEzZftzEi9',
    'spotify:episode:6NCWEhFRXAc4RtYrI3leUz',
    'spotify:episode:1zm3Vw0mWH8yQ4YXrjvLRQ',
    'spotify:episode:1pLXmsfBPj0cth7oOt4KAn',
    'spotify:episode:1cYqIU9a4lIFm9NMaeKg9X',
    'spotify:episode:7hxbiM5K3tIASFQu0oUwSl',
    'spotify:episode:7bi3fQu5rxWL2X1rnZE3oW',
    'spotify:episode:1epOAT3ySCwFBdb8X1aOAQ',
    'spotify:episode:3CrCB3vvZF9TGmh6ebzM7F',
    'spotify:episode:46iBZqoi24j939nzto3JRf',
    'spotify:episode:0LKV7lGlqC1BgUWxnahOy9',
    'spotify:episode:6DNRLbamP4LqOBRxN8cNa1',
    'spotify:episode:61k5kEzpXPupO1ff0EY6WF',
    'spotify:episode:7yBbDOPQOnq21lZNksq8gM',
    'spotify:episode:0wrXdZoCL8weHxbm36iKZa',
    'spotify:episode:4xqGxnRx6bBEydRo7r3716',
    'spotify:episode:7rMA8XIaZH3cCfxwaoFYWc',
    'spotify:episode:1t0YM6QDdKGLCuFZaMaAcZ',
    'spotify:episode:3IV6rbGerWTx9DZIkLjiKw',
    'spotify:episode:5Yt5DP85rgqIzvam220ZbC',
    'spotify:episode:2VU1cgcCQbWh4HAye50y9M',
    'spotify:episode:08UBwxPWc5k3y52pz9G68t',
    'spotify:episode:1nroskUI0QT4IhpR3qw6jY',
    'spotify:episode:0UZhaPEL4Oa9OTyJIaeaqW',
    'spotify:episode:6S0QAXcHCVB3ESt6BEcZWc',
    'spotify:episode:3NNqqINv9C8fFs0trW3IcR',
    'spotify:episode:2vtezh9GXvgy9tEWySfcEU',
    'spotify:episode:2JB8YfR9Dd9Qz4fyW8Nbaz',
    'spotify:episode:0zVh5Q7yNmAK5jH8Zgv8BN',
    'spotify:episode:0Bs06ASXBC6LjoTUemWt9e',
    'spotify:episode:5GANupIgpIsKUIjXSV9MKq',
  ]

  useEffect(()=>{
    let newCards = []

    for(let i = 0; i < numberOfEpisodes; i++){
      const newCard = {key:`${Episodekey}-${URIs[i]}-${i}`, uri:URIs[i]}
      newCards.push(newCard)
    }
    
    setCards(prevCards => [...prevCards, ...newCards]);
    setElementsLoaded(true);
  },[numberOfEpisodes])

    useEffect(()=>{
      if(elementsLoaded) {
        console.log(elementsLoaded)
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