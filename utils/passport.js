/*
 * Github Auth Repo
 * https://github.com/zachgoll/express-jwt-authentication-starter/tree/final
 * YouTube
 * https://www.youtube.com/watch?v=Ne0tLHm1juE
 */


const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const fs = require('fs');
const path = require('path');
const {User} = require('../models');

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

// At a minimum, you must pass the `jwtFromRequest` and `secretOrKey` properties
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256']
};

// app.js will pass the global passport object here, and this function will configure it

// The JWT payload is passed into the verify callback
passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
  console.log('jwt_payload', jwt_payload);
  // We will assign the `sub` property on the JWT to the database ID of user
  try {
    const user = await User.findByPk(jwt_payload.sub);
    // This flow look familiar?  It is the same as when we implemented
    // the `passport-local` strategy
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
}));
module.exports = passport;
