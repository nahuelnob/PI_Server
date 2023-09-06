const { Country, Activity } = require("../db");

const getById = async (id) => {
    const country  = await Country.findByPk(id, {include: {
        model: Activity,
        attributes: ['name'],
        through: {
            attributes: []
        }
    }})
    if(!country) throw new Error('No existe un país con ese ID')
    return country
};

module.exports = getById