#!/usr/bin/node
const request = require('request-promise-native'); 

const movieId = process.argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

async function fetchCharacters() {
  try {
    
    const movie = await request(apiUrl);
    const characters = JSON.parse(movie).characters;
    for (const characterUrl of characters) {
      const character = await request(characterUrl);
      console.log(JSON.parse(character).name);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

