const router = require('express').Router();
const {Product, Category} = require('../../models');
const {Op} = require('sequelize');

router.get('/', async (req, res) => {
  const {orderType, orderValue, limit, offset, ...filters} = req.query;
  console.log('>>> orderType = ', orderType);
  console.log('>>> orderValue = ', orderValue);
  console.log('>>> filters = ', filters);
  const orderTypeValid = orderType || 'createdAt';
  const orderValueValid = (orderValue || 'ASC').toUpperCase();
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
  const products = await Product.findAndCountAll({
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
      [orderTypeValid , orderValueValid],
      ['createdAt', orderValueValid],
      ['updatedAt', orderValueValid],
      ['title', orderValueValid],
    ],
    limit: limit || 10,
    offset: offset || 0,
  });
  return res.status(200).json({
    success: true,
    count: products.count,
    products: products.rows,

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
