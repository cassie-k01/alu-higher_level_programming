#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (err, res, body) => {
  if (err) {
    console.error('Error:', err);
    return;
  }


  const tasks = JSON.parse(body);
  const completedTasks = {};

  tasks.forEach(task => {
    if (task.completed) {
      if (!completedTasks[task.userId]) {
        completedTasks[task.userId] = 0;
      }
      completedTasks[task.userId]++;
    }
  });

  for (const userId in completedTasks) {
    console.log(`User ID ${userId}: ${completedTasks[userId]} completed tasks`);
  }
});
