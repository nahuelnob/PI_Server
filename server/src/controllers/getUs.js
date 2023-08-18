const { User } = require("../db");

const getUs = async (email, password) => {
  const user = await User.findOne({ where: { email: email , password: password} });
  return user;
};

module.exports = getUs