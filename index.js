const express = require('express');

const PORT = process.env.PORT ?? 8000;

const app = express();

app.get('/', (req, res) => {
  return res.json({
    status: 'success',
    message: 'Hello from express server',
  });
});

app.get('/health', (req, res) => {
  res.json({ message: 'I am healthy' });
});

app.listen(PORT, () => {
  console.log('The app is running on port', PORT);
});
