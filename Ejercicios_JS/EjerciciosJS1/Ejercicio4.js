/***************************************
*JS de Ejercicio4.html
* Autor : Ángel Domínguez Ruiz
****************************************/

function calcularLetraDNI(dni) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return letras[dni % 23];
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dniForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const dniInput = document.getElementById('dni');
        const dni = dniInput.value.trim();

        if (!/^\d{7,8}$/.test(dni)) {
            alert("Por favor, introduce un número válido de 7 u 8 dígitos.");
            return;
        }

        const letra = calcularLetraDNI(parseInt(dni, 10));
        document.getElementById('resultado').textContent = `La letra en tu DNI es: ${letra}`;
    });
});