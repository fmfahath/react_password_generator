import { useState } from 'react';
import './App.css'
import logo from './assets/passwordLogo.png';
function App() {

  const [length, setLength] = useState("8");
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    console.log(length, uppercase, lowercase, numbers, symbols);
  }

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
          <h2>Password Generator</h2>
        </div>
        <div className="input">
          <label htmlFor="input">Password Length: </label>
          <input type="number" id='input' name='input' onChange={(e) => parseInt(setLength(e.target.value))} value={length} />
        </div>
        <div className="checkList">
          <div className="chekList-item">
            <input type="checkbox" id='uppercase' onChange={(e) => setUppercase(e.target.checked)} checked={uppercase} />
            <label htmlFor="uppercase">Include Uppercase</label>
          </div>
          <div className="chekList-item">
            <input type="checkbox" id='lowecase' onChange={(e) => setLowercase(e.target.checked)} checked={lowercase} />
            <label htmlFor="lowecase">Include Lowercase</label>
          </div>
          <div className="chekList-item">
            <input type="checkbox" id='numbers' onChange={(e) => setNumbers(e.target.checked)} checked={numbers} />
            <label htmlFor="numbers">Include Numbes</label>
          </div>
          <div className="chekList-item">
            <input type="checkbox" id='symbols' onChange={(e) => setSymbols(e.target.checked)} checked={symbols} />
            <label htmlFor="symbols">Include Symbols</label>
          </div>
        </div>
        <div className='generate-btn'>
          <button onClick={generatePassword}>Generate</button>
        </div>
        <div className="password">
          <input type="text" readOnly value={password} />
          <button>Copy</button>
        </div>

      </div>
    </>
  )
}

export default App
