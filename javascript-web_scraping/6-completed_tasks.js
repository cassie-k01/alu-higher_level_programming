#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];
request(apiUrl, function (error, response, body) {
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  const tasks = JSON.parse(body);
  const completedTasksCount = {};
  tasks.forEach(task => {
    if (task.completed) {
      if (!completedTasksCount[task.userId]) {
        completedTasksCount[task.userId] = 0;
      }
      completedTasksCount[task.userId]++;
    }
  });
  console.log(completedTasksCount);
});
