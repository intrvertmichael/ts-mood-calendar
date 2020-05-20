
import React from 'react';
import './App.css';

import Head from './head';

function App() {
  const myName:string = 'michael';
  const myAge:number = 30;

  return (
    <div className="App">
      <Head
        name={myName}
        age={myAge}
        speak={(a)=> console.log(a)}
      />
    </div>
  );
}

export default App;