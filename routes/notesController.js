
var fs = require('fs');
const dataPath = require('../db/db.json');
const shortid = require('shortid');
const path = require('path');

let readFilePromise ;

const writeFile = () => {
    fs.writeFile(dataPath, 'utf8', (err) => {
        if (err) {
            throw err;
        }
    });
};
module.exports = {
showHomePage: function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
},

showNotesPage: function (req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
},

getAllNotes: function (req, res) {
    // read db.JSON and return all notes in array
    readFile((data) => {
        console.log(data)
        res.send(data);
    }, true);
},

saveNote: function (req, res) {
    // adding a new note to the db
    readFile((data) => {

        newNoteId = shortid.generate();
        data[newNoteId] = req.body;

        writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send('new note added');
        });
    }, true);
}
}