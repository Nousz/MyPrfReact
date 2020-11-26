const mongoose = require('../database');

//campos dos banco de dados
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowecase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    creatAt: {
        type: Date,
        default: Date.now,
    },
});

//difinir user/model
const User = mongoose.model('User', UserSchema);

//exportar o usuário
module.exports = User;