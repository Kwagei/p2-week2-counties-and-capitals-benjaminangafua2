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
    res.send('HELLO WORLD');
});

app.get('/counties', (req, res) => {
    res.send(counties);
    // fs.readFile("/county-capital.json", "utf8", (err, data) => {

    //     let json_data = JSON.parse(data)
    //     res.end(JSON.stringify(json_data))
    //     if (err) {
    //         console.error(err.message)
    //     }
    // })
    // res.sendFile(path.join(__dirname + "/counties.html"));

});

app.get('/counties/capital/:Capital', (req, res) => {
    const capital = req.params.Capital;
    res.send(`Capital: ${counties[capital]}`);

    // res.sendFile(path.join(__dirname + "/capital.html"));

});
app.get('/create/county/:county.:capital', (req, res) => {
    res.send(JSON.stringify(req.params));
    console.log("The newly created county is", req.params)

    // res.sendFile(path.join(__dirname + "/create-county.html"));

    //     // counties.push(county);
    // res.send({ county: capital });
    // console.log("See new county", { county: capital })
})

const port = process.env.PORT || 3550;
app.listen(port, () => console.log(`Listening on port ${port}`));