// function milog(){
//     midatos="---";
//     console.log('El valor de mis datos es ' + midatos);
// }
function Saludo(){
    alert("Desde el boton");
}
// function square(number){
//     console.log('Ejecuto la funcion square');
//     return number * number;
// }
// function cargar(){
//     var texto="1234567890"
//     document.getElementById('div1').innerHTML="<p>texto texto texto</p><p>texto texto texto</p>";
//     document.getElementById('text1').value=texto;
// }
// function cargarImagen(){
//     document.getElementById('div2').innerHTML='<img src="../logo_unillanos.png">';
// }
// function cargarFormulario(){
//     var controles="<INPUT TYPE='button' id='buttonform1' Value='Aceptar' NAME='buttonform1'>"+
//         "<INPUT TYPE='text' id='textform1' Value='' NAME='textform1'>";
//     document.getElementById('div1').innerHTML=controles;
// }
// function obtenerValorHtml(){
//     var valor = document.getElementById("text1").value;
//     console.log('valor de content es '+ valor);
// }
// function cargarFormularioDos(){
//     var newt =document.createElement("div");
//     newt.style.cssText='border:8px solid #56aad3;padding:12px;width:160px;margin:12px 0 12px 0;';
//     newt.id="div55";
//     var t = document.createTextNode("DIV nuevo");
//     newt.appendChild(t);
//     document.getElementById("cont5").appendChild(newt);

//     var newp = document.createElement("P");
//     newp.title="texto hijo";
//     newp.id="idp";
//     document.getElementById("div55").appendChild(newp);

//     var texto = document.createTextNode("Texto adicionado a la etiqueta <p>");
//     document.getElementById("idp").appendChild(texto);
// }


var persons = [
    {   
        id: "12323",
        firstname : "Malcom", 
        lastname: "Reynolds",
        email: "test@email.com"    
    }
  ];
  
function testFill(){

    var id = document.getElementById("id").value;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;

    persons.push({
        id: id,
        firstname : firstname, 
        lastname: lastname,
        email: email
    });
    console.log(persons);
}


function myFunction() {
    var result = "";
    persons.forEach(function (item) {
        result += "<li>" + item.id + " " + item.firstname + " " + item.lastname + " " + item.email;
    });

    document.getElementById("demo").innerHTML = result;
}

function updateTable(){
    for(id in persons)
    {
        document.write('<tr><td>' + id + '</td><td>' + persons[id].firstname + '</td></tr>');
    }
}


// var k = "The respective values are :"; 
// function Geeks() { 
//     var input = document.getElementsByName('array[]'); 

//     for (var i = 0; i < input.length; i++) { 
//         var a = input[i]; 
//         k = k + "array[" + i + "].value= " 
//                             + a.value + " "; 
//     } 

//     document.getElementById("par").innerHTML = k; 
//     document.getElementById("po").innerHTML = "Output"; 
// } 

