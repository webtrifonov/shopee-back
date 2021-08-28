const {Message} = require('../../../models');


exports.getMessages = async (req, res, next) => {
  const { limit, offset, chatroomId } = req.query;
  console.log('>>> messages = ', limit, offset);
  try {
    const messages = await Message.findAll({
      where: { chatroom_id: chatroomId }
    })
    res.json({
      messages,
    })
  } catch(error) {
    next(error);
  }
};
