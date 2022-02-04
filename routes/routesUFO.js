const router = require("express").Router();
const connection = require("../connection");


// get UFO reports by year (checked & worked)
router.get("/:year", async (req, res) => {
    const year = `uforeports${req.params.year}`
    const results = await connection.query(`SELECT * FROM ${year}`) 
    res.status(200).json({data: [results]});
})


module.exports = router;