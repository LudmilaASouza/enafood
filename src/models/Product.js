const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    produtcDescription:{
        type: String
    },
    productPrice:{
        type: Number,
        required: true
    },
    productQuantity:{
        type: Number,
        require: true
    },
    username:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

})

module.exports = mongoose.model('Product', Schema)