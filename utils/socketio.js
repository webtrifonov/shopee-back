const socketio = require('socket.io')

const messageList = [];

exports.socketioServer = (httpServer) => {
  const io = socketio(httpServer);

  io.on('connection', (socket) => {
    console.log('>>> connection <<<');

    socket.on('CONNECT_TO_GENERAL', (cb) => {
      console.log('>CONNECT_TO_GENERAL', messageList);
      socket.join('GENERAL');

      io.to('GENERAL').emit('GET_MESSAGES', {messageList});
    })

    socket.on('SEND_MESSAGE', (payload) => {
      console.log('>>> SEND_MESSAGE payload = ', payload);
      const id = Date.now();
      const newMessage = {
        id,
        ...payload,
      }
      messageList.push(newMessage);
      io.emit('RECEIVE_MESSAGE', { messageData: newMessage });
      // cb({id})
    })

    socket.on('DISCONNECT_FROM_GENERAL', () => {
      console.log('>DISCONNECT_FROM_GENERAL')
      socket.leave('GENERAL');
    })
  })
}
