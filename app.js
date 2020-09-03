// Requiring modules
const express = require('express');

// Creating an instance of express
const app = express();

// Adding Routes:
app.get('/posts', (req, res) => {
    res.send('This is the posts page')
})

app.get('/', (req, res) => {
    res.send('This is the home')
})



// Have the app listen for any incoming requests on a port
// Create a callback to run when server starts up
app.listen(7007, () => {
    console.log('Listening on port 7007')}
);