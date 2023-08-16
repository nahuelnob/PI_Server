const { Activity } = require("../db");

const getAct = async () => {
  const act = await Activity.findAll();
  return act;
};

module.exports = getAct;
