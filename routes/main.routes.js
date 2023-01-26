const router = require('express').Router();

const Main = require('../views/Main');

router.get('/', (req, res) => {
  console.log(req.cookies);
  res.renderComponent(Main, { title: 'Main page' });
  // const main = React.createElement(Main, {
  //   title: 'Main page',
  // });
  // const html = ReactDOMServer.renderToStaticMarkup(main);
  // res.write('<!DOCTYPE html>');
  // res.end(html);
});

module.exports = router;
