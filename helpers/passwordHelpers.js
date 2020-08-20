
const bcrypt = require('bcryptjs')


module.exports.passwordHash = async ( password ) => await bcrypt.hash(password, 12)