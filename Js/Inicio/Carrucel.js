// --------------------- VARIABLES GLOBALES ---------------------
let sliderIntervalAvisos = null;
let sliderIntervalCarreras = null;


// --------------------- SLIDER AVISOS ---------------------
function startSliderIntervalAvisos() {
    if (sliderIntervalAvisos) clearInterval(sliderIntervalAvisos);
    sliderIntervalAvisos = setInterval(() => fntExecuteSlide("next"), 3000);
}

if (document.querySelector('#container-slider')) {
    startSliderIntervalAvisos();
}

if (document.querySelector('.listslider')) {
    let links = document.querySelectorAll(".listslider li a");
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let item = this.getAttribute('itlist');
            let arrItem = item.split("_");
            fntExecuteSlide(parseInt(arrItem[1]));
            startSliderIntervalAvisos(); // REINICIAR INTERVALO
        });
    });
}

function fntExecuteSlide(side) {
    const parentTarget = document.getElementById('slider');
    const slides = parentTarget.getElementsByTagName('li');
    const dots = document.querySelectorAll('.listslider li a');

    let currentIndex = -1;

    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
            currentIndex = i;
            break;
        }
    }

    if (currentIndex === -1) currentIndex = 0;

    let nextIndex;

    if (side === 'prev') {
        nextIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    } else if (side === 'next') {
        nextIndex = (currentIndex + 1) % slides.length;
    } else {
        nextIndex = parseInt(side);
    }

    slides[currentIndex].classList.remove('active');
    slides[currentIndex].style.opacity = 0;
    slides[currentIndex].style.zIndex = 0;
    dots[currentIndex].classList.remove("item-select-slid");

    slides[nextIndex].classList.add('active');
    slides[nextIndex].style.opacity = 1;
    slides[nextIndex].style.zIndex = 1;
    dots[nextIndex].classList.add("item-select-slid");
}

//------------------------------ SLIDER CARRERAS -------------------------
if (document.querySelector('#container-slider-carreras')) {
    setInterval(() => fntExecuteSlideCarreras("next"), 3000);
}

if (document.querySelector('.listslider-carreras')) {
    let link = document.querySelectorAll(".listslider-carreras li a");
    link.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let item = this.getAttribute('itlist');
            let arrItem = item.split("_");
            fntExecuteSlideCarreras(parseInt(arrItem[1]));
            return false;
        });
    });
}

function fntExecuteSlideCarreras(side) {
    let parentTarget = document.getElementById('slider-carreras');
    let elements = parentTarget.getElementsByTagName('li');
    let curElement, nextElement;

    for (let i = 0; i < elements.length; i++) {
        if (window.getComputedStyle(elements[i]).opacity == "1") {
            curElement = i;
            break;
        }
    }

    if (side === 'prev') {
        nextElement = (curElement === 0) ? elements.length - 1 : curElement - 1;
    } else if (side === 'next') {
        nextElement = (curElement + 1) % elements.length;
    } else {
        nextElement = side;
        side = (curElement > nextElement) ? 'prev' : 'next';
    }

    let elementSel = document.getElementsByClassName("listslider-carreras")[0].getElementsByTagName("a");
    elementSel[curElement].classList.remove("item-select-slid");
    elementSel[nextElement].classList.add("item-select-slid");

    elements[curElement].style.opacity = 0;
    elements[curElement].style.zIndex = 0;
    elements[nextElement].style.opacity = 1;
    elements[nextElement].style.zIndex = 1;
}


//------------------------------ SLIDER DIPLOMADOS -------------------------
if (document.querySelector('#container-slider-diplomados')) {
    setInterval(() => fntExecuteSlideDiplomados("next"), 3000); // Se ejecuta la función cada 3 segundos
}

// Si existe la lista de puntos de navegación de diplomados, se configura el evento para cada punto
if (document.querySelector('.listslider-diplomados')) {
    let link = document.querySelectorAll(".listslider-diplomados li a");
    link.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que la acción por defecto del enlace ocurra
            let item = this.getAttribute('itlist'); // Obtiene el atributo 'itlist' del enlace
            let arrItem = item.split("_"); // Divide el valor del atributo en un array
            fntExecuteSlideDiplomados(parseInt(arrItem[1])); // Ejecuta la función para cambiar de slide según el número
            return false;
        });
    });
}

// Función principal para cambiar el slide en el carrusel de diplomados
function fntExecuteSlideDiplomados(side) {
    let parentTarget = document.getElementById('slider-diplomados'); // Contenedor principal de las imágenes
    let elements = parentTarget.getElementsByTagName('li'); // Lista de los elementos dentro del slider
    let curElement, nextElement;

    // Encontrar el elemento actualmente visible
    for (let i = 0; i < elements.length; i++) {
        if (window.getComputedStyle(elements[i]).opacity == "1") {
            curElement = i;
            break;
        }
    }

    // Determinar el siguiente elemento según el lado (anterior o siguiente)
    if (side === 'prev') {
        nextElement = (curElement === 0) ? elements.length - 1 : curElement - 1;
    } else if (side === 'next') {
        nextElement = (curElement + 1) % elements.length;
    } else {
        nextElement = side;
        side = (curElement > nextElement) ? 'prev' : 'next';
    }

    // Cambiar la clase del punto de navegación para reflejar el cambio de slide
    let elementSel = document.getElementsByClassName("listslider-diplomados")[0].getElementsByTagName("a");
    elementSel[curElement].classList.remove("item-select-slid");
    elementSel[nextElement].classList.add("item-select-slid");

    // Cambiar la opacidad y z-index de los elementos para mostrar el siguiente slide
    elements[curElement].style.opacity = 0;
    elements[curElement].style.zIndex = 0;
    elements[nextElement].style.opacity = 1;
    elements[nextElement].style.zIndex = 1;
}