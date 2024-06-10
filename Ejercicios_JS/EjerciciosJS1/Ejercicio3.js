/***************************************
*JS de Ejercicio3.html
* Autor : Ángel Dominguez Ruiz
****************************************/

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('trianguloForm');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const lado1 = parseFloat(document.getElementById('lado1').value);
        const lado2 = parseFloat(document.getElementById('lado2').value);
        const lado3 = parseFloat(document.getElementById('lado3').value);

        if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
            mostrarResultado("Por favor, introduce valores válidos para los lados del triángulo.");
            return;
        }

        if (lado1 === lado2 && lado2 === lado3) {
            mostrarResultado("El triángulo es equilátero.");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            mostrarResultado("El triángulo es isósceles.");
        } else {
            mostrarResultado("El triángulo es escaleno.");
        }
    });

    function mostrarResultado(mensaje) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `<p>${mensaje}</p>`;
    }
});