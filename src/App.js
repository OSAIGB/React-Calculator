import './App.css';
import Numbers from './numbers';
import { useState } from 'react';
import math from 'mathjs';
function App() {
  const [result, setResult] = useState('')

  const handleClick = (e) =>{
    setResult(result.concat(e.target.value))
  }

  const clear = () =>{
setResult('')

const calculate = () =>{
  try{
    const calculatedValue = math.evaluate(result)
    setResult(calculatedValue.toString())
  } catch (erorr){
    setResult('error')
  }
}
  }
  return (
    <div className="App">
    <Numbers 
    handleClick = {handleClick}
    result ={result}
    clear = {clear}
    calculate={calculate}/>
    </div>
  );
}

export default App;
