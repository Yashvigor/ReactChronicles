import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
       <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     }, //props is an object 
//     children: 'Click me to visit google!',
// }
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
   'a', //tag
  {
    href: 'https://google.com',
    target: '_blank',
  } //object
  'click to visit google' //direct text
)
ReactDOMcreateRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   // MyApp()
  //   {/* anotherElement  */}
  //   reactElement
  // </StrictMode>

  <App/>

)
