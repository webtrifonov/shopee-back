import {socketIo} from '../../../index';

const {Message} = require('../../../models');
const {User} = require('../../../models');
const { io } = require('../../../socket/socketio');

exports.sendMessage = async (req, res, next) => {
  const { message } = req.body;
  console.log('>>> message = ', message);

  try {
    // 1. сохранить message в базу
    // 2. attachment в базу
    // 3. socket send all
    console.log('>>> Message = ', Message);
    console.log('>>> User = ', User);


    const newMessage = await Message.create({
      // id: uuidv4(),
      message,
      // messageAttachments: [{
      //  url: '',
      // }]
    },
    // {
    //   include: [
    //     {
    //       assosiation: Message.MessageAttachment,
    //     }
    //   ]
    // }
    );
    console.log('>>> io = ', io);
    console.log('>>> socketIo = ', socketIo.io);

    socketIo.io.emit('NEW_MESSAGE', newMessage);
    res.json({
      success: true,
      message: newMessage,
    })


  } catch(error) {
    next(error);
  }
}
