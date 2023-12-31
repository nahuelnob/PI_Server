const { Activity , Country} = require("../db");

const getAct = async () => {
  const act = await Activity.findAll({include: {
        model: Country,
        attributes: ['name', 'flags'],
        through: {
            attributes: []
        }
    }});
  return act;
};

module.exports = getAct;
