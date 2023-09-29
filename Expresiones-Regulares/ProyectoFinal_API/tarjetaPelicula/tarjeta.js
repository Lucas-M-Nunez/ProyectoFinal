const btn = document.getElementById('card-button');
const cross = document.getElementById('container-cross');
const tarjeta = document.getElementById('tarjeta');

btn.addEventListener('click',() => {
    document.getElementById('container-tarjeta').classList.remove('inactive');
    tarjeta.classList.add('scale-up-center');
});

cross.addEventListener('click', () => {
    tarjeta.classList.remove('scale-up-center');
    document.getElementById('container-tarjeta').classList.add('inactive');
})

