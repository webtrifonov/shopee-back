const router = require('express').Router();
const {Order, Product} = require('../../models');


router.get('/', async (req, res, next) => {
  delete req.user.dataValues.password;
  res.status(200).json({ success: true, user: req.user.dataValues});
});

router.get('/orders', async (req, res) => {
  const orders = await Order.findAll({
    where: {
      userId: req.user.dataValues.id,

    },
    include: [
      {
        model: Product,
        as: 'products',
        attributes: ['id', 'title', 'image'],
      }
    ],
  });

  res.json({
    success: true,
    orders,
  })
});
module.exports = router;
