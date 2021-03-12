function Saludo() {
    alert("Desde el boton");
}

var people = [
    {
        id: "12323",
        firstname: "Malcom",
        lastname: "Reynolds",
        email: "test@email.com",
        photo: "https://www.gstatic.com/images/branding/product/2x/photos_96dp.png",
    },
];

function testFill() {
    people.push({
        id: document.getElementById("id").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        photo: document.getElementById("photo").value,
    });
    myFunction(item);
    console.log(item);
}

<<<<<<< HEAD
function myFunction(item) {
    let tr = document.createElement("tr");
    let c = 0;
    item.forEach((i) => {
        let td = document.createElement("td");
        console.log(i);
        td.innerText = i;
        td.id = c;
        c += 1;
        tr.appendChild(td);
=======
function myFunction() {
    var result = "";
    people.forEach(function (item) {
        result += "<li>" + item.id + " " + item.firstname + " " + item.lastname + " " + item.email;
>>>>>>> 795f47b5f49f00763150082396342f066c7b2e5f
    });
    document.getElementById("demo").appendChild(tr);
}

function updateTable() {
    for (id in people) {
        document.write(
            "<tr><td>" + id + "</td><td>" + people[id].firstname + "</td></tr>"
        );
    }
}
