const router = require("express").Router();
const Report = require("../models/report");

// get all reports 
router.get("/", async (req, res) => {
    const allReports = await Report.findAll({
        attributes: ["id", "title", "time", "location", "description"]
    });
    res.status(200).json({msg: "All reports found", data: allReports});
})

// get single report
router.get("/:id", async (req, res) => {
    const report = await Report.findOne({where: {id: req.params.id}});
    res.status(200).json({msg: `${report} found`});
})

// delete all reports
router.delete("/", async (req, res) => {
    const deletedReport = await Report.destroy({where:{}});
    res.status(200).json({msg:`deleted ${deletedReport}`});
})

//delete single report
router.delete("/:id", async(req, res) => {
    const report = await Report.findOne({where: {id: req.params.id}});
    const deletedReport = await report.destroy();
    console.log(deletedReport)
    res.status(200).json({msg: deletedReport});
});

//update single report
router.put("/:id", async(req, res) => {
    const updatedReport = await Report.update(req.body, {where: {id: req.params.id}} );
    const report = await Report.findOne({where: {id: req.params.id}});
    res.status(202).json({msg:`${report} updated successfully`});
})

// create individual report
router.post("/", async (req, res) => {
    const report = await Report.create(req.body);
    res.status(200).json({msg:`${report} created`});
})


