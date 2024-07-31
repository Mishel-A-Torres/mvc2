import {Schema, model} from 'mongoose'

const esquema1 = new mongoose.Schema({
    nombre:{
        type: String
    },
    numtel:{
        type: Number
    },
    residencia:{
        type: String
    }
})

const modelo1 = new model('cliente', esquema1)