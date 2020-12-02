import React, { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

// this file is generated from feed.proto file
// to generate it run code bellow
//  protoc  --js_out=import_style=commonjs,binary:. --ts_out="." feed.proto
import feed_pb from './feed_pb'
import logo from './logo.svg';
import './App.css';

const client = new W3CWebSocket('wss://3.136.3.174:8443/websocket_sim');
const evt = feed_pb.feed_event

const line0 = '{ values = [ { "@type" : "login", "token" : "WebsocketClient" } ] }\n'
const line1 = '{ values = [ { "@type" : "subscribe_snapshot", "token" : "WebsocketClient", "feed_svc" : "securities", "key" : "MTL.FIAT", "snap_mode" : "full", "sigma_list" : [ "security_order_depth_elem", "security_trade", "security_ref_price", "security_status", "security_volume" ] } ] }\n'

function App() {
  useEffect(() => {
    client.onopen = () => {
      console.log("Connection made!");
      client.send(line0)
      client.send(line1)

    }

    client.onmessage = async (message) => {
      try {
        const data = message.data as unknown as Blob
        data.arrayBuffer().then((buffer) => {
          const bytes = new Uint8Array(buffer)
          const data = evt.deserializeBinary(bytes)
          console.log(true, evt.toObject(true, data))
          console.log(false, evt.toObject(false, data))
        })

      } catch (error) {
        console.log("couldnt parse")
      }
    }
  }, [])

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
