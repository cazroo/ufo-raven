const router = require("express").Router();
const connection = require("../connection");
const Report = require("../models/report");
const { Op } = require("sequelize");

// get UFO reports by year (checked & worked)
router.get("/:year", async (req, res) => {
  const results = await Report.findAll({
    where: {
      date: {
          [Op.gte]: new Date(req.params.year),
          [Op.lt]: new Date(req.params.year, 01,01)

      } 
    },
  });
  res.status(200).json({ data: results });
});

module.exports = router;
