const { User } = require("../db");

const getUs = async (email) => {
  const user = await User.findOne({ where: { email: email } });
  return user;
};

module.exports = getUs