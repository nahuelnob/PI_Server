const { Activity } = require("../db");
const { Op } = require("sequelize");


const postAct = async ({ id, name, difficulty, duration, season, country }) => {
  if (!name || !difficulty || !duration || !season || !country)
    throw new Error("Faltan datos");
  const [activities, created] = await Activity.findOrCreate({
    where: { name : { [Op.iLike]: `%${name}%` }},
    defaults: {
      id,
      name,
      difficulty,
      duration,
      season,
    },
  });
  activities.addCountry(country);

  if (!created) throw new Error("El nombre de esta actividad ya esta registrado");

  return activities;
};

module.exports = postAct;
