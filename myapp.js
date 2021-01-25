const express = require('express');
const app = express();
app.use(express.json());

let counties = {
    Lofa: "voinjama",
    GrandBassa: "Buchana",
    Bong: "Gbarnga",
    Bomi: "Tubmanburg",
    GrandKru: "Barclayville",
    Gbapolu: "Bopolu",
    GrandGedeh: "Zwerdu",
    Margibi: "Kakata",
    Montserrado: "Bensonville",
    Maryland: "Harper",
    Sinoe: "Buchana",
    RiverCess: "Cestos City",
    RiverGee: "Fish Town",
    Nimba: "Sanniquellie"
};

app.get('/', (req, res) => {
    res.send("Hello World");
});
app.get('/counties', (req, res) => {
    res.send(counties);
});

app.get('/counties/:capital', (req, res) => {
    const province = req.params.capital;
    res.send(counties[province]);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));