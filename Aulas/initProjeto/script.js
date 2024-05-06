import { data } from "./data.js";

const app = document.getElementById('app');


data.forEach(element => {
    app.innerHTML += `
        <div class="app-2">
            <h2>${element.nome}</h2>
            <img src="${element.image}">
            <p>Função</p>
            <h3>${element.funcao}</h3>
        <div>
    `
});