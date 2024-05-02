const express = require('express')

const app = express()
const path = require("path");
const port  = 3000

app.use(express.static(path.join(__dirname, 'public/netflix-project')));
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/netflix', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/netflix-project', 'netflix.html'));
});

app.use(express.static(path.join(__dirname, 'public/dicegame-project')));

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/dicegame-project', 'main.html'))
})

app.listen(port, () => {
    console.log('Example app.');
})