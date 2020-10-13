// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
//
// const userDB = {
//   id: 1,
//   email: 'test@mail.ru',
//   password: '123456'
// };
// passport.serializeUser(function(user, done) {
//   console.log('serializeUser');
//   done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//   console.log('DEserializeUser', id);
//   const user = (userDB === id) ? userDB : false;
//   done(null, user);
//   // User.findById(id, function(err, user) {
//   //   done(err, user);
//   // });
// });
// passport.use(new LocalStrategy(
//   {usernameField: 'email'},
//   function(email, password, done) {
//     console.log('email = ', email);
//     console.log('password = ', password);
//
//     if (email === userDB.email && password === userDB.password) {
//       return done(null, userDB);
//     } else {
//       return done(null, false);
//     }
//   }
// ));
//
// module.exports = passport;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const userDB = {
  id: 1,
  email: 'test@mail.ru',
  password: '123456',
};

passport.serializeUser(function(user, done) {
  console.log('serializeUser', user);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('DEserializeUser', id);
  const user = (userDB === id) ? userDB : false;
  done(null, user);
  // User.findById(id, function(err, user) {
  //   done(err, user);
  // });
});

passport.use(
  new LocalStrategy({ usernameField: 'email' }, function(
    email,
    password,
    done
  ) {
    if (email === userDB.email && password === userDB.password) {
      console.log('userDB = ', userDB);

      return done(null, userDB);
    } else {
      return done(null, false);
    }
  })
);
module.exports = passport;
