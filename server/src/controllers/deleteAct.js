const { Activity } = require("../db");

const deleteAct = async(id) => {
    const deleteActivity = await Activity.findByPk(id)
    if(!deleteActivity) return
    const aux = {...deleteActivity}
    await deleteActivity.destroy()
    return aux
}

module.exports = deleteAct