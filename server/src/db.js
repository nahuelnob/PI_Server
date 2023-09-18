require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, PORT, BDD, DB_DEPLOY
} = process.env;

//! Asi estaba antes de deployar
/* const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
}); */
//* Despues de deployar ---> tambien cambie en packjson el nodemon x node
const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false, 
  native: false, 
});


const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Country, Activity, User } = sequelize.models;

// Aca vendrian las relaciones
Country.belongsToMany(Activity, { through: "Country_Activity" });
Activity.belongsToMany(Country, { through: "Country_Activity" });
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};