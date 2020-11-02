const router = require('express').Router();
const {Product, Category} = require('../../models');
const {Op} = require('sequelize');

router.get('/', async (req, res) => {
  const {order, ...filters} = req.query;

  const orderStr = (order || 'ASC').toUpperCase();
  const productsWhere = (filters) => {
    const where = {};

    if (filters.exists) {
      let operator = Op.gte;
      if (filters.exists === 'no') {
        operator = Op.eq
      } else if (filters.exists === 'yes') {
        operator = Op.gt;
      }
      where.amount = {
        [operator]: 0
      }
    }
    if (filters.minPrice && filters.maxPrice) {
      where.price = {
        [Op.between]: [Number(filters.minPrice), Number(filters.maxPrice)],
      }
    }
    return where;
  }
  const categoriesWhere = (filters) => {
    const where = {};
    const categories = filters.categories ? JSON.parse(filters.categories) : [];
    if (categories.length) {
      where.id = {
        [Op.in]: categories,
      }
    }

    return where;
  }
  const products = await Product.findAll({
    where: productsWhere(filters),
    include: [
      {
        model: Category,
        as: 'category',
        attributes: ['title'],
        where: categoriesWhere(filters)
      }
    ],
    attributes: {
      exclude: ['categoryId'],
    },
    order: [
      ['createdAt', orderStr],
      ['updatedAt', orderStr],
      ['title', orderStr],
    ],
  });
  return res.status(200).json({
    success: true,
    products: products,
  });
});
router.get('/product/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id, {
    include: [
      {
        model: Category,
        as: 'category'
      }
    ]
  });
  res.json({
    success: true,
    product,
  })
});
router.get('/categories', async (req, res) => {
  const categories = await Category.findAll({
    order: [['title', 'ASC']],
  })
  return res.status(200).json({
    success: true,
    categories
  })
});
router.get('/search', async (req, res) => {
  const {search, limit} = req.query;

  if (search) {
    const products = await Product.findAll({
      where: {
        title: {
          [Op.like]: `%${search}%`,
        },
      },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['title'],
        },
      ],
      attributes: ['id', 'title', 'image'],
      order: [
        ['updatedAt', 'DESC'],
        ['createdAt', 'DESC'],
        ['title', 'ASC'],
      ],
      limit: limit || 5,
    });

    return res.json({
      success: true,
      products
    });
  }
  return res.json({
    success: false,
    message: 'Enter a search param',
  });
});
module.exports = router;
