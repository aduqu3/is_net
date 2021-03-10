function milog(){
    midatos="---";
    console.log('El valor de mis datos es ' + midatos);
}
function Saludo(){
    alert("Desde el boton");
}
function square(number){
    console.log('Ejecuto la funcion square');
    return number * number;
}
function cargar(){
    var texto="1234567890"
    document.getElementById('div1').innerHTML="<p>texto texto texto</p><p>texto texto texto</p>";
    document.getElementById('text1').value=texto;
}
function cargarImagen(){
    document.getElementById('div2').innerHTML='<img src="../logo_unillanos.png">';
}
function cargarFormulario(){
    var controles="<INPUT TYPE='button' id='buttonform1' Value='Aceptar' NAME='buttonform1'>"+
        "<INPUT TYPE='text' id='textform1' Value='' NAME='textform1'>";
    document.getElementById('div1').innerHTML=controles;
}
function obtenerValorHtml(){
    var valor = document.getElementById("text1").value;
    console.log('valor de content es '+ valor);
}
function cargarFormularioDos(){
    var newt =document.createElement("div");
    newt.style.cssText='border:8px solid #56aad3;padding:12px;width:160px;margin:12px 0 12px 0;';
    newt.id="div55";
    var t = document.createTextNode("DIV nuevo");
    newt.appendChild(t);
    document.getElementById("cont5").appendChild(newt);

    var newp = document.createElement("P");
    newp.title="texto hijo";
    newp.id="idp";
    document.getElementById("div55").appendChild(newp);

    var texto = document.createTextNode("Texto adicionado a la etiqueta <p>");
    document.getElementById("idp").appendChild(texto);
}