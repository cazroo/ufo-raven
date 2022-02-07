const router = require("express").Router();
const Report = require("../models/report");

//get all locations (checked & worked)
router.get("/", async (req, res) => {
  try {
    const allLocations = await Report.findAll({
      attributes: ["id", "location"],
    });
    res.status(200).json({ msg: "All locations listed", data: allLocations });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: `Unsuccessful, please try again` });
  }
});

//get single location (checked & worked)
router.get("/:id", async (req, res) => {
  try {
    const location = await Report.findOne(
      { where: { id: req.params.id } }
    );
    res.status(200).json({ msg: `Single report for `, data: location.location });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: `Unsuccessful, please try again` });
  }
});

module.exports = router;
