const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido al chat'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar cliente
    client.on('enviarMensaje', (data, callback) => {

        // if (data.usuario) {
        //     callback({
        //         rep: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         rep: 'Todo salio mal'
        //     });
        // }
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);

    });
});