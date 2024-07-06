import EpisodeController from "../../components/EpisodesControler/EpisodeController";
import { useEffect, useState } from 'react'

const Home = () => {
    return (
        <>
             <section className='flex justify-between p-12 mt-10'>
                <div className="flex items-center">
                <div className=''>
                    <h1 className='text-5xl'>Um podcast de Jovens</h1>
                    <h1 className='text-5xl pl-72 m-4'>para jovens</h1>
                    <div className='flex justify-between mt-16'>
                    <img src="src\assets\Deezer.png" alt="" srcset="" />
                    <img src="src\assets\Spotify.png" alt="" srcset="" />
                    <img src="src\assets\Youtube.png" alt="" srcset="" />
                </div>
                </div>
                
                </div>
                <div className='flex justify-end'>
                    <img className="w-1/2 justify-end rounded-md mr-12" src="src/assets/1000x1000.jpg" alt=""/>
                    <div className='bg-gray-300 w-[500px] h-[500px] absolute top-32 right-10 -z-10 rounded-md'></div>
                </div>
            </section>

            <section className='p-10'>
                <h2 className='text-5xl p-4'>Confira os últimos 5 episódios:</h2>
                <EpisodeController numberOfEpisodes={5} Episodekey={'Home'}/>
                <h3 className='text-3xl text-center'>Gostou desses episódios? Confira outros <a href="#">aqui</a></h3>
            </section>
            <section className='p-16'>
                <h3 className='text-5xl'>Quem somos nós?</h3>
                <div className='flex justify-between'>
                
                <div className='items-center content-center'>
                    <h3 className='text-3xl mb-16'>Um grupo de jovens inquietos</h3>
                    <p className='w-3/4 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    {/* <p>Que tem buscado respostas para perguntas como:O que eu vim fazer aqui?Quem sou eu?</p>
                    <p>Experimentado e estudado com base no conhecimento logosófico atrás de criar as próprias respostas.</p> */}
                </div>
                
                <img className='rounded-full' src="src/assets/teste.png" alt=""/>
                </div>
            </section>
        </>
    )
}


export default Home;