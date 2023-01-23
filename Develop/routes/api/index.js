const router = require('express').Router();
const { Product, Category } = require('../../models');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

Product.belongsTo(Category, {});

Category.hasMany(Product, {});

Product.belongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    }
});

Tag.belongsToMany(Product, {});

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
