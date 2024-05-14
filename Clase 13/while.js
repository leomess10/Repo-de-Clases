/* DRY: no te repitas */



/*  solicitar un nombre al usuario, si el nomnre es 'pepe' seguir solicitando el nombnre, cuando sea distinto, decir ese nomnbre no lo conozcp */



/* if(nombre === 'pepe'){
    nombre = prompt('ingrese devuelta un nombre')
}
else {
    alert('ese nombre no lo conozco')
} */
let nombre = prompt('ingrese su nombre')
while (nombre === 'pepe'){
    alert('ingresa devuelta su nombre')
    nombre = prompt('Ingresa nuevamente el nombre')
}
alert('Ese nombre no lo conozco')