const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001
const port = process.env.PORT || 3001
// const notesRoutes = require('./routes/notesRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
// const bodyParser = require('body-parser');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, "public/assets/index.html")));
app.use(express.static('public'));


app.use('/', htmlRoutes);
app.use('/', apiRoutes)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}...`);
});
