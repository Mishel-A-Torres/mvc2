import {Schema, model} from 'mongoose'

const esquema2 = new mongoose.Schema({
    nombre:{
        type: String
    },
    num_cuenta:{
        type: Number
    }
    
})

const modelo2 = new model('estcompra', esquema2)