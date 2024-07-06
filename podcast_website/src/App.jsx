
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Videos from './views/Videos/Videos';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import Episodes from './views/Episodes/Episodes';


function App() {
  const [viewedPage, setViewedPage] = useState('Home')
  const [content, setContent] = useState(<Home/>)

  function chooseViewedPage(pageName){
    setViewedPage(pageName)
  }

  useEffect(()=> {
    if (viewedPage === 'Home') {
      setContent(<Home/>)
   
    }
    else if (viewedPage === 'Episodes') {
      setContent(<Episodes/>)
    }
    else {
      setContent(<Videos/>)
    }
  }, [viewedPage])

  return (
    <div className="App">
      <Navbar chooseViewedPage={chooseViewedPage}/>
      {content}
      <Footer/>
    </div>
  )
}

export default App
