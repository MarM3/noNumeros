const patron =/^\d$/; //tambien podemos utilizar los codigos de las teclas [A-Z] 65-90 y charCode [a-z] 97-122
const texto = document.getElementById("areatexto");
texto.onkeypress = impedirEvento;

function impedirEvento(evento){
    if (patron.test(evento.key)) {//utilizamos event.key porque la tecla no se pinta en el textarea sino que se queda en el evento
        evento.preventDefault();
        alert("Debe introducir unicamente letras mayusculas o minusculas.");
        //return false;
    }
    //return true;
}