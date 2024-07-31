import {modelo} from '../models/estcompra.model.js'
export const test2 = () => {
    console.log('si funciona la conexión entre el controlador y el proyecto')
}

modelo.create({
    nombre: 'jesús',
    num_cuenta: 4494057745
})