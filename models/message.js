'use strict';
const { v4: uuidv4 } = require('uuid');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.Chatroom, {
        foreignKey: 'chatroom_id',
        targetKey: 'id',
        as: 'chatroomId',
      });
      Message.belongsTo(models.Message, {
        foreignKey: 'reply_to',
        targetKey: 'id',
        as: 'replyTo',
      });
    }
  };
  Message.init({
    message: DataTypes.STRING,
    isForwarded: {
      type: DataTypes.BOOLEAN,
      field: 'is_forwarded',
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    },

  }, {
    sequelize,
    modelName: 'Message',
    tableName: 'messages',
    timestamps: false,
  });
  Message.addHook('beforeCreate', (message, options) => {
    console.log('>>> message = ', message);
    console.log('>>> options = ', options);

    message.id = uuidv4();
    message.createdAt = new Date();

  })
  return Message;
};
