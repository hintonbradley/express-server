// Requiring modules
const express = require('express');

// Creating an instance of express
const app = express();

// Have the app listen for any incoming requests on a port
// Create a callback to run when server starts up
app.listen(7007, () => {
    console.log('Listening on port 7007')}
);