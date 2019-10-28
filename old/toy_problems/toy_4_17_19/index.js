// Problem: Get array for first 10 names from this https://swapi.co/
// ... Using this https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js
//import axios from "axios";

const people = [];
const output = document.getElementById("output");

for (let i = 1; i <= 10; i++) {
    const test = axios.get(`https://swapi.co/api/people/${i}`)
        .then(response => refresh(response));
}

function refresh(response) {
    const {data: {name}} = response;
    //output.innerText = "";
    people.push(name);
    //people.forEach(e => {output.innerText += e + '\n'});

    output.innerText += name + '\n';
}