import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [val, setVal] = useState("");

 function onSubmit(event){
  event.preventDefault();

  if (val == ""){
    return;
  }

  setItems([val, ...items]);

  setVal("");
 }

 function onChange(event) {
   setVal(event.target.value)
 }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1 className='font-extrabold mt-3'>FORM FIELD</h1>
        <label htmlFor="txt">To do List:</label><br /><br />
        <input className='px-1 py-1 mr-3 mb-3 text-center' type="text" id="txt" placeholder='Type' onChange={onChange} value={val} />
        
        <button className='font-bold bg-green-950 hover:bg-green-400 cursor-pointer px-2 py-1 rounded-2xl' type='submit'>Click Me!</button>
      </form><br />

      <div className='flex justify-center'>
        {items.map(item => 
        <div className=' bg-gray-600 px-1 py-1 w-50 italic '>
          {item}
        </div> 
        )}
        
      </div>

    </div>
  );
}




export default App