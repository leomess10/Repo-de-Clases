/* const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: 40
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodriguez',
        edad: 40
    }
] */
/* Por cada personaje mostrar el siguiente mjs por consola: 'Hola mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} anios */

/* opcional mostrar por consola 'total de edades: {sumatoria de las edades de los usuarios} */

/* for(let i = 0; i = personajes.length; i = i+1){
    const personaje = personajes[i]
    console.log('Hola mi nombre es ' + personaje.nombre + personaje.apellido + ' y tengo ' + personaje.edad + ' anios')
} */

const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: 40
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodriguez',
        edad: 40
    }
]
/* for of */
for(const personaje of personajes){
    console.log(personaje)
}
/* ir al ejercicio anterior y hacerlo con for offffffffffffffff */

const carrito = [
    {
        nombre:  'tv samsung',
        precio: 300,
        cantidad: 3
    },
    {
        nombre:  'patineta',
        precio: 30,
        cantidad: 1
    }
] 

/* for in */

for(const carrito of carritos){
    console.log(carrito)
}

const datos = {
    'nombre': 'pepe',
    'apellido': 'suarez',
    'dni': '40595558'
}
let resultado = ''
for(let propiedad in datos){
    resultado = resultado + '\n<span>' + propiedad + ':</span>' + '<span>' + datos[propiedad] + '</span'
   
}
console.log(resultado)