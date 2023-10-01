//Paginacion
// la pagina predeterminada siempre va a ser la 1.
let pagina = 1;

// const btnTarjeta = document.getElementById('card-button');
// const cross = document.getElementById('container-cross');

// btnTarjeta.addEventListener('click', (id) => {
//         document.getElementById('container-tarjeta').classList.remove('inactive');
//         tarjeta.classList.add('scale-up-center');
//         masInfoTarjeta(id);
// });

// cross.addEventListener('click', () => {
//         document.getElementById('tarjeta').classList.remove('scale-up-center');
//         document.getElementById('container-tarjeta').classList.add('inactive');
// })

function MostrarTarjeta(id) {
        document.getElementById('container-tarjeta').classList.remove('inactive');
        masInfoTarjeta(id);
}

function CerrarTarjeta() {
        document.getElementById('container-tarjeta').classList.add('inactive');
}


const cross = document.getElementById('container-cross');
const masInfoTarjeta = async(movieID) => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=9c0180dfe7e273d27958b52d5512374b&language=es-AR`);

        // Validaciones segun el status de la respuesta segun sea codigo 200, 401 o 404.
        if (respuesta.status === 200) {
            const data = await respuesta.json();

            let generos = '';

            data.genres.forEach(genero => { 
                generos += `<h4>${genero.name}</h4>`
            });

            let pelicula = `
                <div id="tarjeta">
                <a href="https://image.tmdb.org/t/p/w500/${data.backdrop_path}" target="_blank"><img class="Poster-Peli" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="Poster Pelicula"></a>
                <div class="tarjeta__info">
                    <div class="container-cross" id="container-cross">
                        <div class="cross" onclick="CerrarTarjeta()"></div>
                    </div>
                    <h1 class="tarjeta__title">- ${data.title} - ${data.tagline}</h1>
                    <div class="details">
                        <div class="div-generos">
                            ${generos}
                        </div>
                        <p class="p-idiomas">Idioma: ${data.original_language}</p>
                        <p class="p-adult">Clasificacion para adultos: ${data.adult}</p>
                        <p class="p-trama">${data.overview}</p>
                        <div class="estreno">
                            <h3 class="estreno__title">Presupuesto: $${data.budget}</h3>
                            <h3 class="estreno__title">Ingresos: $${data.revenue}</h3>
                            <h3 class="estreno__title">Fecha de Estreno: ${data.release_date}</h3>
                            <h3 class="puntuacion__title">Popularidad: ${data.popularity}</h3>
                            <div class="homepage">HomePage: ${data.homepage}</div>
                        </div>
                    </div>
                </div>
            </div>
                `;
            document.getElementById('container-tarjeta').innerHTML = pelicula;
        } else if(respuesta.status === 401) {
            console.log(` Error ${respuesta.status}, KEY_API incorrecta o mal escrita`);
        } else if(respuesta.status === 404) {
            console.log(`Error ${respuesta.status}, La pelicula que seleccionada no existe`);
        }
    } catch (error) {
        console.log(error);
    }
} 



// pasamos a realizar el recorrido de las paginas que nos da la API, hasta donde pude ver el maximo = 500.
const paginacion = (funcion_parameter) => {
    const divPaginacion = document.getElementById('paginacion');
    divPaginacion.classList.remove('inactive');
    const btnAnterior = document.getElementById('btn-Anterior');
    const btnSiguiente = document.getElementById('btn-Siguiente');
    
    btnSiguiente.addEventListener('click', () => {
        if (pagina < 500) {
            pagina += 1;
            funcion_parameter();
        }
    })
    
    btnAnterior.addEventListener('click', () => {
        if (pagina > 1) {
        pagina -= 1;
        funcion_parameter();
        }
    })
}

//Lista de peliculas que se estrenaran proximamente al cargar la pagina;
const Proximamente = async() => {

    try{
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=9c0180dfe7e273d27958b52d5512374b&language=es-AR');

        // Validaciones segun el status de la respuesta segun sea codigo 200, 401 o 404.
        if (respuesta.status === 200) {
            const data = await respuesta.json();



            let peliculas = '';

            //diseñar carrusel =>
            data.results.forEach(pelicula => {
                peliculas += `
                    <p><img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" onclick="MostrarTarjeta(${pelicula.id})"></p>
                `;
            });
            document.getElementById('carrusel').innerHTML = peliculas;
        } else if(respuesta.status === 401) {
            console.log(` Error ${respuesta.status}, KEY_API incorrecta o mal escrita`);
        } else if(respuesta.status === 404) {
            console.log(`Error ${respuesta.status}, La pelicula que seleccionada no existe`);
        }
    } catch (error){
        console.log(error);
    }
}

// Lista de Peliculas Populares en el boton 'Populares';
const cargarPeliculasMasPopulares = async() => {
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9c0180dfe7e273d27958b52d5512374b&language=es-AR&page=${pagina}`);

        // Validaciones segun el status de la respuesta segun sea codigo 200, 401 o 404.
        if (respuesta.status === 200) {
            const data = await respuesta.json();

            let peliculas = '';

            data.results.forEach(pelicula => {
                peliculas += `
                <div class="card">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <button class="card-button" id="card-button" onclick="MostrarTarjeta(${pelicula.id})">More info</button>
                    <h1 class="titulo__pelicula">${pelicula.title}</h1>
                </div>
                `;
            });
            paginacion(cargarPeliculasMasPopulares);
            document.getElementById('container-movies').innerHTML = peliculas;
        } else if(respuesta.status === 401) {
            console.log(` Error ${respuesta.status}, KEY_API incorrecta o mal escrita`);
        } else if(respuesta.status === 404) {
            console.log(`Error ${respuesta.status}, La pelicula que seleccionada no existe`);
        }
    } catch (error){
        console.log(error);
    }
}



