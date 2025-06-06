#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;
request(apiUrl, function (error, response, body) {
  if (error) return console.error('Error fetching data:', error);
  const characters = JSON.parse(body).characters;
  const characterNames = [];
  let completedRequests = 0;
  if (characters.length === 0) return console.log('Characters not found');
  characters.forEach((characterUrl, index) => {
    request(characterUrl, function (error, response, body) {
      if (error) return console.error('Error fetching character data:', error);
      characterNames[index] = JSON.parse(body).name;
      completedRequests++;
      if (completedRequests === characters.length) {
        characterNames.forEach(name => console.log(name));
      }
    });
  });
});
