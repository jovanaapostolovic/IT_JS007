import generateImage from "./general.js"; // kada importujemo 1 stvar moze bez zagrada

function generateList(parent) {
    let lista = document.createElement("ul");
    lista.style.listStyleType = "none";
    lista.style.overflow = "hidden";
    parent.appendChild(lista);
    return lista;
}

function generateItem(parent, src) {
    let stavkaListe = document.createElement("li");
    stavkaListe.style.float = "left";
    let img = generateImage(src);
    stavkaListe.appendChild(img);
    parent.appendChild(stavkaListe);
    return stavkaListe;
}

export {generateList, generateItem};