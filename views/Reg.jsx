const React = require('react');
const Layout = require('./Layout');

module.exports = function Reg({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <h2>Reg</h2>
      <form action="/auth/reg" method="post" id="reg_form">
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
          Reg user
        </button>
        <p className="message" />
      </form>
    </Layout>
  );
};
