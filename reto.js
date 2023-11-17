// Creamos la validación del formulario con una constante.
const validacionFormulario = (formulario) => {
    if (formulario.nombre && formulario.email && formulario.mensaje) {
        return true;
    } else {
        return false;
    }
}
// Creamos una constante para verificar si se cumplen los requisitos y devolver el mensaje a la consola.
const envioDeFormulario = (formulario) => {
    if (validacionFormulario(formulario)) {
        console.log('¡Formulario enviado con éxito!');
    } else {
        console.log('Por favor, completa todos los campos.');
    }
}
// Ejemplo de los datos del formulario.
const formularioMensaje = {
    nombre: 'Jose',
    email: 'Ejemplo@programando.com',
    mensaje: 'Saludos, Futuros Colegas',
};
// Imprimimos el formulario para verificar si está correcto.
envioDeFormulario(formularioMensaje);

