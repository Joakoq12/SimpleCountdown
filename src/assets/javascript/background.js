
import img1 from "../img/pexels-mikhail-nilov-8430372.jpg";

import img2 from "../img/pexels-pixabay-460672.jpg";

import img3 from "../img/su-san-lee-E_eWwM29wfU-unsplash.jpg";


function background1() {

    document.querySelector('body').style.background = `url(${img1}) center center / cover`;

}

function background2() {

    document.querySelector('body').style.background = `url(${img2}) center center / cover`;

}

function background3() {

    document.querySelector('body').style.background = `url(${img3}) center center / cover`;

}



document.getElementById('one').addEventListener('click', background1);

document.getElementById('two').addEventListener('click', background2);

document.getElementById('three').addEventListener('click', background3);