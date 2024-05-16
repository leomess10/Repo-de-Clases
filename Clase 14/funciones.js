/* /* FUNCIONES */

/* Declaro mi funcion */
/* function sumar2mas2(){
    console.log('El resultado de la suma es ' + (2 + 2))
}  */



function sumar (a, b){
    return (a + b)
}
/* invocacion donde se le asignan los valores */
console.log('el resultado de la suma es ' + sumar(9, 8))
alert ('el resultado de mi suma es ' + sumar(1, 2))
document.write(sumar(8, 8))


function restar(a, b){
    return a - b /* retorna al original sino da undefineddddd */
}
let numero1 = 10
let numero2 = 5
let resultado =  restar(numero1, numero2)
/* ejemplo */
console.log(resultado)






/* 
calculariva(precio) => el valor del iva
calculariva(100) => 21
RESULTADO
function calcularIva(precio){
    return precio * 0.21
} */

/* RESULTADO */

function IVA (precio){
    return 0.21*precio
}
let temp = Number(prompt('Digame un precio'))
alert ('El IVA es ' + IVA(temp))




/* 
calcularminutos(horas) => cantidad de minutos
calcularMinutos(1) => 60
*/

/* RESULTADO */
function calcularMinutos(horas){
    return horas * 60
}
let hrs = Number(prompt('ingrese numero de horas'))
alert ('En minutos es ' + calcularMinutos(hrs))




/* obtenerNumero()
va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero,
sino debera volver a solicitarlo cuando termine de validar se retornara al numero */

/* RESULTADO */

function obtenerNumero(){
    let num = prompt('ingrese un numero')
    while(!num || isNaN(num)){
        num = prompt('Error : vuelve a ingresar el numero')}
        num = Number(num)
        return num
}
let numero_x = obtenerNumero()
alert(numero_x)

/* 

string:

*/

console.log('pepe'.length) /* arroja la longitud del string letras */

console.log('PEPE'.toLowerCase) /* Cambia a minuscula */

console.log('pepe'.toUpperCase) /* Camia a mayuscula */

console.log('PEPE hola'.trim) /* quita los espacios */

console.log('PEPE'.includes()) /* verifica si el string buscado esta dentro del string */

console.log('PEPE'.replaceAll(/* remplazo esto */a, /* por esto */))

console.log('PEPE'.repeat(3)) /*  repite*/