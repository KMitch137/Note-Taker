const express = require("express");
var fs = require('fs');
const router = express.Router();
const notesController = require("./notesController")
const cors = require("cors")
router.get("/", cors(), notesController.showHomePage);


router.get("/notes.html", cors(), notesController.showNotesPage);

router.get("/api/notes", (req, res) => {
//    notesController.getAllNotes().then((data) => {
//     console.log(data)
//     res.json(JSON.parse(data))
//    }
//    )
   fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data)
    return res.json(data);
})
});

router.post("/api/notes", cors(), notesController.saveNote)

module.exports = router;