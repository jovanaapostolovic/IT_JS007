import generateImage from "./general.js";

function generateTable(parent) {
    let tabela = document.createElement("table");
    tabela.style.border = "0";
    parent.appendChild(tabela);
    return tabela;
}

function generateTableRow(parent) {
    let red = document.createElement("tr");
    parent.appendChild(red);
    return red;
}

function generateItem(parent, src) {
    let sadržaj = document.createElement ("td");
    let img = generateImage(src);
    sadržaj.appendChild(img);
    parent.appendChild(sadržaj);
    return sadržaj;
}

export {generateTable, generateTableRow, generateItem};