const React = require('react');
const Layout = require('./Layout');

function UserInfo({ title, user,userInfo }) {
  return (
    <Layout title={title} user={user}>
      <div>
        <h3>{userInfo.name}</h3>
        <p>{userInfo.password}</p>
        {user.Car_cards.map((car) => (
          <p key={car.id}>{car.name}</p>
        ))}
      </div>
    </Layout>
  );
}

module.exports = UserInfo;
