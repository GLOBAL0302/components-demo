// import viteLogo from '/vite.svg'
import './App.css';
import Circle from './Circles/Circle';
import {useState} from 'react';

function App() {
  //5,11,16,23,32
  const[numbers, setNumbers] = useState<number[]>([
    5, 11, 16, 23, 32
  ]);

   const  changeNum = ()=>{
     const newNum:number[] = [];
     for(let i= 0 ; i<5 ; i++){
       const oneNum = Math.floor(Math.random() * (36 - 5) + 5);
       newNum.push(oneNum);
     }
     setNumbers(newNum);
   };

  return (
    <div className="app">
      <div>

        <button onClick={changeNum}>
         New Numbers
        </button>
      </div>
      <Circle>{numbers[0]}</Circle>
      <Circle>{numbers[1]}</Circle>
      <Circle>{numbers[2]}</Circle>
      <Circle>{numbers[3]}</Circle>
      <Circle>{numbers[4]}</Circle>
    </div>
  );
}

export default App;
