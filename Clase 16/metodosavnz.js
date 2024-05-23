/* METODOS AVANZADOS de arrays */


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
        edad: 5
    }
]

for(const personaje of personajes){
    console.log(personaje)
}

/* es lo mismo */
personajes.forEach(function (personaje){
    console.log(personaje)

})

/* Filter es un metodo avanzado porque recibe una callback (metodo avanzado)
recibe una callback, la callback recibe a el elemento. Si el valor de retorno de la callback es truly entonces el elemento se agregara al array resultante, si el valor es un falsy entonces se ignorara
Siempre filter retornara un ARRAY
*/
const personajesMayoresDeEdad = personajes.filter(function(personaje){
    return personaje.edad >= 18
})
console.log(personajesMayoresDeEdad)



const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100
    },
    {
    nombre: 'tv LG',
        marca: 'LG',
        id: 2,
        precio: 2900
    },
    {
        nombre: 'tv noblex',
            marca: 'noblex',
            id: 3,
            precio: 2500
        },
]

/* -Traer los productos que sean de un precio inferior a 2950
-Traer los productos de la marca noblex
- traer los productos q en su nombre imcluyan el string tv */

const productosInferiores = productos.filter(function(producto){
    return (producto.precio <= 2950)
})
console.log(productosInferiores)

const productosNoblex = productos.filter(function(producto){
    return (producto.marca.toLocaleLowerCase() === 'noblex'.toLocaleLowerCase())
})
console.log(productosNoblex)

const televisiones = productos.filter(function (productos){
    return (productos.nombre.toLocaleLowerCase().includes("tv".toLocaleLowerCase()))
})
console.log(televisiones)/* toLoweCase es para transformarlo todo a miniscula */



/* quiero solo a pepe */
/* metodo find ejemplo*/

const pepe = personajes.find(function(personaje){
    return personaje.nombre === 'pepe'
})


/* MAP
nos sirve para crear un array en base a otro array


Retorna un ARRAY
recorre el array y por cada ele,mnto la callback va a ejecturar el valor de retorno de la colba es el valor del nuevo elemento que se agregara al array resultante
*/

const objetos = [
    {
        nombre: 'vaso',
    },
    {
    nombre: 'tornillo',
    },
    {
        nombre: 'computadora'
    }
]
const listaObejtosHtml = objetos.map(function(objeto){
    return '<div>' + objeto.nombre + '</div>'
})
console.log(listaObejtosHtml)
/* quiero que aparezca asi
[
    '<div>vaso</div>'
    '<div>tornillo</div>'
    '<div>computadora</div>'
] */
