var fs=require('fs');
var http=require('http');

var server=http.createServer((req,res)=>{

var file=fs.createReadStream('reading.txt','utf8');
file.on('data',function(chunk){
    console.log(chunk);
});
});
server.listen(3000);
console.log("It's working!!!");
