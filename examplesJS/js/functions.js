function Saludo() {
    alert("Desde el boton");
}

var people = [
];

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
}

function myFunction(item) {
    console.log(item);
    let tmp = document.getElementById("demo");
    tmp.parentElement.removeChild(tmp);
    let table = document.createElement("table");
    table.id = "demo";
    table.style.border = "1px";
    table.innerHTML =
        "<tr> <th>Nombre</th> <th>Apellido</th> <th>Identificación</th> <th>E-mail</th> <th>Foto (URL)</th> </tr> </table>";
    item.forEach((i) => {
        let tr = document.createElement("tr");
        for (let key in i) {
            let td = document.createElement("td");
            console.log(key + " " + i[key]);
            td.innerText = i[key];
            tr.appendChild(td);
        }
        table.appendChild(tr);
        document.getElementById("tb").appendChild(table);
    });
}

function updateTable() {
    for (id in people) {
        document.write(
            "<tr><td>" + id + "</td><td>" + people[id].firstname + "</td></tr>"
        );
    }
}
