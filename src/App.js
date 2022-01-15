import './App.css';
import React, { useState } from 'react';

function App() {
  const [border, setBorder] = useState([0,0,0,0])
  const [borderRadius, setBorderRadius] = useState('0px 0px 0px 0px')

  const updateBorder = () => {
    const newBorder = border;
    const borderString = `${newBorder.join('px ')}px`
    setBorderRadius(borderString);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    const indexChange = name.split('-')[1];
    const prevBorder = border
    prevBorder[indexChange] = value === '' ? 0 : value
    setBorder(prevBorder);
    updateBorder();
  }

  const handleClick = () => {
    navigator.clipboard.writeText(`border-radius: ${borderRadius}`);
    alert(`Texto copiado: border-radius: ${borderRadius}`)
  }

  return (
    <div className="App">
      <header>
        <h1>Border-radius Previewer </h1>
      </header>
      <main className="main-container">
        <div className="line-inputs">
          <input type="text" placeholder="0" name="border-0" className="border-input" onChange={handleChange}/>
          <input type="text" placeholder="0" name="border-1" className="border-input" onChange={handleChange}/>
        </div>
        <div className="square-container" style={{'borderRadius': borderRadius}}></div>
        <div className="line-inputs">
          <input type="text" placeholder="0" name="border-3" className="border-input" onChange={handleChange}/>
          <input type="text" placeholder="0" name="border-2" className="border-input" onChange={handleChange}/>
        </div>

        <input className="copy-btn" type="button" value="Copiar" onClick={handleClick}/>
      </main>
    </div>
  );
}

export default App;
