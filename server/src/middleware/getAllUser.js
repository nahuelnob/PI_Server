const getAllUs = require("../controllers/getAllUs");

const getAllUser = async (req, res) => {
  try {
    const user = await getAllUs();
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllUser;