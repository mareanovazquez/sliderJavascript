
let slide = document.getElementsByClassName('slide');

let slider = document.getElementById('slider');

const btnAnterior = document.getElementById('btnAnterior');

const btnSiguiente = document.getElementById('btnSiguiente');

// CAMBIAR EL ORDEN DE LOS ELEMENTOS
slider.insertBefore(slide[4], slide[0])


//CAMBIAR LA POSICIÓN DEL SLIDER 

function moverDerecha() {

    slider.animate({
        marginLeft: ['-45%', '-106%']
    }, 700)

    setTimeout('slider.lastElementChild.insertAdjacentElement("afterend", slider.firstElementChild);', 695)

    slider.style.marginLeft = '-45%'

    resetInterval()
}

btnSiguiente.addEventListener('click', moverDerecha);

//FUNCION MOVER IZQUIERDA

function moverIzquierda() {
    slider.animate({
        marginLeft: ['-105.6%', '-45%']
    }, 700)

    slider.insertBefore(slide[4], slide[0])
    slider.style.marginLeft = '-105,6%'

    resetInterval()

}

btnAnterior.addEventListener('click', moverIzquierda)

//FUNCION MOVIMIENTO AUTOMÁTICO
let intervalo = setInterval(moverDerecha, 5000)

function resetInterval() {
    clearInterval(intervalo);
    intervalo = setInterval(moverDerecha, 5000)

}   