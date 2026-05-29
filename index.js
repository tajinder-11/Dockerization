const express = require('express');

const PORT = process.env.PORT ?? 3000;

const app = express();

app.get('/', (req, res) => {
  return res.json({
    status: 'success',
    message: 'Hello from express server',
  });
});

app.listen(PORT, () => {
  console.log('The app is running on port', PORT);
});

/*
Things required to run this application
    Node: v20.11.1
    npm installed: 9.4.0
*/
