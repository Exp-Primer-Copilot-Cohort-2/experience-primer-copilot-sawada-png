// Create web server
// Define routes
// Define middleware
// Start server

// 1. Create web server
const express = require('express');
const app = express();

// 2. Define routes
app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/comments', (req, res) => {
  res.send('Comments page');
});

// 3. Define middleware
app.use((req, res, next) => {
  console.log('Middleware');
  next();
});

// 4. Start server
app.listen(3000, () => {
  console.log('Server started');
});