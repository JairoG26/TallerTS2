import { series } from './data.js';
var tabla = document.getElementById("tabla");
var data = document.getElementById("data");
function mostrarDatos(data, body) {
    var htmlVar = "";
    var promedio = 0;
    for (var i = 0; i < data.length; i++) {
        htmlVar += "\n        <tr class=\"serie\">\n            <td>".concat(data[i].id, "</td>\n            <td>").concat(data[i].name, "</td>\n            <td>").concat(data[i].channel, "</td>\n            <td>").concat(data[i].seasons, "</td>\n        </tr>");
        promedio += data[i].seasons;
    }
    htmlVar += "\n    <tr id = \"promedio\"><h2>Promedio de temporadas: ".concat(promedio / data.length, "</h2></tr>");
    body.innerHTML = htmlVar;
}
mostrarDatos(series, tabla);
var listaClassSerie = document.getElementsByClassName("serie");
var _loop_1 = function (i) {
    listaClassSerie[i].addEventListener("click", function () {
        showData(i);
    });
};
for (var i = 0; i < listaClassSerie.length; i++) {
    _loop_1(i);
}
function showData(index) {
    data.innerHTML = "";
    var currentSerie = series[index];
    var card = "\n    <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"".concat(currentSerie.imageUrl, "\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(currentSerie.name, "</h5>\n            <p class=\"card-text\">").concat(currentSerie.description, "</p>\n            <a href=\"").concat(currentSerie.link, "\" class=\"btn btn-primary\">P\u00E1gina de la serie</a>\n        </div>\n    </div>\n    ");
    data.innerHTML = card;
}
