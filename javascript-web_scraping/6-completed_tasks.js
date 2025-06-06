#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];
request.get(apiUrl, (err, res, body) => {
  if (err || res.statusCode !== 200) {
    console.error('Error:', err || `Received status code ${res.statusCode}`);
    return;
  }
  let tasks;
  try {
    tasks = JSON.parse(body);
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
    return;
  }
  const completedTasks = tasks.reduce((acc, task) => {
    if (task.completed) {
      acc[task.userId] = (acc[task.userId] || 0) + 1;
    }
    return acc;
  }, {});
  console.log(JSON.stringify(completedTasks));
});
