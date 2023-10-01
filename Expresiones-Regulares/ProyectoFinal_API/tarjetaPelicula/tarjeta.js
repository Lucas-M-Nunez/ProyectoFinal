function MostrarTarjeta() {
    const btnTarjeta = document.getElementById('card-button');
    btnTarjeta.addEventListener('click',() => {
        document.getElementById('container-tarjeta').classList.remove('inactive');
        tarjeta.classList.add('scale-up-center');
    });
}

function CerrarTarjeta() {
    const cross = document.getElementById('container-cross');
    cross.addEventListener('click', () => {
        document.getElementById('tarjeta').classList.remove('scale-up-center');
        document.getElementById('container-tarjeta').classList.add('inactive');
    });
}