//-------------------------------------------------------------------NO MODIFICAR 👇-------------------------------------------------------------------//

const peliculas = [
  {
    titulo: "Titanic",
    año: 1997,
    produccion: "Estados Unidos",
    genero: "Drama",
    estreno: false,
    img: "./Metodos02/src/img/titanic.jpg",
  },
  {
    titulo: "Inception",
    año: 2010,
    produccion: "Estados Unidos",
    genero: "Ciencia ficción",
    estreno: false,
    img: "./Metodos02/src/img/Inception.jpg",
  },
  {
    titulo: "The 'odfather",
    año: 1972,
    produccion: "Estados Unidos",
    genero: "Crimen",
    estreno: false,
    img: "./Metodos02/src/img/thegodfather.jpg",
  },
  {
    titulo: "The Shawshank Redemption",
    año: 1994,
    produccion: "Estados Unidos",
    genero: "Drama",
    estreno: false,
    img: "./Metodos02/src/img/shawshank.jpg",
  },
  {
    titulo: "Oppenheimer",
    año: 2023,
    produccion: "Estados Unidos",
    genero: "Drama",
    estreno: true,
    img: "./Metodos02/src/img/oppenheimer.jpg",
  },
  {
    titulo: "My Adventures with Superman",
    año: 2023,
    produccion: "Estados Unidos",
    genero: "Acción",
    estreno: true,
    img: "./Metodos02/src/img/my_adventures_with_superman.jpg",
  },
  {
    titulo: "Black Widow",
    año: 2021,
    produccion: "Estados Unidos",
    genero: "Acción",
    estreno: false,
    img: "./Metodos02/src/img/5915477.jpg",
  },
  {
    titulo: "Hijack",
    año: 2023,
    produccion: "Reino Unido",
    genero: "Drama",
    estreno: true,
    img: "./Metodos02/src/img/hijack.jpg",
  },
  {
    titulo: "Barrabrava",
    año: 2023,
    produccion: "Argentina",
    genero: "Crimen",
    estreno: true,
    img: "./Metodos02/src/img/barrabrava_2023.jpg",
  },
  {
    titulo: "Spider-Man: No Way Home",
    año: 2021,
    produccion: "Estados Unidos",
    genero: "Acción",
    estreno: false,
    img: "./Metodos02/src/img/0243323.jpg",
  },
];

const pelis = document.querySelector(".peli"); // Obtenemos sección de pelis. donde se deben agregar las img de cada pelicula

//-------------------------------------------------------------------NO MODIFICAR 👆-------------------------------------------------------------------//

//BOTON TODOS => Debe devolver todas las portadas (img) de las peliculas que hay.
const allFilms = () => {
    pelis.innerHTML = '';
  peliculas.forEach((pelicula) => {
    let img = document.createElement("img");
    img.src = pelicula.img;
    pelis.appendChild(img);
  });
};

//BOTON ESTRENOS => Debe devolver las portadas (img) solo de las peliculas que esten en estreno 'estreno: true'
const estrenos = () => {
    pelis.innerHTML = '';
  peliculas.forEach((pelicula) => {
    if (pelicula.estreno === true) {
      let img = document.createElement("img");
      img.src = pelicula.img;
      pelis.appendChild(img);
    }
  });
};

//BOTON ACCION => Debe devolver solo aquellas peliculas que contengan como genero ‘Acción’.
const accion = () => {
    pelis.innerHTML = '';
  peliculas.forEach((pelicula) => {
    if (pelicula.genero === "Acción") {
      let img = document.createElement("img");
      img.src = pelicula.img;
      pelis.appendChild(img);
    }
  });
};

//BOTON DRAMA => Debe devolver solo aquellas peliculas que contengan como genero ‘Drama’.
const drama = () => {
    pelis.innerHTML = '';
  peliculas.forEach((pelicula) => {
    if (pelicula.genero === "Drama") {
      let img = document.createElement("img");
      img.src = pelicula.img;
      pelis.appendChild(img);
    }
  });
};

//BOTON CRIMEN => Debe devolver solo aquellas peliculas que contengan como genero ‘Crimen’.
const crimen = () => {
    pelis.innerHTML = '';
    peliculas.forEach((pelicula) => {
        if (pelicula.genero === "Crimen") {
          let img = document.createElement("img");
          img.src = pelicula.img;
          pelis.appendChild(img);
        }
      });
};

//BOTON TODOS => debe devolver aquellas peliculas que NO estén dentro de los generos anteriores.
const otros = () => {
    pelis.innerHTML = '';

    peliculas.forEach(pelicula => {
        if (pelicula.genero !== "Crimen" && pelicula.genero !== "Drama" && pelicula.genero !== "Acción"){
            let img = document.createElement("img");
            img.src = pelicula.img;
            pelis.appendChild(img);
        }
    })
};
