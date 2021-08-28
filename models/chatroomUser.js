'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatroomUser extends Model {
    static associate(models) {
      ChatroomUser.belongsTo(models.Chatroom, {
        foreignKey: 'chatroom_id',
        targetKey: 'id',
        as: 'chatroomId',
      });
    }
  };
  ChatroomUser.init({
    isBlocked: {
      type: DataTypes.BOOLEAN,
      field: 'is_blocked',
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
    modelName: 'ChatroomUser',
    tableName: 'chatroom_users',
    timestamps: false,
  });
  return ChatroomUser;
};
