//http module that can help you to create http servers

const http = require('http');

//1. we would like to setup a basic  http sever 

const PORT = 3000; // we defined a varible to store the value of the port 

const server = http.createServer(async (req, res) => {
    console.log("Request Recevied ")
   
     if(req.method=="GET"){
        res.end("GET request Received");
     }else if(req.method =="POST"){
        res.end("POST request Received");
     }else{
        res.end("Hello World");
        res.
     }
});

server.listen(PORT, () => {
    //this function will be called when the server is started 
    console.log(`Server is running on port ${PORT}`);
});