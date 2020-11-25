import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Schema from './humans_pb'
import base64 from 'base-64'
// import  client from './connection';

function _arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return base64.encode(binary);
}

function App() {
  useEffect(() => {
    const getData = () => {
      console.log("hey")
      fetch("http://localhost:3001").then(value => value.arrayBuffer()).then(
        (buffer) => {
          console.log(buffer)
          const Humans = Schema.Humans
          console.log(Humans.deserializeBinary(buffer))
        }
      ).catch((e) => console.log(e))

      // client.getAll(null, (err, data) => {
      //   if (!err) {
      //     console.log(data)
      //   }
      // });
    }

    getData()
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
