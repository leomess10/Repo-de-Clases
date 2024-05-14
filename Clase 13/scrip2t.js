/* Crea una variable llamada "tieneHijos" y asígnale "true" si tienes hijos o "false" si no los tienes. A continuación, escribe una línea de código para mostrar el valor de la variable en una alerta.

Crea una variable llamada "salario" y  solicita un salario actual como valor. A continuación, escribe una línea de código que calcule el salario anual multiplicando el salario mensual por 12 y muestre el resultado en una alerta.

Escribe un condicional que verifique si una variable llamada "edad" es mayor o igual a 18. Si es mayor o igual a 18, imprime "Eres mayor de edad" en la consola. Si no es mayor de edad, imprime "Eres menor de edad" en una alerta. */
/* 1 */
let tienehijos = true
alert(tienehijos)
/* 2 */
let salario = prompt ('Indique su salario')
salario = (salario * 12)
alert ('su salario anual es ' + salario)
/* 3 */
let edad = prompt ('Indique su edad')
if (edad >= 18){
    alert('Eres mayor de edad')
}
else {
    alert('No eres mayor de edad')
}