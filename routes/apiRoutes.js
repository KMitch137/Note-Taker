const router = require("express").Router();
const path = require('path');
const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);

router.get("/api/notes", (req, res)=> {
	console.log("testing")
	readFromFile('../db/db.json').then (
		(data) => {
				let parsedData = JSON.parse(data)
				console.log(parsedData)
				return res.json(parsedData)
		}
)
});

router.get("*", (req, res) => {

});


module.exports = router;