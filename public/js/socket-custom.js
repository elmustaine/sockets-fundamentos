var socket = io();
//escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
});
//escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola server'
}, function(resp) {
    console.log('repuesta server: ', resp);
});
//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);

});