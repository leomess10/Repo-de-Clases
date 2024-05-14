/* operadores logicos */
/*
 :! NOT o negacion : Nos da el valor booleano opuesto al qdato que estoy negando
 */
console.log(! true)

/* ||: OR o O LOGICO
seleccionar /... Si el primer valor es un valor falsy, va a seleccionalr el segundo valor
Si el primer valor es verdadero, va a seleccionar el primer valor
*/
console.log("pepe" || 0)

/* &&: AND o Y LOGICO
Evalua si el primer valor es truly o un falsy
Si es false:
    devuelve el primer valor
si es true:
    devuelve el segundo valor
*/
console.log(1 && "pepe")

/* 
4 && False || "pepe" ---- Devuelve Pepe

8 == '8' || 1 === "1" devuelve true

(null === Nan) || Bolean(NaN)  devuelve false
    False      || False

    Number("1") === number(1) && Number("pepe" +1) devuelve  NaN
*/

/* Variables: Es un espacio reservado que almacena un dato(referencia), este debe tener un identificador el cual usaremos para obtener el dato

*/
var edad = 50
edad = "pepe" /* reasignacion */

console.log(edad)

/* 
Hoisting: Es la capacidad de una variable de ser llamada antes de su declaracion

VAR
Tiene hoisting? Si tiene
Se puede reasignar? Si
Se puede redeclarar? Si
Valor implicito en undefined? Si
el alcance es global siempre

LET
Tiene hoisting? No
Se puede reasignar? si
Se puede redeclarar? No pero si si hay un bloque
Valor implicito en undefined? Si

CONST
Tiene hoisting? no
Se puede reasignar? no pero dentro del bloque si
Se puede redeclarar? no pero si si hay un bloque
Valor implicito en undefined? no
 */

{
    /* estom es un bloque de codigo 
    alcance local dentro de estos corchetes*/
}