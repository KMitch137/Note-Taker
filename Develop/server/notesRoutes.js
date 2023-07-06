const express = require("express");
var fs = require('fs');
const router = express.Router();
const util = require("util")
const dataPath = '../db/db.json';
const notesController = require("./notesController")
const cors = require("cors")
router.get("/", cors(), notesController.showHomePage);

const readFromFIle = util.promisify(fs.readFile)

router.get("/notes.html", cors(), notesController.showNotesPage);

router.get("/api/notes", (req, res) => {
    readFromFIle(dataPath).then
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
        console.log(data)
    })
});

router.post("/api/notes", cors(), notesController.saveNote)

module.exports = router;