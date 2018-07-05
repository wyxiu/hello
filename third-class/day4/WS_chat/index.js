const WebSocket =require('ws');
const wss = new WebSocket.Server({port:8080});

wss.on('connection',(ws)=>{
	ws.on('message',(message)=>{
		console.log('received:%s',message);
		wss.clients.forEach((client)=>{
		client.send(message);
	});
	
});
	ws.send('something');
});
































