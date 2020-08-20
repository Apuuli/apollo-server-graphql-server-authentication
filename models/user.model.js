const {model , Schema} = require('mongoose')

const userSchema = new Schema (
    {
        username: {
            type:String,
            required:true,
            trim:true,
            minLength:3
        },
        password: {
            type:String,
            required:true,
            minLength:8
        },
        email: {
            type:String,
            required:true,
            trim:true,
            minLength:3
        },
    },
    {
        timestamps:true
    });

module.exports = model('User', userSchema)