const input = document.querySelector('#valor-input')
const div = document.querySelector('#contenedor')
const btn = document.querySelector('#btn-send')
const btnlinkChatbot = document.getElementById('link-chatbot');

btnlinkChatbot.addEventListener('click', (e) => {
    e.preventDefault();
    let texto = `¡Hola ${user.nombre}!, Mucho gusto, mi nombre es 'F.R.I.D.A.Y.', si Viernes en inglés 😊 y soy el ayudante virtual creado por Lucas para acompañarte, que tengas un buen día!'`;
    IntroRespBot(texto);
    texto = `Lo que estan observando es un proyecto integrador final de todo lo que se fue aprendiendo y estudiando en el curso 'Desarrollador Javascript' en Casa del Futuro.`
    IntroRespBot(texto);
    texto = `Nuestro profesor Leo Avila nos ayudo bastante a entender sobre el poderoso lenguaje que puede llegar a ser Javascript, desde realizar 40 mil ejercicios de lógica 😂 hasta consumir una API y darle vida a una pagina web completa como proyecto final.`
    IntroRespBot(texto);
    texto = `
        estos son algunas preguntas que tengo para poder contestar:
        (si tipeas esto podre contestarte)

        - hola
        - estudios
        - tecnologias
        - desafios
        - secciones
    `
    IntroRespBot(texto);
})




const enviarMsj = () =>{
    let text = input.value
    let h1 = document.createElement('p')
    h1.classList.add('text-final')
    h1.textContent = 'tu: '+text
    div.appendChild(h1)
    input.value = ''
    checkMsj(text)
}

const enviarMsjEnter = (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
        let text = input.value
        let h1 = document.createElement('p')
        h1.classList.add('text-final')
        h1.classList.add('scale-up-bottom-right');
        h1.textContent = 'tu: '+text
        div.appendChild(h1)
        input.value = ''
        checkMsj(text)
    }
}

btn.addEventListener('click', enviarMsj);
input.addEventListener('keydown', enviarMsjEnter);

const respuestasBot = [
    {nombre: 'hola', descripcion: 'Hola, ¿como estas?, ¿en que puedo ayudarte?'},
    {nombre: 'estudios', descripcion:'Con respecto a los estudios, Lucas es alumno de ingeniería en sistemas de la Universidad Tecnológica Nacional, estudiante de Programación Web con orientación y cariño al desarrollo Backend.'},
    {nombre: 'aprendizaje', descripcion:'Reforcé mi capacidad para trabajar de manera colaborativa en un entorno de equipo, ya que nos conectabamos a realizar los trabajos prácticos y ayudarnos mutuamente. Desarrollo de habilidades para abordar desafíos inesperados. La capacidad de identificar rápidamente los obstáculos y encontrar soluciones.'},
    {nombre: 'tecnologias', descripcion:`Para llevar a cabo el proyecto, utilicé Javascript en su 80% del proyecto, HTML, CSS. Se utilizaron algunas librerias de JS, para la animación de tipeo con 'Typed.js', 'LocalStorage' para la persistencia de registros, el flujo de inicio y cierre de sesiones.`},
    {nombre: 'desafios', descripcion:' Algunos de los desafíos más significativos durante el desarrollo incluyeron la integración de ésta tecnología que no había utilizado mucho anteriormente, invertí tiempo adicional en investigar, estudiar para comprender las herramientas y asegurarme de que se integraran correctamente en el proyecto.'},
    {nombre: 'secciones', descripcion:'Este proyecto contiene una sidebar a su costado izquierdo,en el que se visualizan las diferentes secciones del proyecto. Éstas secciones son los trabajos prácticos realizados en el transcurso de la cursada hasta llegar al Proyecto final.'},
    {nombre: 'proyecto', descripcion: 'El Proyecto Final del Curso consistió en realizar una Página web consumiendo una API ( Application Programming Interface o Interfaz de programación de aplicaciones) de Peliculas, la API utilizada fue "API The Movies Database". Se desarrollo un buscador, un filtro de películas en cartelera y las más populares. También se incluyó la función de poder ver información de la pelicula.'}
];

const checkMsj = (res) => {

    let resMin = res.toLowerCase();

    const resp = respuestasBot.filter(respuesta => resMin === respuesta.nombre);

    if(resp.length === 0) {
        defaultRespBot();
    } else {
        crearRespuestaBot(resp[0]);
    }
}

const crearRespuestaBot = (respuesta) => {
            // se crea el elemento imagen 
            let img = document.createElement('img');
            img.src = "./Chatbot/IMG/Logo-official-remove.png";
            img.classList.add('logoChat');
            
            // se crea el elemento contenedor que va a alojar el LOGO y el Mensaje junto con su estilizacion
            let divRespBot = document.createElement('div');
            divRespBot.style["display"] = "flex";
            divRespBot.style["alignItems"] = "end";
            divRespBot.classList.add('scale-up-bottom-left');

            // por ultimo se crea el elemento 'p' y se le agrega el mensaje.
            // luego se añade con el metodo appenChild el logo y el mensaje ('p') al Div, que creamos.
            // y ese Div que contiene el logo y el mensaje, se lo agrega al contenedor/chat para mostrar lo mensajes.
            let h1 = document.createElement('p');
            h1.classList.add('resp-bot');
            h1.textContent = respuesta.descripcion;
            divRespBot.appendChild(img);
            divRespBot.appendChild(h1);
            div.appendChild(divRespBot);
            div.scrollTop = div.scrollHeight;
}

const defaultRespBot = () => {
            let img = document.createElement('img');
            img.src = "./Chatbot/IMG/Logo-official-remove.png";
            img.classList.add('logoChat');

            let divRespBot = document.createElement('div');
            divRespBot.style["display"] = "flex";
            divRespBot.style["alignItems"] = "end";
            divRespBot.classList.add('scale-up-bottom-left');

            let h1 = document.createElement('p')
            h1.classList.add('resp-bot')
            h1.textContent = 'Perdona, mis respuestas son limitadas, debes hacer las preguntas correctas.';
            divRespBot.appendChild(img);
            divRespBot.appendChild(h1);
            div.appendChild(divRespBot);
            div.scrollTop = div.scrollHeight;
}

const IntroRespBot = (input) => {
    let img = document.createElement('img');
    img.src = "./Chatbot/IMG/Logo-official-remove.png";
    img.classList.add('logoChat');

    let divRespBot = document.createElement('div');
    divRespBot.style["display"] = "flex";
    divRespBot.style["alignItems"] = "end";
    divRespBot.classList.add('scale-up-bottom-left');

    let h1 = document.createElement('p')
    h1.classList.add('resp-bot')
    h1.textContent = input;
    divRespBot.appendChild(img);
    divRespBot.appendChild(h1);
    div.appendChild(divRespBot);
    div.scrollTop = div.scrollHeight;
}

//Expresiones-Regulares\Chatbot\IMG\Logo-official-remove.png