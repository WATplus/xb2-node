const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// 解决request.body 为空的问题 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.listen(port, () => {
	console.log("^_^ 服务已启动");
})

// 定义一个通过 HTTP 的 get方式访问时的接口
app.get("/", (request, response) => {
	response.send("你好");
})

const data = [
	{
		id: 1,
		title: "观月山",
		content: '云月出天山,苍茫云海间',
	},
	{
		id: 2,
		title: "望岳",
		content: '会当凌绝顶,一览众山小',
	},
	{
		id: 2,
		title: "忆江南",
		content: '日出江花红胜火,春来江水绿如蓝',
	},
]

// app.get("/posts", (request, response) => {
// 	response.send(data)
// })

// 带参数的接口
app.get("/posts/:postsId", (request, response) => {
	// 获取参数
	const { postsId } = request.params;

	// 过滤出 id 对应的项
	const posts = data.filter(item => item.id == postsId);

	// 响应
	response.send(posts);
})

/* 
创建内容
*/
app.post("/posts", (request, response) => {
	// 结构请求头内的content
	const { content } = request.body;
	// 获取请求头中的测试信息
	const header = request.headers["test-header"]
	// 设置相应状态码
	response.status(201);
	// 设置相应头
	response.set("test-response-header", "response header test value")
	// 响应回去
	response.send({
		"message": `请求成功: ${content}`,
		"header": {
			"test-header": header,
		}
	})
})