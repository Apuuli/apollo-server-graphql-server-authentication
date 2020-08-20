const jwt = require('jsonwebtoken')

const User = require('../../models/user.model')
const { passwordHash } = require('../../helpers/passwordHelpers')
const { tokenGenerator } = require('../../helpers/tokenFactory')

module.exports = {
    Mutation:{

        register: async ( _, { registerInput : {username, email, password, confirmPassword} } ) => {
            
            const user = new User({
                username,
                email,
                password: passwordHash(password),
                createdAt : new Date().toLocaleDateString()
            })
            const res = await user.save()
            

            return {
                ...res._doc,
                id:res.id,
                token:tokenGenerator(res)
            }
        }
    }
}