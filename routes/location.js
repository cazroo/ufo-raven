const router = require("express").Router();
const Location = require("../models/location");
const Report = require("../models/report");

//get all locations
router.get("/", async(req, res) => {
    try {
    const allLocations = await Location.findAll({
        where: {location},
        attributes: ["id", "location"]
    });
    res.status(200).json({msg: "All locations listed", data: allLocations});
    } catch(error) {
        console.log(error)
        res.status(500).json({msg: `Unsuccessful, please try again`})
    }
});

//get single location
router.get("/:id", async (req, res) => {
    try {
        const location = await Location.findOne({where: {id: req.params.id}});
        res.status(200).json({msg: `listed`, location});
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: `Unsuccessful, please try again`})
    }
});

//create a location
router.post("/", async(req, res) => {
    try {
        const location = await Report.create(req.body);
        res.status(200).json({msg: `${location} created`});
        const location = await Location.create(req.body);
        res.status(201).json({msg: `location created`, location});
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: `Unsuccessful, please try again`})
    }});

module.exports = router;