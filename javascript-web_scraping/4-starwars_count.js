#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];
const wedgeAntillesId = '18';
request(apiUrl, function (error, response, body) {
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  const films = JSON.parse(body).films || JSON.parse(body).results; // Handling possible response structures
  let count = 0;
  films.forEach(film => {
    if (film.characters.some(url => url.includes(`/people/${wedgeAntillesId}`))) {
      count++;
    }
  });
  console.log(count);
});
