/*  los arrays se usan para listar elementos*/

let notaTrimestre1 = 9
let notaTrimestre2 = 5
/* o mejor */
/* tienen posicion indice\index
                      0, 1, etc */
let notasTrimestre = [9, 5]

/* si quiero modificar un valor */
notasTrimestre[1] = 7


console.log('El segundo trimestre te sacaste un:' + notasTrimestre[1])

console.log(Object(notasTrimestre))
/* un array es un objeto, ejemplo */

const notas = {
    0: 9,
    1: 5,
    length: 3
}




const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]

/* yo quiero que alex deje de ser alex y sea alexis
 */

nombres[5] = 'alexis'

/* si yo quiero eliminar a alexis */


/* mala practica
delete nombres[5]
como agregar casilleros
nombres[7] = ezequiel */

//.pop() => elimina el ultimo elemento
nombres.pop()

/* para eliminar el primero y lo retorna */

nombres.shift()

/* si quiero mostrar el que elimiine primero y lo retorna */

let eliminado = nombres.shift()
console.log(eliminado)
/* igual con pop */

/* agregar nombres al final y al principio
push => agrega al final
unshift => agrega al inicio
*/

nombres.push('leonel')
nombres.unshift('juanjo')


/* quiero que maria deje ser maria y sea mario */
nombres[2] = 'marianella'
/* o mejor */
//indexOf (searchstring) => busca el elemento en el array y si lo encuentra devuelve la posicion y sino devuelve -1 SOLAMENTE EN STRING
nombres.indexOf('maria')
let posicionMaria = nombres.indexOf('maria')
nombres [posicionMaria] = 'mario'

/* Si quiero eliminar a valentina que esta en el medio */

//splice(posicion, cuantos elementos elimina, un nuevo elemento) 

let posicionDeValentina = nombres.indexOf('valentina')
nombres.splice(posicionDeValentina, 1)

console.log(nombres)








