const express = require('express');
const path = require('path');
const app = express();

const notesRoutes = require('./notesRoutes');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, "public/assets/index.js")));
app.use(express.static('../public'));
app.use('/', notesRoutes);

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000...");
});
