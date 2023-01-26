const router = require('express').Router();
const bcrypt = require('bcrypt');
const Log = require('../views/Log');
const Reg = require('../views/Reg');
const { User } = require('../db/models');

router.get('/log', (req, res) => {
  res.renderComponent(Log, { title: 'Log form' });
});

router.get('/reg', (req, res) => {
  res.renderComponent(Reg);
});

router.post('/reg', async (req, res) => {
  try {
    const { name, password } = req.body;
    if (name && password) {
      const user = await User.findOne({ where: { name } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, password: hash });
        req.session.userid = newUser.id;
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'Такой пользователь уже есть!' });
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/log', async (req, res) => {
  try {
    const { name, password } = req.body;
    if (name && password) {
      const user = await User.findOne({ where: { name } });
      const isSame = await bcrypt.compare(req.body.password, user.password);
      if (user && isSame) {
        req.session.userid = user.id;
        
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'Неверный логин или пароль' });
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
});
router.get('/logout', (req, res) => {
  // удаление сессии на сервере
  res.app.locals = '';
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res.clearCookie('user_sid'); // серверное удаление куки по имени
    res.redirect('/');
  });
});

module.exports = router;
