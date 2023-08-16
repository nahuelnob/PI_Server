const bulkCountries = require('../controllers/bulkCountries')
const getCountry = require('../controllers/getCountry')

const createBulkCountries = async (req, res) => {
    try {
        const countries = await getCountry()
        await bulkCountries(countries)
        res.status(200).json({response : 'Created'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = createBulkCountries