import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive") //state for storing color and reflecting it in ui
  // when refreshed app loads again and react initializes the  setColor with olive
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}} //to implement state
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")} // callback function for updating the state. onclick fun expects a function but if we write setColor then it is a reference and it takes the return value of that reference. Also parameter can't be passed this way. 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
