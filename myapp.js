const express = require('express');
const app = express();
const StringDecoder = require('string_decoder').StringDecoder;

let counties = [
    { county: "Lofa", capital: "voinjama" },
    { county: "Grand Bassa", capital: "Buchana" },
    { county: "Bong", capital: "Gbarnga" },
    { county: "Bomi", capital: "Tubmanberg" },
    { county: "Sinoe", capital: "Greenville" },
    { county: "Nimba", capital: "Sanniquellie" },
    { county: "Grand Gedeh", capital: "Zwerdu" },
    { county: "Grand Kru", capital: "Barclayville" },
    { county: "Sinoe", capital: "Greenville" },
    { county: "Nimba", capital: "Sanniquellie" },
    { county: "Grand Gedeh", capital: "Zwerdu" },
    { county: "Grand Cape Mount", capital: "Robertsport" }
]
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.get('/counties', (req, res) => {
    res.send(counties);
});

app.get('/counties/:capital', (req, res) => {
    res.send(counties);
});
app.get('/api/counties/:county', (req, res) => {
    const county = counties.find(c => c.county === parseInt(req.params.county));
    if (!county) return res.status(404).send('Capital not found');
    res.send(county);
});

app.listen(3000, console.log("Listening on port 3000..."))