import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
import sequelize from './utils/database';
import passport from './utils/passport';
import SocketIO from './socket/socketio';
import apiRoutes from './routes/apiRoutes';
// const { socketioServer } from './socket/socketio');
const app = express();
const httpServer = http.Server(app);
export const socketIo = new SocketIO(httpServer);
socketIo.connection();
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
