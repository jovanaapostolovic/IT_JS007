// 1. Zadatak
// Napraviti funkciju kojoj se prosleđuje niz stavki za kupovinu (članovi niza su stringovi). U funkciji, prolaskom foreach petljom kroz niz, napraviti neuređenu listu i ispisati je u html dokument.
let kupovina = ["Hleb", "Mleko", "Jogurt", "Novine"];
let spisakNeurLista = niz => {
    let rez = `<ul>`;
    niz.forEach(el => {
        rez += `<li style="text-decoration:underline; background-color:beige;">${el}</li>`;
    });
    rez += `</ul>`;
    return rez;
}
document.getElementById('d1').innerHTML += spisakNeurLista(kupovina);

// 2. Zadatak
// Napraviti funkciju kojoj se prosleđuje niz imena košarkaških timova. U funkciji, prolaskom foreach petljom kroz niz, formirati tabelu u čijim su redovima imena timova i tabelu ispisati u html dokument.
let timovi = ["Zvezda", "Partizan", "Mladost", "Pobeda"];
let tabelaRedovi = niz => {
    let rez = `<table>`;
    niz.forEach(el => {
        rez += `<tr><td style="border-style:groove; border-color:coral;">${el}</td></tr>`;
    });
    rez += `</table>`;
    return rez;
}
document.getElementById('d2').innerHTML += tabelaRedovi(timovi);

// 3. Zadatak
// Napraviti funkciju kojoj se prosleđuje niz stringova čiji su članovi putanje do slika. U funkciji, prolaskom foreach petljom kroz niz, prikazati sve slike u html dokumentu.
let slike = ["https://www.slikomania.rs/fotky6509/fotos/XOBFB576E1.jpg", "https://www.slikomania.hr/fotky6354/fotos/XOBFB571E1.jpg", "https://www.slikomania.rs/fotky6509/fotos/XOBFB565E1.jpg"];
let putanjeDoSlika = niz => {
    let rez = `<section style=background-color:linen;">`;
    niz.forEach(el => {
        rez += `<img src="${el}";>`;
    });
    rez += `</section>`;
    return rez;
}
document.getElementById('d3').innerHTML += putanjeDoSlika(slike);