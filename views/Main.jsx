const React = require('react');
const Layout = require('./Layout');

function Main({ title , user}) {
  console.log(user,'1')
  return (
    <Layout title={title} user={user}>
      <h1>Main page</h1>
    </Layout>
  );
}

module.exports = Main;
