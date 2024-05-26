import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] =useState(15)   // method for hooks   counter=> variable and setCounter=>function this is responsible to update variable
  
  // let counter = 15

  const  addValue=()=>{
    // console.log("clicked", counter); //optional to let you see in console how the function is working
    // counter = counter+ 1
    // setCounter(counter )  // if you pass the above variable counter than you need to update the const in method of hooks to let
    setCounter(counter+1) // you don't need to convert const to let
    if(counter===20){
      setCounter()
      alert("Maximum nubern allowed ism 20")
    }
  }
  const removeValue=()=>{
    setCounter(counter-1)
    if(counter===-1||counter===0){
      setCounter()
      alert("Number cannot be negative")
    }
  }
  return (
    <>
    <h1>Basic counter </h1>
    <h2>Counter value : {counter} </h2>

    <button  onClick={
      addValue}
      >Add Value {counter} </button>
    <br/>
    <br/>
    <button onClick={removeValue}
    >Remove Value {counter}</button>

    <p> footer:{counter}</p>

    </>
  )
}

export default App
