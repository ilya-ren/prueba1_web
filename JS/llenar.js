function verificarDatoLleno() {
    // Obtener el valor del campo de entrada
    var dato = document.getElementById('dato').value;

    // Verificar si el dato está lleno
    if (dato.trim() !== '') {
        alert('Dato lleno: ' + dato);
    } else {
        alert('Por favor, ingrese un dato antes de verificar.');
    }
}