var express = require('express')
var app = express()
app.set('view engine' , 'pug')


app.get('/' , function (req, res) {
	
  res.render(
  		'index' , 
  		{ message: 'Hello World'}
  )
 
})

app.listen(8080 , function() {
	console.log("Everything is OK")
});
