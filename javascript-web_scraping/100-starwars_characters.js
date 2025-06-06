#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;
request(apiUrl, function (error, response, body) {
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  const characters = JSON.parse(body).characters;
  characters.forEach(characterUrl => {
    request(characterUrl, function (error, response, body) {
      if (error) {
        console.error('Error fetching character data:', error);
      } else {
        console.log(JSON.parse(body).name);
      }
    });
  });
});
