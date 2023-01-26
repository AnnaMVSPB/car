const React = require('react');

function Car({ car,user }) {
  return (
    <div className="car__card__container">
      <div className="car__container">
        <h3>{car.name}</h3>
        <h6>{car.year}</h6>
        <img style={{ width: '250px' }} src={car.img} alt="car" />
        <p>{car.description}</p>
{   (user &&  user.id === car.user_id ) &&  <button type='button' className='prodano' data-id={car.id}>продал</button>}
      </div>
    </div>
  );
}
module.exports = Car;
