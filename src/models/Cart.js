const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    produtcs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],

    username:{
        type: mongoose.Schema.Types.ObjectId,
        required: 'User'
    },

    address:{
        street: {
            type: String,
            required: true
        },
        number:{
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        cep:{
            type: Number,
            required: true
        }
    },
    
    payment:{
        card:{
            tipe:{
                type: String
            },
            number: {
                type: String
            },
            cvc:{
                type: String
            }
        }
    }
})

module.exports = mongoose.model('Cart', Schema)