module.exports.registerValidation = (username, email, password, confirmPassword) =>{
    const errors = {}
    if(username.trim === '') {
        errors.username = "You need a username"
    }
    if(email.trim === '') {
        errors.username = "You need an Email as well"
    } elses
}