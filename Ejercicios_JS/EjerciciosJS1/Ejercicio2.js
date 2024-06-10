/***************************************
*JS de Ejercicio2.html
* Autor : Ángel Dominguez Ruiz
****************************************/
document.getElementById('calculoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const radio = parseFloat(document.getElementById('radio').value);

    if (isNaN(radio) || radio <= 0) {
        alert("Por favor, introduce un valor válido para el radio");
        return;
    }

    const PI = Math.PI;

    
    const longitud = 2 * PI * radio;
    document.getElementById('longitud').textContent = `Longitud de la circunferencia: ${longitud.toFixed(2)} unidades`;

    
    const area = PI * Math.pow(radio, 2);
    document.getElementById('area').textContent = `Área del círculo: ${area.toFixed(2)} unidades cuadradas`;

    
    const volumen = (4 / 3) * PI * Math.pow(radio, 3);
    document.getElementById('volumen').textContent = `Volumen de la esfera: ${volumen.toFixed(2)} unidades cúbicas`;
});