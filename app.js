require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const ssr = require('./middleware/ssr');
const {
  cookiesCleaner, resLocals, getUser,
} = require('./middleware/auth');
const sessionConfig = require('./config/session');

const app = express();

const PORT = process.env.PORT || 4000;
const usersRoute = require('./routes/users.routes');
const carsRoute = require('./routes/cars.routes');
const mainRoute = require('./routes/main.routes');
const authRoute = require('./routes/auth.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ssr);
app.use(cookieParser());
app.use(session(sessionConfig));
app.use(cookiesCleaner);
app.use(resLocals);
app.use(getUser);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoute);
app.use('/users', usersRoute);
app.use('/cars', carsRoute);
app.use('/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Сервер запущу на ${PORT}щу`);
});
