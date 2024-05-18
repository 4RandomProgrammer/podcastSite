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
      <section>
        <h1>Um podcast de Jovens</h1>
        <h1>para jovens</h1>
      </section>
      <h2 className='text-5xl p-4'>Confira os últimos 5 episódios:</h2>
      <CardPlayer number={1}/>
    </div>
  )
}

export default App
