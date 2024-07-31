import {Schema, model} from 'mongoose'

const esquema3 = new mongoose.Schema({
    nombre:{
        type: String
    },
    precio:{
        type: Number
    },
    marca:{
        type: String
    }
})

const modelo3 = new model('productos', esquema3)
