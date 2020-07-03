import renderCelsius from './renderCelsius'
import renderImperial from './renderImperial'

const dataHandler = (data)=>{
    const city       = document.getElementById('city');
    const selector   = document.getElementById('selector');
    

    selector.addEventListener('change', (event) => {
        const value = document.getElementById('cities').innerText;
        if (!event.target.checked) {
            const toRender = data.celsius(value)
                    renderCelsius(toRender)
        }else{
            const toRender = data.imperial(value)
                renderCelsius(toRender)

        }
          });
        



    city.addEventListener('keydown',function() {
        if(event.keyCode == 13) {
            const {value} = city;
            city.value = ''
            if (!selector.checked) {
                    const toRender = data.celsius(value)
                    renderCelsius(toRender)
                    
            } else{
                const toRender = data.imperial(value)
                renderCelsius(toRender)
                    
            }

        }
    })
  
  
  

    

}

export default dataHandler