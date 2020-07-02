import '../styles/style.scss';
import Central from './central'
import dataHandler from './dataHandler'

const data = Central();
const render = dataHandler(data)