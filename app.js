var express = require('express')

var app = express()

app.get('/', function (req, res) {
	res.send('hello, docker112456 7890')
})

app.listen(8080, function () {
	console.log('express app is listening on port 8080!')
})