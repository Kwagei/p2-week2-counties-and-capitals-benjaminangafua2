// getAllCounty
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
    { "name": "Nimba", "capital": "Sanniquellie" }
]
import path from "path"
const __dirname = path.resolve();

// Get a county
export const getACounty = (req, res) => {
    const { name } = req.params
    const NAMEOFCOUNTIES = counties.filter((val, index) => val.name == name)
    res.send(NAMEOFCOUNTIES)
    console.log(counties)
}

// get county
export const getAllCapitals = (req, res) => {
    let name = []
    counties.forEach((val, ind) => name.push(val.capital))

    res.send(name)
}
export const getAllCounties = (req, res) => {
    res.sendFile(path.join(__dirname, "/counties.html"))
}

// create a county
export const createCounty = (req, res) => {
    counties.push(req.params)
    res.send(counties)
    console.log("The newly created county is", req.params)
    console.log(counties)
}

export const createNewCounty = (req, res) => res.sendFile(path.join(__dirname + "/create-county.html"));

export const postCreatedCounty = (req, res) => {
    res.send(req.body)
}