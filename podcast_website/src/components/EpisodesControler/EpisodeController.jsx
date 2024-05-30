import CardPlayer from "../CardPlayer/CardPlayer";



const EpisodeController = (numberOfEpisodes) => {
    useEffect(()=>{
        const cards = []
        for(let i = 0; i < number; i++){
            cards.append(<CardPlayer key={i} number={i}/>)
        } 
    },[])
    useEffect ( () => {
        window.onSpotifyIframeApiReady = (IFrameAPI) => {
          const element = document.getElementById('embed-iframe-1');
          const options = {
              uri: 'spotify:episode:0XGBddxZwbs8C9howkLwoY'
            };
          const callback = (EmbedController) => {};
          IFrameAPI.createController(element, options, callback);
        };
      }, []);

    return ({cards});
} 


export default EpisodeController;