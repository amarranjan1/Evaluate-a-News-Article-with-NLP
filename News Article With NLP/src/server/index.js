// Require necessary packages and modules
const dotenv = require("dotenv");
const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express app
const app = express();

// Set up middlewares
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()).use(express.urlencoded({ extended: true }));
app.use(cors()).use(express.static("dist"));


// Configuration for API Key and MeaningCloud URL
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.API_KEY;
const message = `Your API Key is: ${apiKey}`;
console.log(message);




// API endpoint for handling form data and getting sentiment analysis
async function handleAPIRequest(req, res) {
  const userInput = req.body.url;
  console.log(`User Input: ${userInput}`);
  const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`;
  const response = await fetch(apiURL);
  const newsData = await response.json();
  //console.log(newsData);
  res.send(newsData);
}

app.post("/api", handleAPIRequest);


// Route to serve the main HTML file
function sendIndexFile(req, res) {
  res.sendFile(path.resolve("dist/index.html"));
}

app.get("/", sendIndexFile);


// Start the server and listen on the specified port
const port = 8081;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));

