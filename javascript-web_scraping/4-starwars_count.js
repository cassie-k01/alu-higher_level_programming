#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];
const wedgeId = 18;
request.get(apiUrl, (err, res, body) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Response Body:', body);
  const data = JSON.parse(body);
  let movieCount = 0;
  if (Array.isArray(data.results)) {
    data.results.forEach(movie => {   
      console.log('Movie Characters:', movie.characters);
      if (movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeId}/`)) {
        movieCount++;
      }
    });
  } else {
    console.error('Error: data.results is not an array.');
  }
  console.log(movieCount);
});
