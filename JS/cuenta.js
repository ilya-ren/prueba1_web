function submitForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    // Ejemplo: Validación simple en el lado del cliente
    if (username === 'usuario' && password === 'contraseña') {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}