const scrollContainer = document.getElementById('carrusel');
const btnDerecho = document.getElementById('flecha-der');
const btnIzquierdo = document.getElementById('flecha-izq');


scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})

btnDerecho.addEventListener('click', () => {
    scrollContainer.scrollLeft += 900;
})

btnIzquierdo.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 900;
})