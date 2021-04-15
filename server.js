// Dependencies

const express = require('express');
const path = require('path');
const mongojs = require("mongojs");

// Sets up the Express App

const app = express();
const PORT = 3000;

const databaseUrl = "exercise";
const collections = ["stats"];

const db = mongojs(databaseUrl, collections);
db.on("error", error => {
  console.log("Database Error:", error);
});
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, 'public/exercise.html')));

app.get('/stats', (req, res) => res.sendFile(path.join(__dirname, 'public/stats.html')));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
