$(document).ready(function() {
    $('#boton').on('click', function() {
        event.preventDefault();
        $('input, .notificacion').html("");

        var nombre = $('#Nombre').val(),
            apellido = $('#Apellido').val(),
            mail = $('#E-mail').val(),
            consulta = $('#Consulta').val();

        if (validarCampo(nombre)) {
            $('.notificacionNombre').html("");
        } else {
            $('.notificacionNombre').append('Campo obligatorio.');
            $('.notificacionNombre').addClass('invalido');
            console.log('Campo no valido: ' + nombre);
        }


        //JSON con datos validados
        var datosForm = { 'nombre': nombre };
        var datosFormJson = JSON.stringify(datosForm);
    });
});

/**
 * [validarCampo corrobora que el valor ingresado 
 * no esté vacío ni sea un espacio]
 * @param  {[string]} valor [description]
 * @return {[boolean]}       [description]
 */
function validarCampo(valor) {
    if (valor.length == 0 || valor == " ") {
        console.log('Campo no válido: ' + valor);
        return false;
    } else {
        console.log('Campo válido: ' + valor);
        return true;
    }

}