function Saludo(){
    alert("Desde el boton");
}

var people = [
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

    people.push({
        id: id,
        firstname : firstname, 
        lastname: lastname,
        email: email
    });
    console.log(people);
}


function myFunction() {
    var result = "";
    people.forEach(function (item) {
        result += "<li>" + item.id + " " + item.firstname + " " + item.lastname + " " + item.email;
    });

    document.getElementById("demo").innerHTML = result;
}

function updateTable(){
    for(id in people)
    {
        document.write('<tr><td>' + id + '</td><td>' + people[id].firstname + '</td></tr>');
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

