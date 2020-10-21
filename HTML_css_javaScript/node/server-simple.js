var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res){
    //dirname表示当前目录， file表示读文件
    try{
        var fileContent = fs.readFileSync(__dirname +'/static' + req.url,'binary')
        res.write(fileContent, 'binary')
    }catch(e){
        res.writeHead(404, 'not found')
    }
    res.end()
})

server.listen(8000)
