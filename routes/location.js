const router = require("express").Router();

const Report = require("../models/report");

//get all locations
router.get("/", async(req, res) => {
    try {
    const allLocations = await Report.findAll({
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
        const location = await Report.findOne({where: {id: req.params.id}});
        res.status(200).json({msg: `${location} listed`});
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
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: `Unsuccessful, please try again`})
    }
});

//update single location
router.put("/:id", async (req, res) => {
    try {
    const updatedLocation = await Report.update(req.body, {where: {id: req.params.id}});
    const location = await Report.findOne({where: {id: req.params.id}});
    res.status(202).json({msg:`${location} successfully updated`}); 
    } catch(error) {
        console.log(error)
        res.status(500).json({msg: `Update unsuccessful, please try again`})
    };
});

//delete all locations
router.delete("/", async(req, res) => {
    try {
        const deleteLocations = await Report.destroy({where:{}});
        res.status(200).json({msg: `${deleteLocations} successfully deleted`});
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: `Delete unsuccessful, please try again`})
    };    
});

//delete single location
router.delete("/:id", async(req, res) => {
    try {
        const location  = await Report.findOne({where: {id: req.params.id}});
        const deleteOneLocation = await Report.destroy({where: {id: req.params.id}});
        console.log(deleteOneLocation);
        res.status(200).json({msg: `${deleteOneLocation} successfully deleted`});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: `Delete unsuccessful, please try again`})
    };
});
