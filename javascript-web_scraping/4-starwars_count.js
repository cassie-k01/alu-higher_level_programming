#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];
const wedgeId = 18;
request.get(apiUrl, (err, res, body) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  const data = JSON.parse(body);
  let movieCount = 0;
  data.results.forEach(movie => {
    if (movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeId}/`)) {
      movieCount++;
    }
  });
  console.log(movieCount);
});
