const { Activity, Country } = require("../db");

const postAct = async ({ id, name, difficulty, duration, season, country }) => {
  const activities = await Activity.create({
    id,
    name,
    difficulty,
    duration,
    season,
  });
  activities.addCountry(country);
  return activities;
};

module.exports = postAct;
