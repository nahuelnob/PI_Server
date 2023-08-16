const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
          min: 3,
          max: 3,
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flags: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
        /* (
          "South America",
          "North America",
          "Oceania",
          "Africa",
          "Europe",
          "Asia"
        ), */
      },
      capital: {
        type: DataTypes.STRING,
        /* allowNull: false, */
      },
      subRegion: {
        type: DataTypes.STRING,
        /* allowNull: false, */
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
