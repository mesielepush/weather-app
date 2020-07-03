import '../styles/style.scss';
import Central from './central'
import dataHandler from './dataHandler'

city.addEventListener('keydown',function() {
    if(event.keyCode == 13) {
        Central().celsius(city.value);
    }
})
  
  
  


