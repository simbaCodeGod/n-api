const http = require('http')

const port = process.env.PORT|| 1337

const respondText = (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.end('hi')
}

const respondJson = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({text: 'hi', nummbers: [1, 2, 3] }))
}

const respondNotFound = (req, res) => {
    res.writeHead(404, {'Content-Type' : 'text/plain'})
    res.end('Not Found')
}

const server = http.createServer((req, res) =>{
    if(req.url === '/') return respondText(req, res)
    if(req.url === '/json') return respondJson(req, res)

    respondNotFound(req, res)
})

server.listen(port);
console.log(`Server listening on port ${port}`)