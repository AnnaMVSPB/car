const React = require('react');

function Navigation({ user}) {
  console.log(user,'=======')
  return (
    <div className="nav__container">
      <img
        className="nav__logo"
        src="https://avatars.dzeninfra.ru/get-zen_doc/1936915/pub_5e3e964ec0c2cd2f40ec7662_5e3e96a7d877b06d5336800d/scale_1200"
        alt="logo"
      />
      <ul className="nav__items" style={{ display: 'flex', listStyle: 'none' }}>
        <li className="nav__item">
          <a href="/">Main</a>
        </li>
        <li className="nav__item">
          <a href="/cars">Cars</a>
        </li>
        <li className="nav__item">
          <a href="/users">Users</a>
        </li>
       { !user ? 
       <><li className="nav__item">
          <a href="/auth/reg">Rega</a>
        </li>
        <li className="nav__item">
          <a href="/auth/log">Loga</a>
        </li></>
        :
        <li className="nav__item">
          <a href="/auth/logout">Logout</a>
        </li>}
      </ul>
    </div>
  );
}
module.exports = Navigation;
