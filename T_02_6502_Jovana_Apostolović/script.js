//1. zadatak
let datum = new Date ();
let sati = datum.getHours ();
let minuti = datum.getMinutes ();
let ps = 9;
let ks = 17;
let pm = ps * 60;
let km = ks * 60;
let dk = 0;
//console.log(`${sati} : ${minuti}`);
let vm = sati * 60 + minuti;

for (let i = pm; i <= km; i++) {
    dk = km - vm;
    let s = Math.floor( dk / 60);
    let m = dk % 60;
    console.log(` Do kraja radnog vremena je ostalo ${s} sati i ${m} minuta`);

}
if (vm < pm) {
    console.log(`Radno vreme još nije počelo.`);
}

if (vm > km) {
    console.log(`Radno vreme je prošlo.`);
}

//2. zadatak
let p = 1500;
let poš = 5 * p;
let pop = 0;

if (p > 1000) {
    if (p < 2000) {
        pop = poš - poš * 0.05;
    }
    else {
        pop = poš - poš * 0.1;
    }
    console.log(`Cena sa popustom je ${pop} dinara`);
}
    
else {
    console.log(`Cena bez popusta je ${poš} dinara`);
}

//3. zadatak
let bRuža = 100;
let bKupaca = 25;
let ostatak = 0;
let dokupiti = 0;
if (bRuža % bKupaca != 0) {
    ostatak = bRuža % bKupaca;
    dokupiti = bKupaca - ostatak;
    console.log(`Treba dokupiti još ${dokupiti} ruže`);
}
else{
    console.log(`Ne treba da dokupi ruže`);
}

//4. zadatak
let n = 7;
let m = 21;
let suma = 0;
let br = 0;
for (let i = n; i <= m; i++) {
    if (i % 7 == 0 && i % 2 != 0) {
        suma = suma + i;
        br = br + 1;
    }
    
}
console.log(`Suma je ${suma}`);
console.log(`Broj brojeva je ${br}`);
console.log(`Proizvod ${suma} i ${br} je ${suma * br}`);

//5. zadatak
n = 5;
m = 14;
let zbir = 0;
let bb = 0;
let raz = 0;
for (let i = n; i <= m; i++) {
    if (i % 3 == 0 && i % 2 == 0) {
        zbir = zbir + i;
    }
    if (i % 10 == 3) {
        bb = bb + 1;
    }
}
raz = zbir - bb;
console.log(`Razlika je ${raz}`);