const getAct = require('../controllers/getAct')

const getAllActivities = async(req, res) => {
    try {
        const activities = await getAct()
        res.status(200).json(activities)
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
}

module.exports = getAllActivities