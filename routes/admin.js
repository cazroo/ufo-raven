const router = require("express").Router();
const Report = require("../models/report");

router.post("/", async (req, res) => {
    if (Array.isArray(req.body)){
        for (let report of req.body){
            await Report.create(report);
        }
        res.status(201).json({message: "Ok"})
    } else {
        await Report.create(req.body);
        res.status(201).json({message: "Ok"})
    }
})


module.exports = router;
