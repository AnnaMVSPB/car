const React = require('react');
const Layout = require('./Layout');

module.exports = function Log({ title ,user}) {
  return (
    <Layout title={title} user={user}>
      <h2>Login</h2>
      <form action="/auth/log" method="post" id="log_form">
        <div className="mb-3">
          <label className="form-label">
            Name
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </label>
        </div>

        <button type="submit" className="btn btn-danger">
          Log user
        </button>
      </form>
    </Layout>
  );
};
