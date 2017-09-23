var express = require('express')

var app = express();

app.set('views', './views')
app.set('view engine', 'pug')


app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/data', function (req, res) {
  res.status(200).json({foo:'bar'})
})

app.post('/data', function (req, res) {
    req.body.user.id
  res.status(200).json({foo:'bar'})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
