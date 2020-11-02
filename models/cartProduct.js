'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartProduct extends Model {
    static associate(models) {
      // define association here
    }
  };
  CartProduct.init({
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Order',
        key: 'id'
      }
    },
    amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CartProduct',
    tableName: 'cart_products',
  });
  return CartProduct;
};
