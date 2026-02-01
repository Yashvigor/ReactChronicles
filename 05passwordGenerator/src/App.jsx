import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef : when we want reference of any field then we can use useRef Hook.
  
  const passwordRef = useRef(null) // initially no reference.
  
  // UseCallBack: hook that lets us cache(memory) a function definition between re-renders.
  // In a callback function dependencies can be passed. Dependencies are no other than the function or states which we want to update and that should be re-rendered.
  // Dependencies are array in which variables will be passed. 
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // the string from which password will be created initially.
    if (numberAllowed) str += "0123456789" // if we click on number's checkbox then it will be appended.
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`" // if we click on character's checkbox then it will be appended.

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) // it brings the index randomly from str
      pass += str.charAt(char) // adding that character to password.
      
    } 

    setPassword(pass) 


  }, [length, numberAllowed, charAllowed, setPassword]) //Array of dependencies
  // if written only password instead of setPassword, it will go to infinite loop.
  // the field on which there is dependency and may possibly run so to optimize that method and keep it in cache.
  
  const copyPasswordToClipboard = useCallback(() => {
    // Using passwordRef we are able to know if there is any current object or not, if it is accessible ot not.
    // To give effect to let user know that a particular part is copied and to highlight/select that part.
    passwordRef.current?.select(); // Optionally select if current is accessible.

    // To select a particular range not whole 
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)  
    // we are working with core react so we can run window object. but when used nextjs wherein server side rendering occurs so window object is not available.
  }, [password]) // Dependency Array


// Use Effect Hook: this hook lets us synchronize a component with an external system.
// expects parameters as one callback and one dependency array.
  
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  // If any alteration occurs, so run again. 
  
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password} 
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly 
            ref={passwordRef} 
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6} //minimum value of length for password 
        max={100}  //maximum value of length for password
        value={length} 
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}} // when event is passed, then using setlength we can change that value in state.
          />
          <label>Length: {length}</label> 
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed} 
          id="numberInput" 
          onChange={() => {
              setNumberAllowed((prev) => !prev); // reverse the previous value of check box ( true or false )
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
