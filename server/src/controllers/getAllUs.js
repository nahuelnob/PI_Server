const { User } = require('../db')

const getAllCount = async() => {
    const users = await User.findAll()
    return users
}

module.exports = getAllCount