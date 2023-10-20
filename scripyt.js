var database = firebase.database();

function enviar() {
    var usuario= document.getElementById("usuario").value;
    var email= document.getElementById("email").value;
    var senha= document.getElementById("").value;
    var senha= document.getElementById("").value;
    var filme= document.getElementById().value;
    var musica= document.getElementById().value;

        database.ref('usuario/+ usuario').set({usuario:usuario,
        email:email,
    senha:senha,
filme:filme,
musica:musica}) alert("informaçoes salvas")
}
