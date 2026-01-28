import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "yashvi",
    age: 19
  } // the object can be passed 
  let newArr = [1, 2, 3]  
  //props is an object 
  return (
    <> //fragment
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      //props is an object so using that reference we can use its fields like username and age props.username, props.age
      <Card username="yashvi gor" btnText="click me" /> //whatever is passed to this card is passed to props
      <Card username="mauli rami" />
    </>
  )
}

export default App
