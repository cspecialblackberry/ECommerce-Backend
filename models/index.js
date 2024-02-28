// import models
const Product = require('./product');
const Category = require('./category');
const Tag = require('./tag');
const ProductTag = require('./product-tag');
   
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
})

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
})

Product.belongsToMany(Tag, {
    through: 'ProductTag',
})

Tag.belongsToMany(Product, {
    through: 'ProductTag',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};