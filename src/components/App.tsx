
import React from 'react';
import './App.css';

import Head from './head';

function App() {
  let name:string = 'michael';

  const pro = {
    name : {name},
    lang : 'typescript'
  }

  return (
    <div className="App">
      <Head pro={pro} />
    </div>
  );
}

export default App;