import './App.css'
import logo from './assets/passwordLogo.png';
function App() {

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
          <h2>Password Generator</h2>
        </div>
        <div className="input">
          <label htmlFor="input">Password Length: </label>
          <input type="number" id='input' name='input' />
        </div>
        <div className="checkList">
          <div className="chekList-item">
            <input type="checkbox" id='uppercase' />
            <label htmlFor="uppercase">Include Uppercase</label>
          </div>
          <div className="chekList-item">
            <input type="checkbox" id='lowecase' />
            <label htmlFor="lowecase">Include Lowercase</label>
          </div>
          <div className="chekList-item">
            <input type="checkbox" id='numbers' />
            <label htmlFor="numbers">Include Numbes</label>
          </div>
          <div className="chekList-item">
            <input type="checkbox" id='symbols' />
            <label htmlFor="symbols">Include Symbols</label>
          </div>
        </div>
        <div className='generate-btn'>
          <button>Generate</button>
        </div>
        <div className="password">
          <input type="text" readOnly />
          <button>Copy</button>
        </div>

      </div>
    </>
  )
}

export default App
