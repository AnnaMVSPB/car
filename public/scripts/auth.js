document.querySelector('#reg_form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const {
    name, password, action, method,
  } = e.target;
  const res = await fetch(action, {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      name: name.value,
      password: password.value,
    }),
  });
  const data = await res.json();
  if (data.message === 'ok') {
    window.location.assign('/');
  } else {
    document.querySelector('.message').innerHTML = data.message;
  }
});

document.querySelector('#log_form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const {
    name, password, action, method,
  } = e.target;
  const res = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      name: name.value,
      password: password.value,
    }),
  });
  const data = await res.json();
  if (data.message === 'ok') {
    window.location.assign('/');
  } else {
    document.querySelector('.message').innerHTML = data.message;
  }
});
