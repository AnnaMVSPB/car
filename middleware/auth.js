const { User } = require('../db/models');

// промежуточная функция для очистки куки при истёкшей сессии на сервере
const cookiesCleaner = (req, res, next) => {
  if (req.cookies.user_sid && !req.session.userid) {
    res.clearCookie('user_sid');
    res.redirect('/');
  } else {
    next();
  }
};


// промежуточная функция наполнения локальных переменных
const resLocals = (req, res, next) => {
  if (req.session.userid) {
    res.locals.userId = req.session.userid;
  }

  next();
};

// промежуточная функция поиска пользователя в БД по ID из сессии
const getUser = async (req, res, next) => {
  if (req.session.userid) {
    res.app.locals.user = await User.findByPk(Number(req.session.userid), { raw: true });
  }

  next();
};

module.exports = {
  cookiesCleaner, resLocals, getUser,
};
