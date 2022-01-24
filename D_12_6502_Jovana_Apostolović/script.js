import { Knjiga } from "./knjiga.js";

let k1 = new Knjiga("Atlas anatomije čoveka", "Frank H. Netter", 2018, 664, 8990);

let k2 = new Knjiga("Tri posleratna druga", "Đorđe Balašević", 2017, 285, 1500);

let k3 = new Knjiga("Ime vetra", "Patrik Rotfus", 2011, 712, 1299);

let k4 = new Knjiga("Gavran i najbolje priče", "Edgar Alan Po", 2021, 472, 1299);

let k5 = new Knjiga("Avanture nevaljale devojčice", "Jorge Mario Pedro Vargas Llosa", 2015, 368, 999);

//niz knjige
let knjige = [k1, k2, k3, k4, k5];

//provera metoda
console.log(k1);
console.log(k2);
console.log(k3);
console.log(k4);
console.log(k5);

k1.štampaj();
k2.štampaj();
k3.štampaj();
k4.štampaj();
k5.štampaj();

console.log(k1.obimna());
console.log(k2.obimna());
console.log(k3.obimna());
console.log(k4.obimna());
console.log(k5.obimna());

console.log(k1.skupa());
console.log(k2.skupa());
console.log(k3.skupa());
console.log(k4.skupa());
console.log(k5.skupa());

console.log(k1.dugačkoIme());
console.log(k2.dugačkoIme());
console.log(k3.dugačkoIme());
console.log(k4.dugačkoIme());
console.log(k5.dugačkoIme());

//autori sa dugačkim imenima
let btnDugIme = document.getElementById("dugIme");
let divDugImeRez = document.getElementById("dugImeRez");
btnDugIme.addEventListener("click", () => {
    let rez;
    for (let i = 0; i < knjige.length; i++) {
        if (knjige[i].dugačkoIme() == true) {
            rez = knjige[i];
            divDugImeRez.innerHTML += rez.ispis(knjige[i].autor);
        }
        
    }
    
});

//skupe i obimne knjige
let btnSkupOb = document.getElementById("skupOb");
let divSkupObRez = document.getElementById("skupObRez");
btnSkupOb.addEventListener("click", () => {
    let rez;
    for (let i = 0; i < knjige.length; i++) {
        if (knjige[i].skupa() == true && knjige[i].obimna() == true) {
            rez = knjige[i];
            divSkupObRez.innerHTML += rez.ispis(knjige[i].naslov);
        }
        
    }
});

//funkcija ukupnaCena
let ukupnaCena = niz => {
    let rez = 0;
    for (let i = 0; i < niz.length; i++) {
        rez += niz[i].cena;
        
    }
    return rez;
}

console.log(ukupnaCena(knjige));

//funkcija prosečnaCena
let prosečnaCena = niz => {
    let br = 0;
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        br++;
        suma += niz[i].cena;
        
    }
    return suma / br;
}

console.log(prosečnaCena(knjige));

//funkcija prosečnaStranica
let prosečnaStranica = niz => {
    let zb = 0;
    for (let i = 0; i < niz.length; i++) {
        zb += niz[i].cena / niz[i].brojStrana;
        
    }
    return zb / niz.length;
}

console.log(prosečnaStranica(knjige));