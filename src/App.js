import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='app'>
      <div className='row'>
        <div className='col-11'>
          <Navbar />
          <div className='home'>

            <div className='home-text'>
              <h1> Miguel Augusto </h1>
              <br/>
              <h1 className='home-text-2'> Alarcon Huaymacari </h1> 
            </div>

            <div className='home-btn'>
              <button> Welcome </button>
            </div>

          </div>

        </div>
        
      </div>

    </div>
  )
}

export default App
