const getUs = require("../controllers/getUs");

const getUser = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await getUs(email);
    user
      ? res.status(200).json({ acces: true })
      : res.status(400).json("Usuario no encontrado");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUser