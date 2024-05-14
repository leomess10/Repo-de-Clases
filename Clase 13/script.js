/* 
Si una funcion no retorna nada, por defecto retorna undefined


Funciones nativas

-IsNan() es una funcion que recibe un dato y devuelve un booleano que induca si es o no un Nan
-alert() es una funcion que recibe un string y lo muestra en un pop up en la pagina
-typeof() nos dice que tipo de dato es
-Prompt() nos muestra un pop up que deja escribir al usuario y lo puedo guardar en una variable
ej 
let dato = prompt("pepe")
alert("el valor ingresado es: " + dato)
------
pasar prompt a number
let dato = prompt (dato)
dato = Number (dato)
alert(typeof dato)


-parseInt()  parte entera nomas
-parsefloat() todo el numero con decimales
*/
alert("Hola desde una alerta")


/*  If */

let edad = prompt ("ingrese su edad")

if(edad > 18){
    alert ('podes pasar')
}
else{
    alert('no podes pasar')
}

/* cuando el dato no debne ser null ni '' */
/* caso sin mejora */
/* let dato = prompt ('dime algo')
if(dato === null || dato === ''){
    alert('ERROR: DATO NO VALIDO')
}
else{
    alert('Todo esta bien')
} */
/* caso mejorado */
let dato = prompt ('dime algo')
if(!dato){/* si es falsy ejecuta if, sino el else */
    alert('ERROR: DATO NO VALIDO')
}
else{
    alert('Todo esta bien')
}

/* si el puntaje da entre 0 y 1000 diremos 'principiante'
    SI EL PUNTAJE DA ENTRE 1000 Y 3000 DIREMOS 'AVANZADO'
    SI EL PUNTAJE DA MAYOR A 3000 diremos 'experimentado' */

    let puntos = prompt('ingresa tus puntos')

    if(puntos >= 0 && puntos <= 1000){
        alert('principiante')
    }
    else if(puntos > 1000 && puntos <= 3000){
        alert('avanzado/a')
    }
    else if(puntos > 3000){
        alert('experimentado/a')
    }


    