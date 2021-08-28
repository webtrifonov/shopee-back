import socketio from 'socket.io';

const messageList = [];



export default class SocketIO {
  constructor(httpServer) {
    this.io = socketio(httpServer);
  }
  connection() {
    this.io.on('connection', (socket) => {
      console.log('>>> connection <<<');
      const connectToGeneral = (cb) => {
        console.log('>CONNECT_TO_GENERAL', messageList);
        socket.join('GENERAL');

        this.io.to('GENERAL').emit('GET_MESSAGES', { messageList });
      };
      const sendMessage = (payload) => {
        console.log('>>> SEND_MESSAGE payload = ', payload);
        const id = Date.now();
        const newMessage = {
          id,
          ...payload,
        }
        messageList.push(newMessage);
        this.io.emit('RECEIVE_MESSAGE', { messageData: newMessage });
        // cb({id})
      }
      const disconnectFromGeneral =  () => {
        console.log('>DISCONNECT_FROM_GENERAL')
        socket.leave('GENERAL');
      }
      socket.on('CONNECT_TO_GENERAL', connectToGeneral);
      socket.on('SEND_MESSAGE', sendMessage)
      socket.on('DISCONNECT_FROM_GENERAL', disconnectFromGeneral)
    })
  }
}
