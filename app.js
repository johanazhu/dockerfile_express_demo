var express = require('express')

var app = express()

app.get('/', function (req, res) {
	res.send('hello, docker_push自动化111112456 7890再见再见，防止跨站点请求伪造')
})

app.listen(8080, function () {
	console.log('express app is listening on port 8080!')
})