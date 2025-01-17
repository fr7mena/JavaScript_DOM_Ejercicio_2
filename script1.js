

    const parrafo1 = document.getElementById('parrafo1');
    let parrafos = document.getElementsByTagName("p");
    const parrafo2 = parrafos[1]; //Con esto estoy cogiendo el segundo párrafo.
    const parrafo3 = document.getElementsByClassName("miClase");
    const boton1 = document.getElementById('cambiarTextos');
    const boton2 = document.getElementById('cambiarClases');
    const boton3 = document.getElementById('quitarClases');
    const boton4 = document.getElementById('quitarClasesAll');

    boton1.addEventListener('click', cambiarTextos); //Si tiene acceso a las variables de arriba porque está llamando a la función en el mismo bloque donde están declaradas.
    boton2.addEventListener('click', cambiarClases);
    boton3.addEventListener('click', quitarClases);
    boton4.addEventListener('click', quitarClasesAll);

function cambiarTextos() {
    parrafo1.textContent = "Primer párrafo cambiado";
    parrafo2.textContent = "Segundo párrafo cambiado";
    parrafo3.textContent = "Tercer párrafo cambiado";
}

function cambiarClases() {
    parrafo1.setAttribute("class", "miClase");
    parrafo2.className = "miOtraClase";
}

function quitarClases() {
    parrafo1.setAttribute("class", "");
    parrafo2.className = "";
    parrafo3.className = "";
}

function quitarClasesAll() {
    /*const parrafos = document.getElementsByTagName("p");*/
    for (let i = 0; i < parrafos.length; i++) {
        if (parrafos[i].className !== "") {
            parrafos[i].className = "";
        } else {
            parrafos[i].className = "miOtraClase";
        }
    }
}

