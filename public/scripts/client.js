document.querySelector('#addcar').addEventListener('submit', async (e) => {
  e.preventDefault();
  const {
    name, img, year, description, method, action,
  } = e.target;
  const res = await fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name.value,
      img: img.value,
      year: year.value,
      description: description.value,
    }),
  });
  //   const data = await res.json();
  //   const carHtml = `
  //  <div className="car__card__container">
  //  <div className="car__container">
  //    <h3>${data.name}</h3>
  //    <h6>${data.year}</h6>
  //    <img src=${data.img} alt="car" />
  //    <p>${data.description}</p>
  //  </div>
  // </div>
  //  `;
  const carHtml = await res.text();
  document.querySelector('#car_list').insertAdjacentHTML('beforeend', carHtml);
});

document.querySelector('#car_list').addEventListener('click', async ({ target }) => {
  if (target.classList.contains('prodano')) {
    const res = await fetch(`/cars/${target.dataset.id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data.key > 0) {
      target.closest('.car__card__container').remove();
    }
  }
});
