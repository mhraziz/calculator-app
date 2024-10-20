
import { useState } from 'react';
import './App.css';

const App=()=>{
  const [value,setValue]=useState([]);

  const handleClick = (e) => {
    setValue(value + e.target.value);
  };

  // Function to handle the evaluation
  const handleEqualClick = () => {
    try {
      //const result = new Function("return " + value.replace(/X/g, '*'))();
      //setValue(result.toString());
      setValue(eval(value) || "");
    } catch (error) {
      setValue("Error");
    }
  };


  return(
    <div>
         <div className='container'>
          <div className='calculator'>
            <form action=''>
              <div className='display'>
                <input type='text' value={value}></input>
              </div>
              <div>
                <input type='button' value="AC" onClick={e=>setValue("")}/>
                <input type='button' value="DE" onClick={e=>setValue(value.slice(0,-1))}/>
                <input type='button' value="*" onClick={handleClick}/>
                <input type='button' value="/" onClick={handleClick}/>
              </div>
              <div>
                <input type='button' value="7" onClick={handleClick}/>
                <input type='button' value="8" onClick={handleClick}/>
                <input type='button' value="9" onClick={handleClick}/>
                <input type='button' value="-" onClick={handleClick}/>
              </div>
              <div>
                <input type='button' value="4" onClick={handleClick}/>
                <input type='button' value="5" onClick={handleClick}/>
                <input type='button' value="6" onClick={handleClick}/>
                <input type='button' value="+" onClick={handleClick}/>
              </div>
              <div>
                <input type='button' value="1" onClick={handleClick}/>
                <input type='button' value="2" onClick={handleClick}/>
                <input type='button' value="3" onClick={handleClick}/>
                <input type='button' value="%" onClick={handleClick}/>
              </div>
              <div>
                <input type='button' value="." onClick={handleClick}/>
                <input type='button' value="0" onClick={handleClick}/>
                <input type='button' value="=" className='equal' onClick={handleEqualClick}/>
              </div>
            </form>
          </div>
         </div>
    </div>
  );
};

export default App;