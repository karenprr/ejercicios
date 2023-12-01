// Factorial
var num1, f;

f = 1;
num1 = parseInt(prompt("Ingrese Numero: "))
i = 0;

for (i = 1; i <= num1; i++) {
    f *= i;
}

console.log(`El factorial de ${num1} es: ${f}`)