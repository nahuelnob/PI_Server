const getAllCount = require("../controllers/getAllCount");
const getByName = require("../controllers/getByName");

const getAllCountries = async (req, res) => {
  const { name } = req.query;
  
  try {
    const countries = await getAllCount();
    if(!name) return res.status(200).json(countries)

    const country = await getByName(name);

    country ? res.status(200).json(country) : res.status(500).json(`${name} no esta en la base de datos`)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllCountries;
