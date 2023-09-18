const input = document.querySelector('#valor-input')
const div = document.querySelector('#contenedor')
const btn = document.querySelector('#btn-send')

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
    {nombre: 'hola', descripcion:' ¡Hola!, Mucho gusto!, mi nombre es LukeBot y soy el ayudante creado por Lucas para acompañarte, que tengas un buen día!'},
    {nombre: 'estudios', descripcion:' Con respecto a los estudios, soy alumno de la carrera de ingeniería en sistemas de la Universidad Tecnológica Nacional y estudiante de Programación.'},
    {nombre: 'como estas', descripcion:' Que buena gente!, estoy bien, Gracias por Preguntar C:'},
    {nombre: 'pasatiempo', descripcion:' Estudiar y estudiar, .......... que noooooooo!!, Se vicea VALORANT!! xD. Ahora si, Videojuegos, mucho Cine y Armado/desarmado de computadoras, notebook, etc.'},
    {nombre: 'tiempo libre', descripcion:' ¿Qué hago en mis tiempos libres?, Mmmm.. Buena pregunta, Duermo xD, voy a tomar un cafe por ahi, caminar.'},
    {nombre: 'explicame algo', descripcion:' Bueno pequeño pupilo, podria explicarte ¿qué es la inteligencia artificial?, buena pregunta, podria aburrirte explicandote ésto, pero hay una herramienta muy buena llamada Google al que le podes ir a preguntar.. luego me cuentas xD'},
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
            img.src = "./IMG/Logo-official-remove.png";
            img.classList.add('logoChat');
            
            // se crea el elemento contenedor que va a alojar el LOGO y el Mensaje junto con su estilizacion
            let divRespBot = document.createElement('div');
            divRespBot.style["display"] = "flex";
            divRespBot.style["alignItems"] = "end";
            divRespBot.classList.add('scale-up-bottom-left');

            // por ultimo se crea el elemento 'p' y se le agrega el mensaje.
            // luego se añade con el metodo appenChild el logo y el mensaje ('p') al Div, que creamos.
            // y ese Div que contiene el logo y el mensaje, se lo agrega al contenedor/chat para mostrar lo mensajes.
            let h1 = document.createElement('p')
            h1.classList.add('resp-bot')
            h1.textContent = respuesta.descripcion;
            divRespBot.appendChild(img);
            divRespBot.appendChild(h1);
            div.appendChild(divRespBot);
            div.scrollTop = div.scrollHeight;
}

const defaultRespBot = () => {
            let img = document.createElement('img');
            img.src = "./IMG/Logo-official-remove.png";
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

//Expresiones-Regulares\Chatbot\IMG\Logo-official-remove.png