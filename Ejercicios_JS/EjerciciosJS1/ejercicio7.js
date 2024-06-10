/***************************************
*JS de Ejercicio7.html
* Autor : Ángel Domínguez Ruiz
****************************************/

function calcularDivision(dividendo, divisor) {
    let cociente = Math.floor(dividendo / divisor);
    let resto = dividendo % divisor;
    return { cociente, resto };
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('divisionForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const dividendo = parseInt(document.getElementById('dividendo').value.trim(), 10);
        const divisor = parseInt(document.getElementById('divisor').value.trim(), 10);

        if (isNaN(dividendo) || isNaN(divisor) || dividendo <= 0 || divisor <= 0) {
            alert("Por favor, introduce números enteros positivos.");
            return;
        }

        const { cociente, resto } = calcularDivision(dividendo, divisor);
        document.getElementById('resultado').innerHTML = `
            <p>El cociente de la división es: ${cociente}</p>
            <p>El resto de la división es: ${resto}</p>
        `;
    });
});