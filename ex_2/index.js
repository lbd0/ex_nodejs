const WebSocket = require('ws')
const wss = new WebSocket.Server({port: 3000}, () => {
    console.log('server started')
})

wss.on('connection', (ws) =>{
    ws.on('message', (data)=>{
        console.log('data received %o', data)
        ws.send(data)
    })
})

wss.on('listening', ()=>{
    console.log('server is listening on port 3000')
})
