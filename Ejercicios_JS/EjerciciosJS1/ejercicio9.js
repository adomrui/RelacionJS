/***************************************
*JS de Ejercicio9.html
* Autor : Ángel Dominguez Ruiz
****************************************/

const meses = [
    "", 
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mesForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const mesSelect = document.getElementById('mes');
        const mesSeleccionado = parseInt(mesSelect.value, 10);

        if (mesSeleccionado >= 1 && mesSeleccionado <= 12) {
            document.getElementById('resultado').innerHTML = `
                <p class="text-center">El mes seleccionado es: ${meses[mesSeleccionado]}</p>
            `;
        } else {
            alert("Por favor, selecciona un mes válido.");
        }
    });
});