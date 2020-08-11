import React, { useState } from 'react';
import './App.css';

function App() {

  // There are 2 methods of writing useState function 😻 
  // Method 1👎-Runs every time u start application, slows down app 
  // const [count, setCount] = useState(4); 
  // OR
  // const [count, setCount] = useState(initialCount());


  // const initialCount = () => {
  //   console.log("Lets go 👷");
  //   return 4;
  // }

  // Method 2👍- Better way
  // const [count, setCount] = useState(() => initialCount());



  // useState with Objects
  // const [state, setState] = useState({ count: 4, theme: 'blue' });
  // const count = state.count;
  // const theme = state.theme;


  // const decrementCount = () => {
  //   setState(preCount => {
  //     return {...preCount, count: preCount.count-1}
  //   })
  // }

  // const incrementCount = () => {
  //   setState(preValue => {
  //     return {...preValue, count: preValue.count + 1}
  //   })
  // }


  // UseStae with multiple states😝 🇺🇸 
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('red \u{1F9D1}\u{200D}\u{1F9B0}');


  const decrementCount = () => {
    setCount(preCount => preCount - 1)
    setTheme('blue \u{1F499}' )
  }
  const incrementCount = () => {
    setCount(preCount => preCount + 1)
    setTheme('blue \u{1F9D1}\u{200D}\u{1F9B0}' )
  }



  return (
    <div className="try">
      👎<button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>👍
    </div>
  );
}

export default App;
