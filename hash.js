require("dotenv").config();
const bcrypt = require("bcrypt");

const makeSalt = async (saltRounds, password) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        console.log(error);
    }
};
module.exports = makeSalt;