// Pseudocodigo que valide si una palabra o frase es palindromo

function palindromo(string) {

    // find the length of a string, to iterate trough the string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'No es un palindromo';
        }
    }
    return 'Palindromo';
}

// prompt user for input 
const string = prompt('Escribe algo: ');

// call the function
const value = palindromo(string);

console.log(value);