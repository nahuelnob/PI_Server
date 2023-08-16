const getById = require("../controllers/getById");

const getCountryid = async (req, res) => {
  const { id } = req.params;
  const idMay = id.toUpperCase()
try {
    coso = await getById(idMay)
    res.status(200).json(coso)
} catch (error) {
    res.status(500).json('nob')
    
}
};

module.exports = getCountryid;
