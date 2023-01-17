const date = document.getElementById('myDate'); // seleccionamos input y demo
const demo = document.getElementById('demo');
let timer; // el timer lo declaramos fuera de la funcion para que cada vez que llamamos a dicha funcion este timer se sobreescriba constantemente.
// esto evita que se nos creen varios timers cada vez que cambiamos la fecha

function countdown(){
  let dateControl = date.value;
  timer = setInterval(() => { // redefinimos el timer
    let distance = new Date(dateControl).getTime() - new Date().getTime(); // esto estaba bien solo lo resumi intentando usar menos lineas de codigo
    demo.textContent = // lo correcto seria textContent, innerHTML se usa para agregar etiquetas
     `${Math.floor(distance / (1000 * 60 * 60 * 24))} Days
      ${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}:
      ${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}:
      ${Math.floor((distance % (1000 * 60)) / 1000)}`
    if (distance < 0) { // al terminar la cuenta atras:
      clearInterval(timer); // limpiamos timer
      demo.textContent = 'READY'; // mensaje de finalizacion
    }
  }, 1000);
}

date.addEventListener("change",() => { // al cambiar el input de la fecha:
  clearInterval(timer) // limpiamos el timer
  demo.textContent = 'UPDATING COUNTDOWN...' // mensaje de transicion
  countdown(); // llamamos a la funcion contdown, que nos creara otro timer con la nueva fecha, sobreescribiendo a la anterior
})

// apenas se carga la pagina:
demo.textContent = 'STARTING...' 
countdown(); 

var myDate = document.querySelector('#myDate');

if(myDate.getAttribute('value') != '2023-10-15T12:00'){
    myDate.style.bottom = '100%';
}

function background1() {
  document.querySelector('body').style.background = "url('./assets/img/su-san-lee-E_eWwM29wfU-unsplash.jpg') center center / cover";
}
function background2() {
  document.querySelector('body').style.background = "url('./assets/img/pexels-mikhail-nilov-8430372.jpg') center center / cover";
}
function background3() {
  document.querySelector('body').style.background = "url('./assets/img/pexels-pixabay-460672.jpg') center center / cover";
}