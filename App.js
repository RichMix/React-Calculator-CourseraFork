import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = ""  
  }; 
 
  function resetResult(e) { 
  	 e.preventDefault(); 
    setResult(null);  
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        <div className="button-container">
          <button onClick={plus}>Add</button> 
          <button onClick={minus}>Minus</button> 
          <button onClick={times}>Times</button> 
          <button onClick={divide}>Divide</button> 
          <button className={"button-orange"} onClick={resetInput}>Reset Input</button>
          <button className={"button-orange"} onClick={resetResult}>Reset Result</button> 
        </div>
      </form> 
    </div> 
  ); 
} 
 
export default App;
