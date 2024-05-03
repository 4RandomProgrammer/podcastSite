import { useEffect, useState } from 'react'
import './App.css'
import CardPlayer from './components/CardPlayer/CardPlayer';
import Navbar from './components/Navbar/Navbar';

function App() {

  const episodes = [
    'spotify:episode:0XGBddxZwbs8C9howkLwoY',

  ]

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
    <div className="App">
      <Navbar/>
      <CardPlayer number={1}/>
    </div>
  )
}

export default App
