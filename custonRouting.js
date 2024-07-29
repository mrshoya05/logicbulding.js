const http = require("http")
PORT = 4000

const server = http.createServer((req, res)=>{
    if(req.url === "/home" && req.method === "GET"){
        res.end("Hello world from backend");
    }
    if(req.url === "/about" && req.method === "GET"){
        res.end("Hello world from about page !")
    }
})

server.listen( PORT, ()=>{
    `server is running on port number ${PORT}`
})