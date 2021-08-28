'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MessageAttachment extends Model {
    static associate(models) {
      MessageAttachment.belongsTo(models.Message, {
        foreignKey: 'message_id',
        targetKey: 'id',
        as: 'messageId',
      });
    }
  };
  MessageAttachment.init({
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'MessageAttachment',
    tableName: 'message_attachments',
    timestamps: true,
  });
  return MessageAttachment;
};
