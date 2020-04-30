// Including the Express package for our script.
const express = require("express");

// Run the Express server.
const app = express();

// Load HTTP and attach our Express server to it.
const http = require("http").Server(app);

// The port we are going to listen on.
const port = 3000;

// Tells HTTP what port to listen to.
http.listen(port);

// Express Routes
// express.static("./public_html") -> used to tell Express that it is a directory/folder.
app.use("/", express.static("./public_html"));

app.post("/submitAge", (request, response) => {
    console.log(request.body);
});

// Signify Express Server is running.
console.log(`Express is now running on port ${port}`);