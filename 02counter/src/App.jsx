import { useState } from "react";
// Hooks let you add state (data that changes over time) to your functional component and useState is a React Hook.

function App() {
  let [counter, setCounter] = useState(0);
  // useState returns two values:
  // counter - the current state value
  // setCounter - the function used to update that value

  const addValue = () => {
    setCounter(counter + 1);
    console.log("Value added", counter);

    
    // React batches multiple state updates for better performance.
    // Since all these updates use the same 'counter' value, React treats them as one update, and the counter increases only by 1.
    // setCounter(counter + 1); updates to same ounter value
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    
    // Use the callback form of setCounter to access the latest updated value.
    // Each update here receives the most recent state (prevCounter),
    // so all four updates will be applied one after another.
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);

    // The final result is that the counter increases by 4 instead of 1.
  };
  const removeValue = () => {
    console.log("Value removed", counter);
    if(counter > 0) setCounter(counter - 1);  // it logs the current value and decreases the counter by 1.
  }

  return (
    <>

     <h1>Counter Project</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Increase value</button> <br />
     <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
