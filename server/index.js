const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;
const createBulkCountries = require("./src/middleware/createBulkCountries");

conn
  .sync({ alter: true }) // alter : true // force : true
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  // .then(() => axios(`http://localhost:3001/countries/bulk`))
  .then(() => createBulkCountries())
  .catch((error) => console.error(error));
