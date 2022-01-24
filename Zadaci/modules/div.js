import generateImage from "./general.js";

function generateDiv(parent) {
    let div = document.createElement("div");
    div.style.overflow = "hidden";
    parent.appendChild(div);
    return div;
}

function generateItem(parent, src) {
    let sekcija = document.createElement("section");
    sekcija.style.float = "left";
    let img = generateImage(src);
    sekcija.appendChild(img);
    parent.appendChild(sekcija);
    return sekcija;
}
export {generateDiv, generateItem};
