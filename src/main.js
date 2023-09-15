const http = require("http");

const server = http.createServer((request , response) => {
	response.write("你好");
	response.end();
});

server.listen(3000 , ()=>{
	console.log("^_^ 服务已开启");
})
