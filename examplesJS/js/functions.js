function Saludo() {
  alert("Desde el boton");
}

var people = [];

function testFill() {
<<<<<<< HEAD
    people.push({
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        photo: document.getElementById("photo").value,
    });
    myFunction(people);
    clearDefault();
}

function myFunction() {
    let tmp = document.getElementById("demo");
    tmp.parentElement.removeChild(tmp);
    let table = document.createElement("table");
    table.id = "demo";
    table.innerHTML =
        "<tr> <th>Nombre</th> <th>Apellido</th> <th>Identificación</th> <th>E-mail</th> <th>Foto (URL)</th> </tr> </table>";
    people.forEach((i) => {
        let tr = document.createElement("tr");
        for (let key in i) {
            console.log(key != "photo");
            let td = document.createElement("td");
            if (key != "photo") {
                td.innerText = i[key];
                tr.appendChild(td);
            } else {
                let a = document.createElement("a");
                a.href = i[key];
                a.innerText = "URL";
                td.appendChild(a);
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
        document.getElementById("tb").appendChild(table);
    });
}

function deleteRow() {
    let id = document.getElementById("id").value;
    let index = 0;
    c = 0;
    people.forEach((i) => {
        if (id != i.id) {
            c += 1;
        } else {
            index = c;
        }
    });
    if (id === people[index].id) {
        people.splice(index, 1);
        myFunction();
        clearDefault();
=======
  people.push({
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    id: document.getElementById("id").value,
    email: document.getElementById("email").value,
    photo: document.getElementById("photo").value,
  });
  myFunction(people);
  console.log(people);
  clearDefault();
}

function myFunction() {
  console.log(people);
  let tmp = document.getElementById("demo");
  tmp.parentElement.removeChild(tmp);
  let table = document.createElement("table");
  table.id = "demo";
  table.innerHTML =
    "<tr> <th>Nombre</th> <th>Apellido</th> <th>Identificación</th> <th>E-mail</th> <th>Foto (URL)</th> </tr> </table>";
  people.forEach((i) => {
    let tr = document.createElement("tr");
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
  let index = 0;
  c = 0;
  people.forEach((i) => {
    if (id != i.id) {
      c += 1;
>>>>>>> 77317cbd4df6c60bca79ff34210e15f128842234
    } else {
      index = c;
    }
  });
  if (id === people[index].id) {
    people.splice(index, 1);
    console.log();
    myFunction();
    clearDefault();
  } else {
    alert("La identificación indicada no existe");
  }
}

function clearDefault() {
<<<<<<< HEAD
    document.getElementById("myForm").reset();
    document.getElementById("picture").src =
        "https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png";
}

function loadPhoto() {
    let img = document.getElementById("picture");
    let src = document.getElementById("photo").value;
    img.src = src;
=======
  document.getElementById("myForm").reset();
  document.getElementById("picture").src =
    "https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png";
}

function loadPhoto() {
  let img = document.getElementById("picture");
  let src = document.getElementById("photo").value;
  img.src = src;
>>>>>>> 77317cbd4df6c60bca79ff34210e15f128842234
}
