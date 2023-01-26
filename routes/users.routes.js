const router = require('express').Router();
const Users = require('../views/Users');
const { User, Car_card } = require('../db/models');
const UserInfo = require('../views/UserInfo');

router.get('/', async (req, res) => {
  try {
    const usersDB = await User.findAll();
    res.renderComponent(Users, { title: 'Users page', usersDB });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const userInfo = await User.findOne({
    where: { id: userId },
    include: { model: Car_card, key: 'user_id' },
  });
  res.renderComponent(UserInfo, { title: 'User info', userInfo });
});

router.post('/', (req, res) => {
  res.end();
});

module.exports = router;
