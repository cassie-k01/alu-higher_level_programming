#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error fetching movie:', error);
    return;
  }
  const movie = JSON.parse(body);
  const characters = movie.characters;
  const fetchCharacterNames = (urls) => {
    let completedRequests = 0;
    const characterNames = [];
    urls.forEach((url) => {
      request(url, (error, response, body) => {
        if (error) {
          console.error('Error fetching character:', error);
        } else {
          const character = JSON.parse(body);
          characterNames.push(character.name);
        }
        completedRequests++;
        if (completedRequests === urls.length) {
          console.log(characterNames.join('\n'));
        }
      });
    });
  };
  fetchCharacterNames(characters);
});
