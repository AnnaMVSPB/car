const router = require('express').Router();
const Cars = require('../views/Cars');
const { Car_card } = require('../db/models');
const Car = require('../views/Car');

router.get('/', async (req, res) => {
  try {
    const carsDB = await Car_card.findAll();
    res.renderComponent(Cars, { title: 'Cars page', carsDB });
    // const cars = React.createElement(Cars, {
    //   title: 'Cars page',
    //   carsDB,
    // });
    // const html = ReactDOMServer.renderToStaticMarkup(cars);
    // res.write('<!DOCTYPE html>');
    // res.end(html);
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.post('/', async (req, res) => {
  const {
    name, img, year, description,
  } = req.body;
  if (name && img && year && description) {
    const newCar = await Car_card.create({
      name, img, year, description, user_id: req.session.userid,
    });
    // res.json(newCar);
    res.renderComponent(Car, { car: newCar }, { doctype: false });
  }
});
router.delete('/:idCar', async (req, res) => {
  const { idCar } = req.params;
  const { userid } = req.session;
  const car = await Car_card.findOne({ where: { id: idCar } });
  if (car.user_id === userid) {
    const del = await Car_card.destroy({ where: { id: idCar } });
    res.json({ key: del });
  } else {
    res.json({ key: 'не удалили' });
  }
});
module.exports = router;
