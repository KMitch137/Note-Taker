
var fs = require('fs');
const dataPath = '../db/db.json';
const shortid = require('shortid');
const path = require('path');

// const readFile = (
//     callback,
//     returnJson = false,
//     filePath = dataPath,
//     encoding = 'utf8'
// ) => {
//     fs.readFile(filePath, encoding, (err, data) => {
//         if (err) {
//             throw err;
//         }

//         callback(returnJson ? JSON.parse(data) : data);
//     });
// };

let readFilePromise ;

const writeFile = () => {
    fs.writeFile(dataPath, 'utf8', (err) => {
        if (err) {
            throw err;
        }
    });
};

exports.showHomePage = function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
}

exports.showNotesPage = function (req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
}

exports.getAllNotes = function (req, res) {
    // read db.JSON and return all notes in array
    readFile((data) => {
        res.send(data);
    }, true);
}

exports.saveNote = function (req, res) {
    // adding a new note to the db
    readFile((data) => {

        newNoteId = shortid.generate();
        data[newNoteId] = req.body;

        writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send('new note added');
        });
    }, true);
}
