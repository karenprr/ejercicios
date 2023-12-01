// Velocidad Distancia

var v, d

// Input del user
v = parseInt(prompt("Velocidad? "))
d = parseInt(prompt("Distancia"))

// Constante de tiempo
const tiempo = d / v

// Imprimir resultado
console.log(`Viajo durante: ${tiempo} horas`)