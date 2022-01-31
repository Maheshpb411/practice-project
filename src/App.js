import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Student from './Student';

function App(){
  const [data,setData]=useState("user")
  const [num,setNum]=useState(0)
  const [print,setPrint]=useState(false)
  function getData(val){
    setData(val.target.value)
    
  }
  function getNum(val){
    setNum(val.target.value)
    
  }
  return(
    <div className="App">
    {
      print?
      <h1>your name is {data} <br/>and your age is {num}</h1>
     
      :null
    }
      <h1>your data</h1>
      <input type="text" placeholder="your name" onChange={getData}/>
      <input type="number" placeholder="your age" onChange={getNum}/>
      <button onClick={()=>setPrint(true)} >print</button>
    </div>
  );
}
export default App;
