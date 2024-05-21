//eliminar a juan y a maria


const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]
/* nombres.splice(nombres.indexOf('juan'),1)
nombres.splice(nombres.indexOf('maria'),1) */

/* o */


/* function eliminarNombre(nombre){
    const posicion = nombres.indexOf(nombre)
    nombres.splice(posicion, 1)
}
eliminarNombre('maria')
eliminarNombre('juan')


 */

/* quiero agregar desp de maria a carlos */

nombres.splice(nombres.indexOf('maria'),0, 'carlos', 'jose')


console.log(nombres)