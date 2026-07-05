
//validación del formulario principal
function validarFormulario(){
//referencia a los campos
    var profesion = document.getElementById("profesion");
    var radiosEntorno = document.getElementsByName("entorno");
//comprobamos que no esté vacío y tenga una longitud mínima
    if (profesion.value.trim().length < 3){
        alert("El campo 'Profesión' debe tener al menos 3 caracteres.");
        profesion.focus(); //manda el foco al dato inválido
        return false; //evita que se envíe el formulario
    }


//validación 2: radio buttons (entorno)
//comprobamos que al menos uno esté marcado
    var entornoSeleccionado = false;
    for (var i = 0; i < radiosEntorno.length; i++){
        if (radiosEntorno[i].checked){
            entornoSeleccionado = true;
            break;
        }
    }
    if(!entornoSeleccionado){
        alert("Por favor, selecciona un entorno preferido.");
        return false;
    }
    return true;
}
//botones Seguir/Dejar de seguir
//cuando se pincha en el cuadro, se borra el contenido
function limpiarInputSeguidor(){
    document.getElementById("inputSeguidor").value ="";
}
//función auxiliar para gestionar los colores (azul y verde)
function actualizarColoresLista(){
    var lista = document.getElementById("listaSeguidores");
    var elementos = lista.getElementsByTagName("li");
    //todos en azul
    for (var i = 0; i < elementos.length; i++){
        elementos[i].style.color = "blue";
    }
    //el último se muestra en verde
    if(elementos.length > 0){
        elementos[elementos.length - 1].style.color = "green";
    }
}
//botón "seguirme"
function agregarSeguidor(){
    var input = document.getElementById("inputSeguidor");
    var nombre = input.value;
//alerta si no se rellena nada
if(nombre.trim() === ""){
    alert("Debes escribir un nombre.");
    return;
}

//añadir a la lista
    var lista = document.getElementById("listaSeguidores");
    var nuevoLi = document.createElement("li");
    nuevoLi.textContent = nombre;
    lista.appendChild(nuevoLi);
    input.value = "";

    //actualizar colores
    actualizarColoresLista();
}
//botón "dejar de seguir"
function borrarSeguidor(){
    var input = document.getElementById("inputSeguidor");
    var nombreABorrar = input.value.trim();
    var lista = document.getElementById("listaSeguidores");
    var elementos = lista.getElementsByTagName("li");
    var encontrado = false;
    if(nombreABorrar === ""){
        alert("Escribe el nombre de la persona que quieres dejar de seguir.");
        return;
    }

for(var i = 0; i < elementos.length; i++){
    if(elementos[i].textContent.toLowerCase() === nombreABorrar.toLowerCase()){
        lista.removeChild(elementos[i]);
        encontrado = true;
        input.value = "";
        actualizarColoresLista();
        break;

    }
}
if(!encontrado){
    alert("No se ha encontrado a " + nombreABorrar + " en la lista de seguidores.");
}
}

//POP-UP con edades
function verificarEdadPopUp(){
    var inputEdad = document.getElementById("datoEdad");
    var edad = parseInt(inputEdad.value);
    //si se escribe un número válido hará lo siguiente
    if(!isNaN(edad)){
        var urlDestino = "";
    
    //si es menor de edad = Disney
    if(edad < 18){
        urlDestino = "https://www.disney.es";
    }
    //si es mayor de edad = Linkedin
    else{
        urlDestino = "https://es-linkedin.com/";
    }
    //función para abrir ventana
    
    
    alert
    
    // Movemos la apertura de ventana aquí dentro
    window.open(urlDestino, "_blank", "width=800,height=600");
    
}
}
function cargarXML() {
    var xmlPath = "coleccion.xml";
    var xslPath = "transformacion.xsl";
    function cargarArchivo(url) {
        return fetch(url).then(response => response.text());
    }
    Promise.all([cargarArchivo(xmlPath), cargarArchivo(xslPath)]).then(([xmlText, xslText]) => {
        var parser = new DOMParser();
        var xml = parser.parseFromString(xmlText, "application/xml");
        var xsl = parser.parseFromString(xslText, "application/xml");
    
    if (window.XSLTProcessor) {
        var xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        var resultDocument = xsltProcessor.transformToFragment(xml, document);
        var contenedor = document.getElementById(visorXML);
        contenedor.innerHTML = "";
        contenedor.appendChild(resultDocument);
    }
    })
    .catch(error => {
        console.error("Error cargando archivos XML/XSL:", error);
        alert("No se puede cargar la colección. Asegúrate de estar usando un servidor (como Live Server).");
    })
}
function validarFormulario() {
    var profesion = document.getElementById("profesion");
    var rediosEntorno = document.getElementsByName("entorno");
    if (profesion.value.trim().length < 3){
        Swal.fire({
            icon: 'Error',
            title: 'Campo incompleto',
            text: 'La profesión debe tener al menos 3 caracteres'
        });
        profesion.focus();
        return false;
    }
    var entornoSeleccionado = false;
    for (var i = 0; i < radiosEntorno.length; i++){
        if (radiosEntorno[i].checked){
            entornoSeleccionado = true;
            break;
        }
    }
    if(!entornoSeleccionado){
        Swal.fire('Error', 'Por favor, selecciona un entorno', 'warning');
        return false;
    }
    return true;
}
    function verificarEdadPopUp(){
        var inputEdad = document.getElementById("datoEdad");
        var edad = parseInt(inputEdad.value);
        if (!isNaN(edad)){
            var urlDestino = "";
            if(edad < 18){
                urlDestino = "infantil.html";
            }
            else{
                urlDestino = "profesional.html";

            }
            window.open(urlDestino, "_blank", "width=800, heigth=600");
        }
    }
