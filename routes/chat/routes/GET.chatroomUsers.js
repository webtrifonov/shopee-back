const {ChatroomUser} = require('../../../models/');

exports.getChatroomUserList = async (req, res, next) => {
  try {
    const { limit, offset, chatroomId } = req.query;
    const {rows, count} = await ChatroomUser.findAndCountAll({
      where: {
        chatroom_id: chatroomId,
      },
    })
    res.json({
      chatroomUserList: rows,
      count,
    });
  } catch(error) {
    next(error);
  }
};
