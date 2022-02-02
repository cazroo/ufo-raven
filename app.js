require("dotenv").config();
const express = require("express");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.json({message:"Hello World"});
});

app.listen(PORT, () => {
    console.log(`App running on prt ${PORT}`)
});