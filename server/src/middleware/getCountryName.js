const getByName = require('../controllers/getByName')

const getCountryName =  async (req, res) => {
    const {name} = req.query
    const otroName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() 

    try {
        const coso = await getByName(otroName)
        res.status(200).json(coso)
    } catch (error) {
        res.status(500).json({'coso': 'coso'})
        
    }
    
}

module.exports = getCountryName 