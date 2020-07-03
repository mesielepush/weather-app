import '../styles/style.scss';
import Central from './central'
import dataHandler from './dataHandler'

const data = Central();
const dom = dataHandler(data);
data.celsius('oaxaca').then((response) => {
  ;
});




