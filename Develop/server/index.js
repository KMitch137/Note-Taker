const express = require("express");
const app = express();
const notesRoutes = require("./notesRoutes")
const bodyParser = require('body-parser');
const path = require('path')
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public/assets/js")));

app.get("/", notesRoutes);

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});