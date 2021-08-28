const {getChatroomUserList} = require('./routes/GET.chatroomUsers');
const {getMessages} = require('./routes/GET.messages');
const {sendMessage} = require('./routes/POST.messages');

const router = require('express').Router();

router.get('/messages', getMessages);
router.get('/chatroom_users', getChatroomUserList);

router.post('/messages', sendMessage);

exports.chatRoutes = router;
