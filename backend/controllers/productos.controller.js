import {modelo} from '../models/productos.model.js'
export const test3 = () => {
    console.log('si funciona la conexión entre el controlador y el proyecto')
}

modelo.create({
    nombre: 'refresco',
    precio: 45,
    marca: 'coca cola'
})