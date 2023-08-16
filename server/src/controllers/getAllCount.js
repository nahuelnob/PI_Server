const { Country } = require('../db')

const getAllCount = async() => {
    const countries = await Country.findAll()
    return countries
}

module.exports = getAllCount