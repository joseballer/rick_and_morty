require("dotenv").config();
const axios = require("axios");
const { URL } = process.env;

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, name, species, origin, image, gender, error } =
      await axios.get(`${URL}${id}`).data;
    const character = { id, status, name, species, origin, image, gender };
    return name
      ? res.status(200).json(character)
      : res.status(404).json({ error: "Character not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = getCharById;
