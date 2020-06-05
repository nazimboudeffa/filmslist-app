const fs = require('fs')
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const imdb = require('imdb-es5')

// set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/public'))

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/film/:imdbid', function (req, res) {
  imdb(req.params.imdbid, function(err, data) {
    if(err)
      console.log(err.stack);

    if(data)
      console.log(data);
      res.render('film', { film : data })
  });
})

let port = 3000;

app.listen(port, function () {
  console.log('Film app listening on port 3000!')
})
