$(document).ready(function() {
    $('#boton').on('click', function() {
        event.preventDefault();
        $('input, .notificacionNombre').html("");
        $('.notificacionMail').html("");

        var nombre = $('#Nombre').val(),
            apellido = $('#Apellido').val(),
            mail = $('#E-mail').val(),
            fecha = $('#fecha').val(),
            catering = $('#catering').val(),
            fotografos = $('#fotografos').val(),
            animadores = $('#animadores').val(),
            consulta = $('#Consulta').val();

        if (validarCampo(nombre)) {
            $('.notificacionNombre').html("");
        } else {
            $('.notificacionNombre').append('Campo obligatorio.');
            $('.notificacionNombre').addClass('invalido');
            console.log('Campo no valido: ' + nombre);
        }

        if (validarMail(mail)) {
            $('.notificacionMail').html("");
            console.log('Mail validado');
        } else {
            $('.notificacionMail').append('Ingrese un mail válido');
            $('.notificacionMail').addClass('invalido');
            console.log('Mail no válido: ' + mail);
        }


        //JSON con datos validados
        var datosForm = {
            'nombre': nombre,
            'apellido': apellido,
            'mail': mail,
            'fecha': fecha,
            'catering': catering,
            'fotografos': fotografos,
            'animadores': animadores,
            'consulta': consulta,
        };

        console.log(datosForm);
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

/**
 * [validarMail valida mail con regular expression]
 * @param  {[string]} mail [description]
 * @return {[boolean]}      
 */
function validarMail(mail) {

    mail.trim();

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(mail)) {

        return true;
    }

    return false;
}