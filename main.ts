import { series } from './data.js';
import { Serie } from "./serie.js";

let tabla: HTMLElement = document.getElementById("tabla")!;

let data: HTMLElement = document.getElementById("data")!;

function mostrarDatos(data: Serie[], body: HTMLElement): void {
    let htmlVar = "";
    let promedio = 0;
    for (let i = 0; i < data.length; i++) {
        htmlVar += `
        <tr class=\"serie\">
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].channel}</td>
            <td>${data[i].seasons}</td>
        </tr>`
        promedio += data[i].seasons;
    }
    htmlVar += `
    <tr id = \"promedio\"><h2>Promedio de temporadas: ${promedio / data.length}</h2></tr>`;
    body.innerHTML = htmlVar;
}

mostrarDatos(series, tabla);

let listaClassSerie: HTMLCollectionOf<Element> = document.getElementsByClassName("serie")!;

for (let i = 0; i < listaClassSerie.length; i++) {


    listaClassSerie[i].addEventListener("click", () => {
        showData(i);
    });
}

function showData(index: number): void {
    data.innerHTML = "";

    let currentSerie: Serie = series[index];

    let card: string = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${currentSerie.imageUrl}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${currentSerie.name}</h5>
            <p class="card-text">${currentSerie.description}</p>
            <a href="${currentSerie.link}" class="btn btn-primary">Página de la serie</a>
        </div>
    </div>
    `;
    data.innerHTML = card;
}
