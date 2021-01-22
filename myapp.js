const express = require('express');
const app = express();
app.use(express.json());
const StringDecoder = require('string_decoder').StringDecoder;

let counties = {
    Lofa: "voinjama",
    GrandBassa: "Buchana",
    Bong: "Gbarnga",
    Bomi: "Tubmanburg",
    GrandKru: "Barclayville",
    Gbapolu: "Bopolu",
    GrandGedeh: "Tubmanburg",
    GrandCapeMount: "Robertsport",
    Maryland: "Harper",
    Montserrado: "Bensonville",
    RiverCess: "Cestos City",
    RiverGee: "Fish Town",
    Margibi: "Kakata",
    Nimba: "Sanniquellie",
    Sinoe: "Buchana"
}

app.get('/', (req, res) => {
    res.send("Hello World");
});
app.get('/counties', (req, res) => {
    res.send(counties);
});
app.get('/counties/:capital', (req, res) => {
    let capital = Object.values(counties);
    app.send(capital);
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))