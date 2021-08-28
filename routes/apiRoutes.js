const router = require('express').Router();
const passport = require('../utils/passport');
const {chatRoutes} = require('./chat');

router.use('/auth', require('./auth/authRoutes'));
router.use('/user', passport.authenticate('jwt', { session: false }), require('./user/userRoutes'));
router.use('/products', require('./products/productsRoutes'));
router.use('/chats', chatRoutes)
module.exports = router;
