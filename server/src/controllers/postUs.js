const { User } = require("../db");

const postUs = async ({ nombre, apellido, email, password }) => {
  if (!nombre || !apellido || !email || !password)
    throw new Error("Faltan datos");

  const [user, created] = await User.findOrCreate({
    where: { email: email },
    defaults: { nombre: nombre, apellido: apellido, password: password },
  });

  if (!created) throw new Error("Este email ya esta registrado");

  return user;
};

module.exports = postUs