const express = require('express');
const router = express.Router();
const passport = require('../utils/passport');
// const bookRoutes = require('./book/bookRoutes');
const {getProducts} = require('./controller');

const auth = (req, res, next) => {
  console.log('req.body = ', req.body);

  if (req.isAuthenticated()) {
    next();
  } else {
    return res.send('Not authenticated');
  }
}
router.get('/admin', auth, (req, res) => {
  res.send('Admin page');
});
router.post('/login', (req, res, next) => {
  console.log('req.body = ', req.body);
  passport.authenticate('local', function(err, user) {
    console.log('err = ', err);
    console.log('user = ', user);

    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send('Укажите правильный email или пароль!');
    }
    req.login(user, function(err) {
      console.log('user = ', user);

      if (err) {
        return next(err);
      }
      return res.redirect('admin');
    });
  })(req, res, next);
});
router.post('/logout', (req, res) => {
  req.logout();
  res.send('Not authenticated')
})
// router.use('/bo ok', bookRoutes)
module.exports = router;
