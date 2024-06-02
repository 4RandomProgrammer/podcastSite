import { useEffect } from "react";


const CardPlayer = ({number, URI}) => {
    useEffect(()=>{
        window.onSpotifyIframeApiReady = (IFrameAPI) => {
            const element = document.getElementById(`embed-iframe-${number}`);
            console.log(number)
            console.log(element)
            const options = {
                uri: URI
              };
            const callback = (EmbedController) => {};
            IFrameAPI.createController(element, options, callback);
          };
    }, [])
    return (<div id={`embed-iframe-${number}`}></div>)
    
}  


export default CardPlayer;