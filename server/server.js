const express = require('express');
const fetch = require("node-fetch");
const app = express();
let cors = require('cors');
let siteId = '107403796';

app.use(cors());

const API_PORT = 3001;

app.get('/', function(req, res) {
  const number = req.query.number || 25;
  const offset = req.query.offset || 0;
  fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/posts/?number=${number}&offset=${offset}`)
  .then(result => result.json())
  .then(data => res.json(data))
  .catch(error =>res.send(error));
});

app.get('/categories', function(req, res) {
  fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/categories`)
  .then(result => result.json())
  .then(data => res.json(data))
  .catch(error =>res.send(error));
});

app.get('/tags', function(req, res) {
  fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/tags`)
  .then(result => result.json())
  .then(data => res.json(data))
  .catch(error =>res.send(error));
});

app.get('/post', function(req, res) {
  const postId = req.query.postId;
  console.log(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/posts/${postId}`, "url")
  fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/posts/${postId}`)
  .then(result => result.json())
  .then(data => res.json(data))
  .catch(error =>res.send(error));
});

app.post('/related', function(req, res) {
  const postId = req.query.postId;
  fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/posts/${postId}/related`,{
    method: 'POST',
    ignore_errors: true,
    content: {size : 5},
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(result => result.json())
  .then(data => res.json(data))
  .catch(error =>res.send(error));
});



app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));