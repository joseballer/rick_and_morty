require("dotenv").config();
const axios = require("axios");
const { URL } = process.env;

const getCharById = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL}${id}`)
    .then(({ data }) => {
      const {
        id,
        status,
        name,
        species,
        origin = origin.name,
        image,
        gender,
        error,
      } = data;
      const character = {
        id,
        status,
        name,
        species,
        origin,
        image,
        gender,
      };
      return name
        ? res.json(character)
        : res.status(404).json({ message: error });
    })
    .catch((reason) => res.status(500).json({ message: reason }));
};
module.exports = getCharById;
