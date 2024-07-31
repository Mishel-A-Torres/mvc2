import {modelo} from '../models/cliente.model.js'
export const test = () => {
    console.log('si funciona la conexión entre el controlador y el proyecto')
}

modelo.create({
    nombre: 'jesús',
    numtel: 4494057745,
    residencia: 'hotel transilvania'
})