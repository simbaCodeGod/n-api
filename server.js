const http = require('http')

const port = process.env.PORT|| 1337

const respondText = (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.end('hi')
}

server.listen(port);
console.log(`Server listening on port ${port}`)