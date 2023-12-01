// Reciba un año y te responda si es o no es bisiesto

// Prompt user for year
var año = parseInt(prompt("Año?"))

// Calcular si es año bisiesto
if (año % 4 === 0 && año % 100 === 0 && año % 400 === 0 ) {
    console.log("Año bisiesto")
}
else {
    console.log("No bisiesto");
}