function Saludo() {
  alert("Desde el boton");
}

var people = [];

autoIncrement = 1;

function testFill() {
  people.push({
    i: autoIncrement++,
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    // pass: document.getElementById("pass").value,
    // id: document.getElementById("id").value,
  });

  saveData(people);
  myFunction(people);
  clearDefault();
}

function myFunction() {
  console.log(people);
  let tmp = document.getElementById("demo");
  tmp.parentElement.removeChild(tmp);
  let table = document.createElement("table");
  table.id = "demo";
  table.innerHTML =
    "<tr> <th>ID</th> <th> nombres </th> <th> apellidos </th> <th>E-mail</th> <th>Total palabra</th> <th>Palabras repetidas</th> </tr> </table>";
  people.forEach((i) => {
    let tr = document.createElement("tr");
    console.log(i);
    for (let key in i) {
      let td = document.createElement("td");
      td.innerText = i[key];
      tr.appendChild(td);
    }
    table.appendChild(tr);
    document.getElementById("tb").appendChild(table);
  });
}

function deleteRow() {
  let id = document.getElementById("id").value;
  console.log(id);
  let index = 0;
  c = 0;
  people.forEach((i) => {
    console.log(i.i);
    if (id != i.i) {
      c += 1;
    } else {
      index = c;
    }
  });
  console.log("hello");
  console.log(people[index].i);
  console.log("hello2");
  console.log(id);
  if (id === people[index].i) {
    console.log("se elimino1213");
    people.splice(index, 1);
    console.log("se elimino");
    myFunction();
    clearDefault();
    saveData(people);
  } else {
    alert("La identificación indicada no existe");
  }
}

function clearDefault() {
  document.getElementById("myForm").reset();
}

function saveData(people_ck) {
  console.log("vamos a intentar guardar");
  document.cookie = JSON.stringify(people_ck);
  console.log(document.cookie);
  console.log("se guardo");
}

function getData() {
  console.log("obteniendo data");
  // var listado = document.cookie;
  var jsonRecibido = JSON.parse(document.cookie);

  autoIncrement = jsonRecibido.length;
  people = jsonRecibido;
  setTimeout(myFunction(jsonRecibido), 100);
  // recorrer el arreglo
  // jsonRecibido.forEach((i) => {
  //   console.log(i);
  // });

  console.log("se obtuvo data");
}

document.addEventListener("DOMContentLoaded", function (event) {
  getData();
});
