function generarContraseñaRandom() {
    let contraseñaRandom = document.getElementById('contraseñaCreada');
    let longitudDeContraseña = document.getElementById('longitudDeContraseña').value;
    let error = document.getElementById('error');

    let contraseña = '';
    let caracteres = 'abcdefghijqlmnñropqrstuvwxyABCDEFGHIJKLMNÑROPQRSTUVXYZ0123456789._-!';

    if (longitudDeContraseña == 0)
    error.innerHTML = 'Por favor, ingrese una longitud para la contraseña';
    setTimeout (() => {
        error.style = "hidden";
        window.location.reload();
    },4000);

    for (i = 0; i < longitudDeContraseña; i++) {
        contraseña += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    contraseñaRandom.value = contraseña;
}
