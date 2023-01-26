const React = require('react');

function AddCar() {
  return (
    <div className='cont_form'>
      <form action="/cars" method="POST" id="addcar" className='form_add'>
      <label > Name</label>
        <input name='name' type='text' required/>
        <label > Img</label>
        <input name='img'  type='text' required/>
        <label > Year</label>
        <input name='year'  type='text' required/>
        <label > Description</label>
        <input name='description'  type='text' required/>
        <button  type='submit'>Добавить карташку</button>
      </form>
    </div>
  );
}

module.exports = AddCar;
