// server.js
const express = require('express');

// Define Express App
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

// Getting the full path
const path = require('path');

// Serve the static assets
app.use(express.static('public'));
// app.use(express.static('public/css'));
// app.use(express.static('public/images'));
// app.use(express.static('public/javascript'));

// Adding the first route / as a GET http verb
app.get('/', (req, res, next) =>
{
    // Sending the "index.html" file
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.send("Currently unavailable");
});

// POST
app.post('/', (req, res, next) =>
  {
      //
      res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })


// Adding the second route /about
app.get('/about', (req, res, next) =>
{
    // Sending the "about.html" file
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
})

// Adding the register route  /register
app.get('/register', (req, res, next) =>
{
    // Sending the "register.html" file
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
})

// Adding the todo route
app.get('/todo', (req, res) =>
{
    // Sending the webpage for the todo application
    res.sendFile(path.join(__dirname, 'public', 'todolist.html'));
    
})

// listening for connections
app.listen(PORT, 'localhost', () =>
{
    // DEBUG TESTING
    console.log("Server running on 'localhost:3000'");
    console.log(`Sever connected at: ${PORT}`);

});
