import CardPlayer from "../CardPlayer/CardPlayer";
import { useEffect, useState } from 'react'


const EpisodeController = ({numberOfEpisodes}) => {
  const [cards,setCards] = useState([])
  // const URIs = ['spotify:episode:0XGBddxZwbs8C9howkLwoY','spotify:episode:1qymtgNCFlF6ARhpcj73aw', 'spotify:episode:0FSYRtvfoxnoWhqRn1H7zQ','spotify:episode:34Uf8nkgz5wCeEzZftzEi9','spotify:episode:6NCWEhFRXAc4RtYrI3leUz','spotify:episode:1zm3Vw0mWH8yQ4YXrjvLRQ',]
    const URIs = [<CardPlayer key={1} number={1} URI={'spotify:episode:0XGBddxZwbs8C9howkLwoY'}/>, <CardPlayer key={2} number={2} URI={'spotify:episode:1qymtgNCFlF6ARhpcj73aw'}/>, <CardPlayer key={3} number={3} URI={'spotify:episode:0FSYRtvfoxnoWhqRn1H7zQ'}/>, <CardPlayer key={4} number={4} URI={'spotify:episode:0XGBddxZwbs8C9howkLwoY'}/>, <CardPlayer key={5} number={5} URI={'spotify:episode:0XGBddxZwbs8C9howkLwoY'}/>, ]
    useEffect(()=>{
        
        for(let i = 0; i < numberOfEpisodes; i++){
          const newCard = URIs[i]
          const newCards = [...cards, newCard]
          setCards(newCards)
          console.log(newCards)
        }
        
    },[])
    
    return (<div>
      {cards}
    </div>);
} 


export default EpisodeController;