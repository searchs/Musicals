const fetch = require('fetch');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((resp) => resp.json())
  .then((res) => console.log(res));
