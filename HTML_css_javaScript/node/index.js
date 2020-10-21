var http = require('http')

var server = http.createServer(function(req, res){
    res.setHeader("Content-Type","text/plain; charset=gbk")
    res.write('hello world')
    res.end()

})
server.listen(9000)