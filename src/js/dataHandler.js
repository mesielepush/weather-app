import render from './render';

const dataHandler = (data) => {
  const city = document.getElementById('city');
  const selector = document.getElementById('selector');


  selector.addEventListener('change', (event) => {
    const value = document.getElementById('cities').innerText;
    if (!event.target.checked) {
      const toRender = data.celsius(value);
      const wind = document.getElementById('wind');
      wind.innerText = 'mt/s';
      render(toRender);
    } else {
      const toRender = data.imperial(value);
      const wind = document.getElementById('wind');
      wind.innerText = 'miles/s';
      render(toRender);
    }
  });


  city.addEventListener('keydown', () => {
    // eslint-disable-next-line no-restricted-globals
    if (event.keyCode === 13) {
      const { value } = city;
      city.value = '';
      if (!selector.checked) {
        const wind = document.getElementById('wind');
        wind.innerText = 'mt/s';
        const toRender = data.celsius(value);
        render(toRender);
      } else {
        const toRender = data.imperial(value);
        const wind = document.getElementById('wind');
        wind.innerText = 'miles/h';
        render(toRender);
      }
    }
  });
};

export default dataHandler;