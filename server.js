const express = require('express');

const server = express();

const PORT = 3000;

const data = require('./Movie Data/data.json');

server.listen(PORT, () => {
    console.log(`Server port ${PORT}`);
  });
  
  
  server.get('/', (req, res) => {
    let home={
        "title": data.title,
        "poster_path": data.poster_path,
        "overview": data.overview
    }
    res.send(home);
  });
  
  server.get('/favorite', (req, res) => {
    res.send('Welcome to Favorite Page');
  });
  
  
  server.get('/error' ,(req, res) => {
    let err5={
        "status": 500,

        "responseText" : 'Sorry, something went wrong'
    }
    res.status(err5.status).send(err5);
  });
  
  
  server.get((req, res) => {
    let err4={
        "status": 404,

        "responseText" : 'page not found error'
    }
    res.status(err4.status).send(err4);
  });
  
  