
function comenzar() {

    const textarea = document.getElementById('texto');
    const divs = document.getElementsByTagName('div');
    const divPadre = divs[0];

    const boton1 = document.getElementById('crearParrafo');
    const boton2 = document.getElementById('crearImagen');
    const boton3 = document.getElementById('borrarUltimo');
    const boton4 = document.getElementById('borrarPrimero');
    const boton5 = document.getElementById('sustituirPrimeroVacio');

    boton1.addEventListener('click', () => crearParrafo(textarea, divPadre)); //Si tiene acceso a las variables de arriba porque está llamando a la función en el mismo bloque donde están declaradas.
    boton2.addEventListener('click', () => crearImagen(divPadre));
    boton3.addEventListener('click', () => borrarUltimo(divPadre));
    boton4.addEventListener('click', () => borrarPrimero(divPadre)); ;
    boton5.addEventListener('click', () => sustituirPrimeroVacio(divPadre));
}

function crearParrafo(textarea, divPadre) {
    let parrafo = document.createElement("p");
    parrafo.textContent = textarea.value; //OJOOOO: el contenido de string que introducimos en los texareas se guarda en la propiedad value, es decir, textarea.value, no en textarea.textContent o textarea.innerText, eso en este caso NO TIENE SENTIDO.
    parrafo.className = "miClase";
    divPadre.appendChild(parrafo);
    /*console.log(parrafo);*/
}
/*https://th.bing.com/th/id/R.9af99d02646d9861ecfaf2544db835f3?rik=hVOVct8DlmtLMg&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f10000000%2frafa-rafael-nadal-10088667-356-500.jpg&ehk=vKQN5jzrD0tWZI8c2BGOmwztREpCH4%2ffl4joiCAFkMc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1*/
function crearImagen(divPadre) {
    let src = prompt("Introduce la url de la imagen que quieres mostrar por pantalla.");
    let img = document.createElement("img");
    img.src = src;
    divPadre.appendChild(img);
}
/*
Quita el último elemento que contenga DIV.
*/
/*function borrarUltimo(divPadre) {
    let collecionElementosDivPadre = divPadre.children; //esto me devuelve un collecion de nodos de tipo elementos/etiquetas
    divPadre.removeChild(collecionElementosDivPadre[collecionElementosDivPadre.length -1]);
}*/

function borrarUltimo(divPadre) {
    let ultimoHijo = divPadre.lastElementChild //Devuelve el ultimo elemento Hijo
    divPadre.removeChild(ultimoHijo);
}
/*
Quita el primer elemento que contenga DIV.
*/
function borrarPrimero(divPadre) {
    let primerHijo = divPadre.firstChild;
    divPadre.removeChild(primerHijo);
}
/*Crear un párafo P asociandole un texto que se denomine Vacío. En ese momento, busca la manera en que puedas sustituir el primer hijo por este nuevo párrafo que hemos creado.*/
function sustituirPrimeroVacio(divPadre) {
    let elementosHijos = divPadre.children;
    let parrafo = document.createElement("p");
    parrafo.textContent = "Vacío";
    parrafo.className = "miOtraClase";

    for (let i = 0; i < elementosHijos.length; i++) {
        if (elementosHijos[i].textContent == "") {
            divPadre.removeChild(elementosHijos[i]);
            divPadre.insertBefore(parrafo, elementosHijos[i]); //se pasa como parámetro el, este orden, el hijo a añadir y el hijo a eliminar. Este metodo sustituye uno por otro en la misma posición de la collection en la que el anterior fue eliminado, internamente sabe el indice de insercion correspondiente al nuevo elemento
            return;
        }
    }
}

addEventListener('load', comenzar);
