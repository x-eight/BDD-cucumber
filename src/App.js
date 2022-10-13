import React,{useState} from "react";
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [dni, setDni] = useState(0);
  const [result, setResult] = useState("");

  const getCode =()=> {
    setResult(`${name}-${dni}`)
  }

  return (
    <div className="App">
      <div>
        <div id="divName">Full Name:
          <input id="nameId" type="text" onChange={e => setName(e.target.value)} />
        </div>
        <br />
        <div id="divDNI">DNI:
          <input id="dniId" type="number" onChange={e => setDni(e.target.value)} />
        </div>
        <br />
        <button id="buttonId" onClick={getCode}>Send</button>
      </div>
      <div>
        ID: {result==="" ?null:(<div id="resultId">{result}</div>)}
      </div>
    </div>
  );
}

export default App;