// Lista de Peliculas en Cartelera con el Boton de 'Cartelera';
const peliculasEnCartelera = async() => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=9c0180dfe7e273d27958b52d5512374b&language=es-AR&page=${pagina}`);

        // Validaciones segun el status de la respuesta segun sea codigo 200, 401 o 404.
        if (respuesta.status === 200) {
            const data = await respuesta.json();

            let peliculas = '';

            data.results.forEach(pelicula => {
                peliculas += `
                <div class="card">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <button class="card-button" id="card-button" onclick="MostrarTarjeta(${pelicula.id})">More info</button>
                    <h1 class="titulo__pelicula">${pelicula.title}</h1>
                </div>
                `;
            });
            paginacion(peliculasEnCartelera);
            document.getElementById('container-movies').innerHTML = peliculas;
        } else if(respuesta.status === 401) {
            console.log(` Error ${respuesta.status}, KEY_API incorrecta o mal escrita`);
        } else if(respuesta.status === 404) {
            console.log(`Error ${respuesta.status}, La pelicula que seleccionada no existe`);
        }
    } catch (error) {
        console.log(error);
    }
}

// ---------------------------------------
// Buscador de Peliculas segun el Titulo de la misma;
const btnBuscar = document.getElementById('btnSearch');
const query = document.getElementById('search-input');

const buscarPeliculaPorTitulo = async() => {
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query.value}?&api_key=9c0180dfe7e273d27958b52d5512374b&language=es-AR`)

        // Validaciones segun el status de la respuesta segun sea codigo 200, 401 o 404.
        if (respuesta.status === 200) {
            const data = await respuesta.json();

            let peliculas = '';
            data.results.forEach( pelicula => {
                    peliculas += `
                        <div class="card">
                            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                            <button class="card-button" id="card-button" onclick="MostrarTarjeta(${pelicula.id})">More info</button>
                            <h1 class="titulo__pelicula">${pelicula.title}</h1>
                        </div>
                    `;                
            });
            document.getElementById('container-movies').innerHTML = peliculas;
            input.value = '';
        } else if(respuesta.status === 401) {
            console.log(` Error ${respuesta.status}, KEY_API incorrecta o mal escrita`);
        } else if(respuesta.status === 404) {
            console.log(`Error ${respuesta.status}, La pelicula seleccionada no existe`);
        }
    } catch (error){
        console.log(error);
    }
}

// Buscar al apretar ENTER en el input;
const buscarPelisPorTituloEnter = async(e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        try{
            const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query.value}?&api_key=9c0180dfe7e273d27958b52d5512374b&language=es-AR`)
    
            // Validaciones segun el status de la respuesta segun sea codigo 200, 401 o 404.
            if (respuesta.status === 200) {
                const data = await respuesta.json();
    
                let peliculas = '';
                data.results.forEach( pelicula => {
                        peliculas += `
                            <div class="card">
                                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                                <button class="card-button" id="card-button" onclick="MostrarTarjeta(${pelicula.id})">More info</button>
                                <h1 class="titulo__pelicula">${pelicula.title}</h1>
                            </div>
                        `;                
                });
                document.getElementById('container-movies').innerHTML = peliculas;
                query.value = '';
            } else if(respuesta.status === 401) {
                console.log(` Error ${respuesta.status}, KEY_API incorrecta o mal escrita`);
            } else if(respuesta.status === 404) {
                console.log(`Error ${respuesta.status}, La pelicula seleccionada no existe`);
            }
        } catch (error){
            console.log(error);
        }
    }
}

window.addEventListener('load', Proximamente);
btnBuscar.addEventListener('click',buscarPeliculaPorTitulo);
query.addEventListener('keydown',buscarPelisPorTituloEnter);
// -----------------------------------------
