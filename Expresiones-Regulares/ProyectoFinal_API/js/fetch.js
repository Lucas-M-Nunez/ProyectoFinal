//Paginacion
// la pagina predeterminada siempre va a ser la 1.
let pagina = 1;



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
                    <p><img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></p>
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
                    <button class="card-button">More info</button>
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
                    <button class="card-button" id="card-button">More info</button>
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
                            <button class="card-button">More info</button>
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
                                <button class="card-button">More info</button>
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
