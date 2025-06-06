#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];
request.get(url, (err, res, body) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  fs.writeFile(filePath, body, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing to file:', writeErr);
    }
  });
});
