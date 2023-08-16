const { Country, Activity } = require("../db");

const getById = async (id) => {
    const country = await Country.findByPk(id, {include: {
        model: Activity,
        attributes: ['name'], //Solo traigo el nombre de la actividad (por ahora)
        through: {
            attributes: []
        }
    }})
    return country
};

module.exports = getById