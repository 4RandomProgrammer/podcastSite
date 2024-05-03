import { useEffect, useState } from 'react'
import './App.css'
import CardPlayer from './components/CardPlayer/CardPlayer';
import Navbar from './components/Navbar/Navbar';

function App() {

  const episodes = [
    'spotify:episode:0XGBddxZwbs8C9howkLwoY',

  ]

  useEffect ( () => {
    const script = document.createElement('script')

    script.src = "https://open.spotify.com/embed/iframe-api/v1"
    script.async = true
    
    document.body.appendChild(script)

  }, []);

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


  return (
      <CardPlayer number={1}/>
  )
}

export default App
