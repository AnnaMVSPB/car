const React = require('react');
const AddCar = require('./AddCar');
const Car = require('./Car');
const Layout = require('./Layout');

function Cars({ title, carsDB,user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Cars page</h1>
      <AddCar/>
      <div className='cont_car' id='car_list'>
      {carsDB.map((car) => (
        <Car key={car.id} car={car} user={user}/>
      ))}
      </div>
    </Layout>
  );
}

module.exports = Cars;
