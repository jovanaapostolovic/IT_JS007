import Auto from "./auto.js";

let a1 = new Auto("Citroen C4", "crna", false, 5);
// a1._marka - vrednost polja je "Citroen C4"
// a1._boja - ima vrednost "crna"
// a1._imaKrov ima vrednost false

console.log(a1);
console.log(typeof a1);

let a2 = new Auto("Škoda Fabia", "plava", true);

console.log(a2);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);

let a3 = new Auto("Fiat Punto", "bela", false, 3);

console.log(a3);
console.log(a3._marka);
console.log(a3._boja);
console.log(a3._imaKrov);

a3.brojPutnika = 5;
console.log(a3);


let a4 = new Auto();
a4._marka = "   ";

console.log(a4);

a1.sviraj();
a2.sviraj();
a3.sviraj();
a4.sviraj();

a1.vozi(50);
a4.vozi(200);

// u klasi pisemo polja i  polja klase se definišu u constructor-u
// možemo dodavati proizvoljne metode 
// svi objekti klase imaće polja i metode navedene u klasi

a1._brojVrata = 4; // poljima se pristupa bez zagrada
a1.sviraj(); // metodama se pristupa sa zagradama, a parametri su unutar njih
a1.marka = "   Audi A4";
// a1.postaviMarku("   Audi A4");
console.log(a1);
// console.log(a1.dohvatiMarku());
console.log(a1.marka); //geter marka

console.log(a1);
let a5 = new Auto("Audi A4", "plava", false, 3);
console.log(a5);

a3.stampaj();