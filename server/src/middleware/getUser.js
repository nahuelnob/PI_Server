const getUs = require("../controllers/getUs");

const getUser = async (req, res) => {
  try {
    const { email, password } = req.query;
    const user = await getUs(email, password);
    user
      ? res.status(200).json({ access: true, email, password})
      : res
          .status(404)
          .json({ error: "El usuario o la contraseña son incorrectos" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUser;
