require('dotenv').config();
const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const sequelize = require('./utils/database');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const passport = require('./utils/passport');
const passport = require('./utils/passport');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'hghtyNN23h',
    store: new FileStore(),
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 1000 // 3600 sec -> 1 hour
    },
    resave: false,
    saveUninitialized: false
  })
)
// require('./utils/passport');
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', apiRoutes);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server connected on PORT = ${PORT}`);
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
start();
