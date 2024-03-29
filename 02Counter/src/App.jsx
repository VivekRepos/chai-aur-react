import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   //let counter = 5;

   let [counter,setCounter] = useState(5)

   const addValue = () => {
    console.log("Clicked",counter);
    //counter++; 
    //setCounter(counter + 1);
    
    setCounter(prevCounter => prevCounter + 1)// setCounter((prevCounter) => { return prevCounter + 1})
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
   }

   const removeValue = () => {
    setCounter(counter -1)
   }
 
  return (
    <>
      
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value {counter}</button>
      
      <p>Footer :: {counter}</p>

      
    
    </>
  )
}

export default App
