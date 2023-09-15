const http = require("http");

const server = http.createServer((request, response) => {

	// 需要通过响应头告诉计算机相应的 html , 浏览器才能正确的处理
	response.writeHead(200, {
		'Content-Type': 'text/html',
	})
	// 响应一个 html 代码
	response.write('<input type="button" value="点击">');
	response.end();
});

server.listen(3000, () => {
	console.log("^_^ 服务已开启");
})
