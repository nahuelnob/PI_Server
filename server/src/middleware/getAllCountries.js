const getAllCount = require("../controllers/getAllCount");
const getByName = require("../controllers/getByName");

const getAllCountries = async (req, res) => {
  const { name } = req.query;
  
  try {
    const countries = await getAllCount();
    if(!name) return res.status(200).json(countries)

    const otroName = name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase();
    const country = await getByName(otroName);

    country ? res.status(200).json(country) : res.status(200).json(countries)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllCountries;
