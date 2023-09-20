import express from "express";
import {Request , Response} from "express"
import bodyParser from "body-parser"

const app = express();
app.use(bodyParser.json())
app.use( bodyParser.urlencoded( {extends:true} ))
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
];

app.listen(3000 , () => {
    console.log("^_^ 服务已开启~");
})

app.get("/" , (request:Request , response:Response) => {
    response.send("你好")
})
app.get("/posts/:postsId" , (request:Request , response:Response) => {
    const {postsId} = request.params;

    const posts = data.filter(item => item.id == parseInt(postsId , 10))

    response.send(posts)
})
app.post("/posts" , (request:Request , response:Response) => {
    const {content} = request.body;
    const header = request.headers["test-header"];
    response.status(201);
    response.set("test-response-header" , "response header test value");
    response.send({
        "message" : `请求成功: ${content}`,
        "header" : {
            "test-header" : header
        }
    })
})
