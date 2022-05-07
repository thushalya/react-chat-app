const express = require ('express');
const app =express();
const http = require ('http');
const cors = require("cors");
const { Server } = require('socket.io');

const server = http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        method:["GET","POST"]
    }
})

io.on("connection",(socket)=>{
    console.log(socket.id)

    socket.on("disconnect",()=>{
        console.log("User Disconnected",socket.id)
    })
})


app.use(cors())


server.listen(3001,()=>{
    console.log("SERVER RUNNING")
})