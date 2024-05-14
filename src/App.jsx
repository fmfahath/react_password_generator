import { useEffect, useState } from 'react';
import './App.css'
import logo from './assets/passwordLogo.png';
function App() {

  const [length, setLength] = useState("8");
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState({
    inputError: false,
    checkListError: false,
  });
  const [copyMessage, setCopyMessage] = useState(false);


  const generatePassword = () => {
    let charSet = "";
    let generatedPassword = "";

    if (!length) {
      setErrorState({ ...errorState, inputError: true });
      // console.log("inputError: ", errorState);
      return;
    }

    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (lowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
      if (numbers) charSet += "0123456789";
      if (symbols) charSet += "`~!@#$%^&*()_+`";

      // console.log(charSet); 
      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charSet.length);
        generatedPassword += charSet[randomIndex];
      }

      setPassword(generatedPassword);

    } else {
      setErrorState({ ...errorState, checkListError: true });
      // console.log("ChekError: ", errorState);
      return;
    }
  }





  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopyMessage(true);
      setTimeout(() => {
        setCopyMessage(false)
      }, 1000);
    }
  }


  const handleInput = (e) => {
    if (e.target.name === "input") {
      parseInt(setLength(e.target.value));
      setErrorState({ ...errorState, inputError: false });

    }
    else if (e.target.name === "uppercase") {
      setUppercase(e.target.checked)
      setErrorState({ ...errorState, checkListError: false });

    }
    else if (e.target.name === "lowecase") {
      setLowercase(e.target.checked)
      setErrorState({ ...errorState, checkListError: false });

    }
    else if (e.target.name === "numbers") {
      setNumbers(e.target.checked)
      setErrorState({ ...errorState, checkListError: false });
    }
    else {
      setSymbols(e.target.checked)
      setErrorState({ ...errorState, checkListError: false });
    }
  }


  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
          <h2>Password Generator</h2>
        </div>
        <div className="input">
          <label htmlFor="input" className={`${errorState.inputError ? "error" : ""}`}>Password Length: </label>
          <input type="number" id='input' className={`${errorState.inputError ? "error" : ""}`} onChange={handleInput} name='input' value={length} />
        </div>
        <div className={`checkList ${errorState.checkListError ? "error" : ""}`}>
          <div className="chekList-item">
            <input type="checkbox" id='uppercase' name='uppercase' onChange={handleInput} checked={uppercase} />
            <label htmlFor="uppercase">Include Uppercase</label>
          </div>
          <div className="chekList-item">
            <input type="checkbox" id='lowecase' name='lowecase' onChange={handleInput} checked={lowercase} />
            <label htmlFor="lowecase">Include Lowercase</label>
          </div>
          <div className="chekList-item">
            <input type="checkbox" id='numbers' name='numbers' onChange={handleInput} checked={numbers} />
            <label htmlFor="numbers">Include Numbes</label>
          </div>
          <div className="chekList-item">
            <input type="checkbox" id='symbols' name='symbols' onChange={handleInput} checked={symbols} />
            <label htmlFor="symbols">Include Symbols</label>
          </div>
        </div>
        <div className='generate-btn'>
          <button onClick={generatePassword}>Generate</button>
        </div>
        <div className="password">
          <input type="text" readOnly value={password} />
          <button onClick={copyPassword}>Copy</button>
        </div>
        <div className="copy-alert">
          <p className='success'>{copyMessage && "Password Copied!"}</p>
        </div>

      </div>
    </>
  )
}

export default App
