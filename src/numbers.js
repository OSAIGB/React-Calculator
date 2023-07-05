import './App.css'
import {useState } from 'react'


function Numbers({mathResult,handleClick, result, clear, calculate}){
    const [clickedButton, setClickedButton] = useState(true);
    const clickButton = (id) => {
        setClickedButton(id);
        setTimeout(() => {
          setClickedButton(null);
        }, 300);
      };
      
    

    const numbers = [
        { numbers: 'AC', id: 'AC', className: 'ac' },
        { numbers: '/', id: '/', className: 'slash' }, 
         { numbers: '3', id: '3', className: 'number3' },
        { numbers: '*', id: 'x', className: 'multiply' },
        { numbers: '1', id: '1', className: 'number1' },
        { numbers: '2', id: '2', className: 'number2' },
        { numbers: '4', id: '4', className: 'number4' },
        { numbers: '5', id: '5', className: 'number5' },
        { numbers: '6', id: '6', className: 'number6' },
        { numbers: '7', id: '7', className: 'number7' },
        { numbers: '8', id: '8', className: 'number8' },
        { numbers: '+', id: '+', className: 'plus' },
        { numbers: '9', id: '9', className: 'number9' },
        { numbers: '0', id: '0', className: 'number0' },
        { numbers: '-', id: '-', className: 'minus' },
        { numbers: '.', id: '.', className: 'dot' },
        { numbers: '=', id: '=', className: 'equals'},
        {numbers: 'DEL', id: 'DEL', className: 'del'}
    ]
    

    return(
        <div className='cal-body'>
            <div className='output-field'>
          <input 
          type='text'  readOnly value={result} className='input-field'/>
          <input type='text' readOnly value={mathResult}  className='result'/>
 </div>
<div className='numbers-grid'>
{numbers.map(number => (
    <button
  id="number"
  value={number.numbers}
  key={number.id}
  className={`${number.className} ${clickedButton === number.id ? 'clicked' : ''}`}
  onClick={(e) => {
    clickButton(number.id);
    if (number.id === 'AC') {
      clear();
    } else {
      handleClick(e);
    }
  }}
>
  {number.id}
</button>

))}
</div>
</div>
    )
}
export default Numbers 