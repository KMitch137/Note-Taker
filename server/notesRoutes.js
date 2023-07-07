const express = require("express");
var fs = require('fs');
const router = express.Router();
const util = require("util")
const dataPath = '../db/db.json';
const notesController = require("./notesController")
router.get("/", notesController.showHomePage);

const readFromFIle = util.promisify(fs.readFile)

router.get("/notes.html", notesController.showNotesPage);

router.get("/api/notes", (req, res) => {
    readFromFIle(dataPath).then (
        (data) => {
            // let parsedData = [].concat(JSON.parse(data))
            let parsedData = JSON.parse(data)
            // console.log(parsedData)
            // console.log("DING")
            return res.json(parsedData)
        }
    )
    // fs.readFile(dataPath, 'utf8', (err, data) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(data)
    //     return res.json(data);

    // })
});

router.post("/api/notes", notesController.saveNote)

module.exports = router;