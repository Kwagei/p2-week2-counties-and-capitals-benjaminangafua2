const express = require('express');
const fs = require('fs');
const app = express();
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());
app.use(express.static("public "))
let path = require('path')

let counties = {
    "Lofa": "voinjama",
    "Grand Bassa": "Buchana",
    "Bong": "Gbarnga",
    "Bomi": "Tubmanburg",
    "Grand Kru": "Barclayville",
    "Gbapolu": "Bopolu",
    "Grand Gedeh": "Zwerdu",
    "Margibi": "Kakata",
    "Montserrado": "Bensonville",
    "Maryland": "Harper",
    "Sinoe": "Buchana",
    "River Cess": "Cestos City",
    "River Gee": "Fish Town",
    "Nimba": "Sanniquellie"
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/home.html"));
});
app.post('submit', function(req, res) {
    console.log(req.body)
})
app.get('/counties', (req, res) => {
    res.send(counties);
    // fs.readFile("/county-capital.json", "utf8", (err, data) => {
    //     let
    // })
    // res.sendFile(path.join(__dirname + "/index.html"));

});

app.get('/counties/:countyCapital', (req, res) => {
    const Capital = req.params.countyCapital;
    res.send(counties[Capital]);
    console.log(req.body)
});
app.get('/counties/create/:newcounty', (req, res) => {
    const county = req.params.newcounty;
    // counties.push(county);
    res.send({ county });
    console.log("See new county", { county })
})

const port = process.env.PORT || 3900;
app.listen(port, () => console.log(`Listening on port ${port}`));