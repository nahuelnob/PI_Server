const postUs = require("../controllers/postUs");

const postUser = async (req, res) => {
  const { email, nombre, apellido, password } = req.body;
  try {
    const user = await postUs({ email, nombre, apellido, password });
    res.status(200).json("Usuario Creado" && user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
