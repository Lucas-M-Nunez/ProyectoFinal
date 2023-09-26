const linkAlumnos = document.getElementById('link-alumnos');
const linkPelis = document.getElementById('link-peliculas');
const linkInicio = document.getElementById('link-inicio');
const linkChatBot = document.getElementById('link-chatbot');
const linkProyectoFinal = document.getElementById('link-PF');

linkAlumnos.addEventListener('click', () => {
    document.getElementById('alumnos').classList.remove('inactive');
    document.getElementById('peliculas').classList.add('inactive');
    document.getElementById('inicio').classList.add('inactive');
    document.getElementById('FinalProject').classList.add('inactive');
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('chatbot').classList.add('inactive');
    document.getElementById('burguer-menu').classList.remove('burguer-menu');
});

linkPelis.addEventListener('click', () => {
    document.getElementById('alumnos').classList.add('inactive');
    document.getElementById('inicio').classList.add('inactive');
    document.getElementById('FinalProject').classList.add('inactive');
    document.getElementById('peliculas').classList.remove('inactive');
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('chatbot').classList.add('inactive');
    document.getElementById('burguer-menu').classList.remove('burguer-menu');
})

linkInicio.addEventListener('click', () => {
    document.getElementById('alumnos').classList.add('inactive');
    document.getElementById('peliculas').classList.add('inactive');
    document.getElementById('FinalProject').classList.add('inactive');
    document.getElementById('inicio').classList.remove('inactive');
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('chatbot').classList.add('inactive');
    document.getElementById('burguer-menu').classList.remove('burguer-menu');
})

linkChatBot.addEventListener('click', () => {
    document.getElementById('alumnos').classList.add('inactive');
    document.getElementById('peliculas').classList.add('inactive');
    document.getElementById('inicio').classList.add('inactive');
    document.getElementById('FinalProject').classList.add('inactive');
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('chatbot').classList.remove('inactive');
    document.getElementById('burguer-menu').classList.remove('burguer-menu');
})

linkProyectoFinal.addEventListener('click', () => {
    document.getElementById('alumnos').classList.add('inactive');
    document.getElementById('peliculas').classList.add('inactive');
    document.getElementById('inicio').classList.add('inactive');
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('chatbot').classList.add('inactive');
    document.getElementById('FinalProject').classList.remove('inactive');
    document.getElementById('burguer-menu').classList.remove('burguer-menu');
})

//efecto de la hamburguesa Sidebar => burguer-menu 
const burger = document.getElementById('burguer-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('burguer-menu');
})
//------------------------------------------------