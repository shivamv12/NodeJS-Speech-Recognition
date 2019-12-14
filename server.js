/** Core Packages */

/** NPM Packages */
const express = require('express');

/** Initialize Express */
const app = express();

/** Static Middleware : Serves static files (CSS, JS, Html, Images ...) */
app.use(express.static(__dirname + '/public'));

const PORT = 5000;

/** Creating a Server */
const server = app.listen(PORT, () => {
    console.log("Server running at " + `http://localhost:${PORT}/`);
});

/** Route to Player Page */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/player.htm');
});