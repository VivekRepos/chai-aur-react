import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom MyApp  || chai aur code</h1>
    </div>
  )
}

// const ReactElement ={
//   type: 'a',
//   props : {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children:'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = (
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click me to vist google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    
    <App></App>
    
  
)
