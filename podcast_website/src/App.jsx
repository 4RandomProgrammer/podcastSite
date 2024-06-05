import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import EpisodeController from './components/EpisodesControler/EpisodeController';
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


function App() {

  const episodes = [
    'spotify:episode:0XGBddxZwbs8C9howkLwoY',

  ]

  // useEffect ( () => {
  //   window.onSpotifyIframeApiReady = (IFrameAPI) => {
  //     const element = document.getElementById('embed-iframe-1');
  //     const options = {
  //         uri: 'spotify:episode:0XGBddxZwbs8C9howkLwoY'
  //       };
  //     const callback = (EmbedController) => {};
  //     IFrameAPI.createController(element, options, callback);
  //   };
  // }, []);


  return (
    <div className="App">
      <Navbar/>
      <section className='flex justify-between p-12 mt-10'>
        <div className="flex items-center">
          <div className=''>
            <h1 className='text-5xl'>Um podcast de Jovens</h1>
            <h1 className='text-5xl pl-72 m-4'>para jovens</h1>
          </div>
        </div>
       

        <div className='flex justify-end'>
            <img className="w-1/2 justify-end rounded-md mr-12" src="src/assets/1000x1000.jpg" alt=""/>
            <div className='bg-gray-300 w-[500px] h-[500px] absolute top-32 right-10 -z-10 rounded-md'></div>
        </div>
      </section>
      <section className='p-10'>
        <h2 className='text-5xl p-4'>Confira os últimos 5 episódios:</h2>
        <EpisodeController numberOfEpisodes={5}/>
        <h3 className='text-3xl text-center'>Gostou desses episódios? Confira outros <a href="#">aqui</a></h3>
      </section>
      <section>
        <h3 className='text-5xl'>Quem somos nós?</h3>
      </section>
      <footer className='bg-yellow-400'>
        <p>Se tudo passa, o que fica?</p>
        <p>Já se perguntou sobre o verdadeiro sentido da vida? Será que ela é realmente passageira? Somos um grupo de jovens questiionadores que busca as respostas para essas perguntas! Entre nesse bate papo diferente com pessoas que investigam os mistérios da vida e  procuram aprender e se aperfeiçoar. Estes estudantes de logosofia se propõem a extrair o verdadeiro valor das experiências do dia a dia. Afinal, se tudo passa, o que fica?</p>
        <div>
        <ul>
          <li>Redes Sociais</li>
          <li><FaInstagram /><a href="https://www.instagram.com/setudopassaoquefica/" target="_blank" rel="noopener noreferrer">@setudopassaoqfica</a></li>
          <li><FaYoutube /><a href="https://www.youtube.com/@setudopassaoquefica2934" target="_blank" rel="noopener noreferrer">setudopassaoquefica</a></li>
        </ul>
        </div>
        <div>
          <ul>
            <li>Contato</li>
            <li><MdEmail />teste@teste.com</li>
            <li><FaHome />Rua Mundo Transcendente, 1960</li>
            <li><BsFillTelephoneInboundFill />(11) 11111-1111</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
