'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // define association here
    }
  };
  Category.init({
    title: DataTypes.STRING,
    maxPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    timestamps: false,
  });
  return Category;
};
