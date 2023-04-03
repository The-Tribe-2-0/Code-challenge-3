const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())

let rawdata = fs.readFileSync('index.json');
    let movies = JSON.parse(rawdata);


app.get('/', (req, res) => {
    console.log(movies);
    res.send('Movies');
  });

  app.get('/films', (req, res) => {
    console.log(movies);
    res.json(movies);
  });

  app.get('/films/:id', (req, res) => {
    console.log(movies);
    let movie = movies.films.filter(obj => obj.id === req.params.id);
    res.send(movie[0]);
  });

  



  app.listen(3000, () => {
    console.log('Server listening on port 3000!');
  });



  
