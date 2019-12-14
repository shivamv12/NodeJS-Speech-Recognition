/** Core Packages */
const fs = require("fs");

/** NPM Packages */
const https = require('https');
const express = require('express');

/** Initialize Express */
const app = express();

/** Static Middleware : Serves static files (CSS, JS, Html, Images ...) */
app.use(express.static(__dirname + '/public'));

/** Load Certificate & Private Key */
const privateKey = fs.readFileSync('privatekey.pem').toString();
const certificate = fs.readFileSync('certificate.pem').toString();

/** Creating a Server */
const httpOptions = { key: privateKey, cert: certificate };
https.createServer(httpOptions, app).listen(process.env.PORT, () => {
    console.log("Server on " + process.env.PORT);
});

/** Route to Home Page */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/player.html');
});