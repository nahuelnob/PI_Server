const getByName = require('../controllers/getByName')

const getCountryName =  async (req, res) => {
    const {name} = req.query

    try {
        const coso = await getByName(name)
        res.status(200).json(coso)
    } catch (error) {
        res.status(500).json({'coso': 'coso'})
        
    }
    
}

module.exports = getCountryName 