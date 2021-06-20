require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const sequelize = require('./utils/database');
const passport = require('./utils/passport');
const apiRoutes = require('./routes/apiRoutes');
const { socketioServer } = require('./utils/socketio');
const app = express();
const httpServer = require('http').Server(app);
socketioServer(httpServer);

const PORT = process.env.PORT || 3000;


// require('./utils/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoutes);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    httpServer.listen(PORT, () => {
      console.log(`Server connected on PORT = ${PORT}`);
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
start();
