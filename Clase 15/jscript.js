/* OBJETOS */

let edadUsuario = 90
let nombreUsuario = 'pepe'
let dineroUsuario = 7000

/* SE SIMPLIFICA ASI */
/* MODELO KEY VALUE */

let usuario = {
    edad: 90,
    nombre: 'pepe',
    dinero: 7000
}

console.log(usuario.dinero)

/* crear un objeto llamado producto que tenga precio, nombre, descripcion y marca */

let producto = {
    precio : 90,
    nombre : 'botines Nike',
    descripcion : 'Botines para papi futbol',
    marca : 'nike'
}

/* vamos a crear un objeto llamado persona, que tenga nombre, edad y mejorAmigo
mejorAmigo debe ser otro objeto que solo tenga nombre y edad*/

/* let persona = {
    nombre : 'Raul',
    edad : 65,
    mejorAmigo : {
        nombre : 'Jose',
        edad : 15
    }
} */

/* camel case = holaMeLlamoMati

snake_case = hola_me_llamo_mati
*/

/* let auto = {nombre: 'honda ciciv', precio: 600}
 */
auto = 'pepe' /* reasignarlo pierde el objeto anterior declarados */

/* objetos van con const no let */

const auto = {nombre: 'honda ciciv', precio: 600}

auto.precio = 7000

/*  cambiar el nombre del mejorAmigo a 'pepe' y crear la propiedad nroCelular a persona */

const persona = {
    nombre : 'Raul',
    edad : 65,
    mejorAmigo : {
        nombre : 'Jose',
        edad : 15
    }
}

persona.mejorAmigo.nombre = 'pepe'
persona.nroCelular = 123456789

/*
dentro del objeto puede que aparece asi alguna vez
'nombre completo': 'pepe mujica'

para llamarlo es asi:
console.log(objetox['nombre completo'])


*/





