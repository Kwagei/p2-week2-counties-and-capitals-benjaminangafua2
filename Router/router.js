import express from 'express';
import path from 'path';
import bodyParser from 'body-parser'

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public "))
app.use(bodyParser.json())

import { getACounty, getAllCounties, getAllCapitals, createCounty, postCreatedCounty, createNewCounty } from "../controllers/controllers.js"

const router = express.Router()

// get a county
router.get("/county/:name", getACounty)

// get all capital
router.get("/capital", getAllCapitals)
    // get all counties
router.get("/counties", getAllCounties)
    // Create new county
router.get("/create-county", createNewCounty)
router.get("/create/counties/:name/:capital", createCounty)

router.post("/create-county", postCreatedCounty)
export default router;