
exports.getMessages = async (req, res, next) => {
  try {
    const { limit, offset } = req.query;

    res.json({

    })
  } catch(error) {
    next(error);
  }
};
