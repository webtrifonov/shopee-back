'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        targetKey: 'id',
        as: 'category',
      });
      Product.belongsToMany(models.Order, {
        through: models.CartProduct,
        as: 'orders',
        foreignKey: 'productId',
        otherKey: 'orderId',
      })
    }
  };
  Product.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    amount: DataTypes.INTEGER,
    categoryId: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
  });
  return Product;
};
