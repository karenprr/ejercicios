// Calcule el incremento salarial de una persona: Si su salario es menor a 15mil el incremento será del 20% y si es mayor a 15mil el incremento será del 15%

// Preguntar salario
var salario = parseFloat(prompt("Salario? "))
incremento = 0;

// Si el salario es menor a 15,000 incremnto del 20%
if (salario < 15000) {
    incremento = salario * .20
    console.log("Incremento sera del 20%: Aumento: " + incremento)
}
// Si el salario es mayor a 15,000 incremento del 15%
else if (salario > 1500) {
    incremento = salario * .15
    console.log("Incremento del 15%, Aumento: " + incremento)

}
// Si pone una cosa random el usario
else {
    console.log("sorry")
}

