const router = require('express').Router();
const {User} = require('../../models');
const utils = require('../../utils/auth');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

// Validate an existing user and issue a JWT
router.post('/login', async (req, res, next) => {
  const {email, password} = req.body;

  try {
    const user = await User.findOne({where: {email} });
    if (!user) {
      return res.json({ success: false, message: "Could not find user" });
    }
    // Function defined at bottom of app.js
    // const isValid = req.body.password === user.dataValues.password; //utils.validPassword(req.body.password, user.hash, user.salt);
    const isValid = bcrypt.compareSync(password, user.dataValues.password);

    if (isValid) {
      const tokenObject = utils.issueJWT(user);
      return res.json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires });
    } else {
      return res.json({ success: false, message: "You entered the wrong password" });
    }
  } catch(error) {
    next(error);
  }
});

// Register a new user
router.post('/register', async (req, res, next) => {
  const {email, password} = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const newUser = await User.create({id: uuidv4(), email, password: hashedPassword});
    const tokenObject = utils.issueJWT(newUser);
    return res.json({
      success: true,
      token: tokenObject.token,
      expiresIn: tokenObject.expires,
      user: newUser
    })
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    })
  }
});

module.exports = router;
