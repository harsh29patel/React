import { useState } from 'react'

import './App.css'
import CurrencyConverter from './component/CurrencyConverter';

function App() {
  

  return (
      <>
    
          <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'> 
        <div className='container'>     
        <CurrencyConverter/>
    </div>
    </div>
    </>
  )
}

export default App
