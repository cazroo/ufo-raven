const router = require("express").Router();
const Report = require("../models/report");
const Location = require("../models/location");

// get all reports  (checked & worked)
router.get("/", async (req, res) => {
    const allReports = await Report.findAll({
        // attributes: ["id", "date", "description", "locationId"]
        include: Location
    });
   
    res.status(200).json({msg: "All reports found", data: allReports});
})

// get single report (checked & worked)
router.get("/:id", async (req, res) => {
    const report = await Report.findOne({where: {id: req.params.id}});
    res.status(200).json({msg: `Report found`, data: report});
})

// // delete all reports (checked & worked)
// router.delete("/", async (req, res) => {
//     const deletedReport = await Report.destroy({where:{}});
//     res.status(200).json({msg:`deleted ${deletedReport}`});
// })

//delete single report (checked & worked)
router.delete("/:id", async(req, res) => {
    const report = await Report.findOne({where: {id: req.params.id}});
    const deletedReport = await Report.destroy({where:{id: req.params.id}});
    res.status(200).json({msg: "Deleted report", data: deletedReport});
});

//update single report (checked & worked)
router.put("/:id", async(req, res) => {
    const updatedReport = await Report.update(req.body, {where: {id: req.params.id}} );
    const report = await Report.findOne({where: {id: req.params.id}});
    res.status(202).json({msg:`${report} updated successfully`});
})

// create individual report (checked & worked)
router.post("/", async (req, res) => {
    const report = await Report.create(req.body);
    res.status(201).json({msg:`report created`, report});
})

module.exports = router;

