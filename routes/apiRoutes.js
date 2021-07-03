const router = require('express').Router();
const passport = require('../utils/passport');

router.use('/auth', require('./auth/authRoutes'));
router.use('/user', passport.authenticate('jwt', { session: false }), require('./user/userRoutes'));
router.use('/products', require('./products/productsRoutes'));
// router.use('/chats', require(''))
module.exports = router;
