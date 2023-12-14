// assignment 1
// selecting elements
const first = document.querySelector(".firstName");
const last = document.querySelector(".lastName");
const dob = document.querySelector(".dob");

// fetch data from json
fetch("./person.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    first.textContent = data.firstName;
    last.textContent = data.lastName;
    dob.textContent = data.dob;
  });

// async function setData() {
//   const res = await fetch("./person.json");
//   const data = await res.json();
// }

// assignment 2
const table = document.querySelector("table");
async function getData() {
  const res = await fetch("./persons.json");
  const data = await res.json();
  for (let element of data) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${element.firstname}</td>
            <td>${element.lastname}</td>
            <td>${element.dob}</td>
    `;
    table.append(tr);
  }
}

getData();
