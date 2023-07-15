import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Card from './component/Card'
import Slider from './component/Slider'
import Main from './component/Main'
import Ourclient from './component/Ourclient'
const App = () => {
  const body={
    
  }
    
  
  return (
    <div className='app'>

      <Header/>
      <Slider/>
      <Main/>
      <Card/>

      <Ourclient/>
      <Footer/>
    </div>
  )
}

export default App