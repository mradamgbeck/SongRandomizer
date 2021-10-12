const express = require('express');
const {generateSong} = require('./src/lib/generate')
const app = express();
app.use(express.json());

app.post('/generate', function (req, res) {
    let song = generateSong(req.body);
    res.send(song);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('song randomizer listening on port ' + port);
});