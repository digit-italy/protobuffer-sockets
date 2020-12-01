const WebSocket = require('ws');
const feed_pb = require('./feed_pb')


line0 = '{ values = [ { "@type" : "login", "token" : "WebsocketClient" } ] }\n'
line1 = '{ values = [ { "@type" : "subscribe_snapshot", "token" : "WebsocketClient", "feed_svc" : "securities", "key" : "MTL.FIAT", "snap_mode" : "full", "sigma_list" : [ "security_order_depth_elem", "security_trade", "security_ref_price", "security_status", "security_volume" ] } ] }\n'
line2 = '{ values = [ { "@type" : "unsubscribe", "token" : "WebsocketClient", "feed_svc" : "securities", "key" : "MTL.FIAT" } ] }\n'
line3 = '{ values = [ { "@type" : "logout", "token" : "WebsocketClient" } ] }\n'

var client = new WebSocket('wss://3.136.3.174:8443/websocket_sim', { rejectUnauthorized: false });

client.on("error", (err) => {
    console.log(err)
})

client.on(
    "open", async () => {
        client.send(line0, (error) => {
            if (!error) {
                client.send(line1)
            }
        })
        console.log("ok")


    }
)

client.on("message", (e) => {
    evt = feed_pb.feed_event
    console.log(e)
    try {
        console.log(evt.deserializeBinary(e))
    } catch (error) {
        console.log("couldnt parse")
    }
    
})

var stdin = process.stdin;
stdin.setRawMode( true );
stdin.setEncoding( 'utf8' );

stdin.on( 'data', function( key ){
  if ( key === '\u0003' ) {
    client.send(line2)
    client.send(line3)
    process.exit();
    
  }
  process.stdout.write( key );
});