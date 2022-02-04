const router = require("express").Router();
const Date = require ("../models/date");

router.get("/", async (req, res) => {
    try {
        const allDates = await Date.find({});
        const msg = allDates.length === 0 ? "No dates found" : `${allDates.length} dates found`
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Ooops, something's gone wrong - please try again"})
    }
});

router.get("/:start", (req,res) => {
    const date = await Date.findOne({where: {id: req.params.id}});
    res.status(200).json({msg: `${date} found`});
});

// router.get("/:start/:end", (req, res) => {
//     const dateRange = await Date.find
// })