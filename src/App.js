import './App.css';
import Numbers from './numbers';
import { useState } from 'react';
import * as math from 'mathjs';

function App() {
  const [result, setResult] = useState('')
const [mathResult, setMathResult] = useState('')

  const handleClick = (e) => {
    if (e.target.value === '=') {
      calculate();
    } 
    else {
      setResult(result.concat(e.target.value));
    }
    if(e.target.value === 'DEL'){
      del()
    }
  };
  
  
const del = () =>{
setResult(result.slice(0, -1))
}
  const clear = () =>{
    setResult('')
    setMathResult('')
  }

  const calculate = () =>{
    try{
      const calculatedValue = math.evaluate(result)
      setMathResult(calculatedValue.toString())
    } catch (error){
      setMathResult('error')
    }
  }

  return (
    <div className="App">
      <Numbers 
        handleClick = {handleClick}
        result ={result}
        clear = {clear}
        calculate= {calculate}
        mathResult = {mathResult}/>
    </div>
  );
}

export default App;
