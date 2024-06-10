/***************************************
*JS de Ejercicio6.html
* Autor : Ángel Domínguez Ruiz
****************************************/

function esPalindromo(cadena) {
    return cadena === cadena.split('').reverse().join('');
}

function generarPalindromo(cadena) {
    return cadena + cadena.split('').reverse().join('');
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('palindromoForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const cadena = document.getElementById('cadena').value.trim();

        if (cadena === '') {
            alert("Por favor, introduce una cadena.");
            return;
        }

        let resultado;

        if (esPalindromo(cadena)) {
            resultado = "La cadena es un palíndromo.";
        } else {
            resultado = `La cadena no es un palíndromo. Su palíndromo correspondiente es: ${generarPalindromo(cadena)}`;
        }

        document.getElementById('resultado').textContent = resultado;
    });
});