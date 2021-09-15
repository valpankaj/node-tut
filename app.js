const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('This is our home page');
    }else if(req.url === '/about'){
        res.end('This is our history');
    }else{
        res.end(`
        <h1>Opps</h1>
        <p>Wrong page</p>
        `)
    }
})

server.listen(5000)