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
      <section className='flex justify-between p-12 mt-10'>
        <div className=''>
          <h1 className='text-5xl'>Um podcast de Jovens</h1>
          <h1 className='text-5xl pl-72 m-4'>para jovens</h1>
        </div>

        <div className='flex justify-end'>
            <img className="w-1/2 justify-end rounded-md mr-10" src="src/assets/1000x1000.jpg" alt="" srcset="" />
          
            <div className='bg-gray-300 w-[500px] h-[500px] absolute top-32 right-10 -z-10 rounded-md'></div>
          
        </div>
      </section>
      <h2 className='text-5xl p-4'>Confira os últimos 5 episódios:</h2>
      <CardPlayer number={1}/>
    </div>
  )
}

export default App
