const mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    email : {
        type: String,
        required: [true, 'Email harus di isi']
    },
    name: {
        type: String,
        required: [true, 'Nama harus di isi']
    },
    password : {
        type: String,
        required: [true, 'Kata Sandi harus di isi']
    },
    role: {
        type: String,
        enum : ['admin', 'user'],
        default : 'admin'
    },
    status: {
        type: String,
        enum : ['Y', 'N'],
        default : 'Y'
    },
    phoneNumber: {
        type: String,
        required: [true, 'Nomor telpon harus di isi']
    },
    

}, {timestamps: true})
module.exports = mongoose.model('User', userSchema)