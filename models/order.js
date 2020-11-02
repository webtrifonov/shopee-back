'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsToMany(models.Product, {
        through: models.CartProduct,
        as: 'products',
        foreignKey: 'orderId',
        otherKey: 'productId',
      });
    }
  };
  Order.init({
    userId: DataTypes.STRING,
    status: DataTypes.ENUM([
      'placed',
      'cancelled',
      'received',
    ]),
    totalPrice: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
  });
  return Order;
};
