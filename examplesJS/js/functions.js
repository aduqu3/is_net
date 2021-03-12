function Saludo() {
    alert("Desde el boton");
}

var people = [];

function testFill() {
    
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
        } else {
            index = c;
        }
    });
    people.splice(index, 1);
    console.log();
    myFunction();
}

function clearDefault() {
    document.getElementById("myForm").reset();
}
