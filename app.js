var express = require('express')

var app = express()

app.get('/', function (req, res) {
	res.send('hello, world112')
})

app.listen(8080, function () {
	console.log('express app is listening on port 8080!')
})