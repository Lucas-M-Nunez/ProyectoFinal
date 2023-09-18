const linkAlumnos = document.getElementById('link-alumnos');
const linkPelis = document.getElementById('link-peliculas');
const linkInicio = document.getElementById('link-inicio');
const linkChatBot = document.getElementById('link-chatbot'); 

linkAlumnos.addEventListener('click', () => {
    document.getElementById('alumnos').classList.remove('inactive');
    document.getElementById('peliculas').classList.add('inactive');
    document.getElementById('inicio').classList.add('inactive');
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('chatbot').classList.add('inactive');
});

linkPelis.addEventListener('click', () => {
    document.getElementById('alumnos').classList.add('inactive');
    document.getElementById('inicio').classList.add('inactive');
    document.getElementById('peliculas').classList.remove('inactive');
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('chatbot').classList.add('inactive');
})

linkInicio.addEventListener('click', () => {
    document.getElementById('alumnos').classList.add('inactive');
    document.getElementById('peliculas').classList.add('inactive');
    document.getElementById('inicio').classList.remove('inactive');
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('chatbot').classList.add('inactive');
})

linkChatBot.addEventListener('click', () => {
    document.getElementById('alumnos').classList.add('inactive');
    document.getElementById('peliculas').classList.add('inactive');
    document.getElementById('inicio').classList.add('inactive');
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('chatbot').classList.remove('inactive');
})
