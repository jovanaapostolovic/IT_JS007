"use strict"; // mora pravilno da se kuca js kod

// Zadatak 1
let h = 12; 
let m = 24;
console.log( h * 60 + m); // ja

let odPonoći = h * 60 + m;
console.log("Od ponoći je prošlo " + odPonoći + " minuta");

let doPonoći = 24 *60 - odPonoći
// let doPonoći = (24 - s) * 60 - m;
console.log("Do ponoći je ostalo " + doPonoći + " minuta");


// Zadatak 2
let x = 745; 
let y = 0; 
let z = 0;
y = x / 60;
z = x % 60;
console.log(Math.floor(y), z);
//console.log( y - ) //ja

let minOdPonoći = 745; // minOdPonoći =   * 60 + minSada
// minOdPonoći - minSada =   * 60
// (minOdPonići - minSada) /60 = 
let minSada = minOdPonoći % 60;
let satSada = (minOdPonoći - minSada) / 60;
console.log("sada je " + satSada + ":" + minSada);

//Drugi način
console.log(minOdPonoći / 60); // deljenje vraća realan broj
console.log(Math.floor(minOdPonoći / 60)); // vraća ceo broj manji ili jednak od rezultata
console.log(Math.ceil(minOdPonoći / 60)); //ceo broj veći ili jednak rez
console.log(Math.round(minOdPonoći / 60)); // zaokružuje vrednost

let satSada2 = Math.floor(minOdPonoći / 60);
let minSada2 = minOdPonoći % 60;
console.log("Sada je " + satSada2 + ":" + minSada2);


// Zadatak 3
let a = 555; 
let b = 1000;
console.log(b - a); //ja

let cenaRobe = 1750;
let novcanica = 2000;

let kusur = novcanica - cenaRobe;
console.log("Kusur je " + kusur + " dinara");

// Zadatak 6
//a
let evri = 555;
let vrednostKursa = 120;

let dinariNakonRazmene = evri * vrednostKursa;
console.log("Imaćemo " + dinariNakonRazmene + " dinara nakon razmene");

//b
let dinari = 55555;

let evriNakonRazmene = dinari / vrednostKursa;
console.log("Imaćemo " + evriNakonRazmene + " evra nakon razmene");

// Zadatak 7
//a
let evriKojePosedujemo = 55555;
let kursEvroDinar = 120; // imamo i gore, ne mora ovde
let kursDolarDinar = 105;

let dinariKojePosedujemo = evriKojePosedujemo * kursEvroDinar; // imamo gore
let dolariKojePosedujemo = dinariKojePosedujemo / kursDolarDinar;
console.log("Imaćemo " + dolariKojePosedujemo + " dolara nakon razmene");

//b
let posedovaniDolari = 425;
let dolarDinar = 105;
let evroDinar = 120;

let evriKojeĆemoDobiti = posedovaniDolari * dolarDinar /evroDinar;
console.log("Imaćemo " + evriKojeĆemoDobiti + " evra nakon razmene");

// datum i vreme
let datum = new Date(); // datum - objekat

let godina = datum.getFullYear();
let mesec = datum.getMonth() + 1;
let datumUMesecu = datum.getDate();
let danUNedelji = datum.getDay();
console.log("Danas je " + datumUMesecu + "." + mesec + "." + godina);
console.log(danUNedelji);

