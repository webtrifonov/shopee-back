'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chatroom extends Model {
    static associate(models) {
      // define association here
    }
  };
  Chatroom.init({
    title: DataTypes.STRING,
    cover: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Chatroom',
    tableName: 'chatrooms',
    timestamps: true,
  });
  return Chatroom;
};
