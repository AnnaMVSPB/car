const React = require('react');
const Layout = require('./Layout');

function Users({ title, usersDB,user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Users page</h1>
      <ul>
        {usersDB.map((user) => (
          <li key={user.id}>
            <a href={`/users/${user.id}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

module.exports = Users;
