import express from 'express';
import path from 'path'
import fs from 'fs';

import RouterIn from './Router/router.js'
import bodyParser from 'body-parser'

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public "))
app.use(bodyParser.json())


let counties = [
    { "name": "Lofa", "capital": "voinjama" },
    { "name": "Grand Bassa", "capital": "Buchana" },
    { "name": "Bong", "capital": "Gbarnga" },
    { "name": "Bomi", "capital": "Tubmanburg" },
    { "name": "Grand Kru", "capital": "Barclayville" },
    { "name": "Gbapolu", "capital": "Bopolu" },
    { "name": "Grand Gedeh", "capital": "Zwerdu" },
    { "name": "Margibi", "capital": "Kakata" },
    { "name": "Montserrado", "capital": "Bensonville" },
    { "name": "Maryland", "capital": "Harper" },
    { "name": "Sinoe", "capital": "Buchana" },
    { "name": "River Cess", "capital": "Cestos City" },
    { "name": "River Gee", "capital": "Fishtown" },
    { "name": "Nimba", "capital": "Sanniquellie" },
]

app.get('/', (req, res) => {
    res.send('HELLO WORLD');
});

// app.get('/counties', (req, res) => {

//     fs.readFile("./county-capital.json", "utf8", (err, data) => {
//         if (err) {
//             console.error({ err: message })
//             return
//         }
//         let json_data = JSON.parse(data)
//         res.end(JSON.stringify(json_data))

//     })
//     res.sendFile(path.join(__dirname + "/counties.html"));

// });
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

app.use("/", RouterIn)
const port = process.env.PORT || 3550;
app.listen(port, () => console.log(`Listening on port ${port}`));