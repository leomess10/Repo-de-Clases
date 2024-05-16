/* 
    Quiero un programa que dado un nombre me muestre una alerta con el nombre, 3 veces
*/
/* let nombre = 'pepe'

alert(nombre)
alert(nombre)
alert(nombre)

*/
/*

bucle for se usa para cuando queremos repetir algo X cantidad de veces (se la x)

sintaxis:
for(let iterador = valor_inicial; limite(mientras mi iterador sea menor o igual a x); actualizacion)

*/

/* let nombre = 'pepe'

for(let iteracion =1; iteracion <= 3; iteracion = iteracion + 1){
        alert(nombre)
    } */


/* 
mostrar por alerta el conteo del 1 al 10 se deben ejecutar 10 alertas
*/

/* let contador = 'cont'

for(let iteracion =1; iteracion <= 10; iteracion = iteracion + 1){
        alert(iteracion)
    }
     */



/* 
Solicitar al usuario un numero 3 veces, mostrar al final de las solicitudes una alerta que muestre la sumatoria de los 3 numeros
*/

/* let numero1 = prompt ('Ingrese el primer numero')
let numero2 = prompt ('Ingrese el segundo numero')
let numero3 = prompt ('Ingrese el tercer numero')
alert(numero1 + numero2 + numero3) */

let sumatoria = 0

for( let i = 1; i <= 3; i = i +1 ) {
    let numero = prompt ('ingrese un numero')
    /* casos que no tomo numero: si es el resultado del prompt es null, ``, algun string */
    while (!numero || isNaN(numero)){/* si el numero es un valor falsy o es un Nan, me va a volver a solicitar un numero */
        numero = prompt (`Error, dato no valido, vuelva a ingresar el numero`)
    }

    numero = Number (numero)
    sumatoria = sumatoria + numero
}
alert('resultado es ' + sumatoria)



/* 
salto de linea para lista: alert('lista: \n-pepe\n-juan') */







/* TAREA
solicitar al usuario la cantidad de personas en la clase (numero) Dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre (
    Si la cantidad de personas de clase es 5, van a solicitar 5 nombres
)

luego de solicitar los nombres mostrarlos en formato de listas 
-jose
-pepe
-pedro
-
*/



