// 1. Zadatak
// Naći i ispisati najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora.
let a = -26;
let b = 10;
let c = 18;

if (a > b && a > c) {
    console.log(`Najveći broj od brojeva ${a}, ${b} i ${c} je ${a}`);  
}

if (b > a && b > c) {
    console.log(`Najveći broj od brojeva ${a}, ${b} i ${c} je ${b}`);  
}

if (c > a && c > b) {
    console.log(`Najveći broj od brojeva ${a}, ${b} i ${c} je ${c}`);  
}

// 2. Zadatak
// Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih. 

let temp = 55;

if (temp < -15 || temp > 40) {
    document.body.innerHTML += `Ekstremna temperatura!`;
}

// 3. Zadatak
//Ispitati da li je uneta godina prestupna. Godina je prestupna ako je deljiva sa 4 i važi jedno od sledeća dva pravila: godina nije deljiva sa 100 ili je deljiva sa 400. 

let god = 1864;
if (god % 4 == 0 && (god % 100 != 0 || god % 400 == 0)) {
    document.body.innerHTML += `<p>${god}. je prestupna godina.</p>`;
}
else {
    document.body.innerHTML += `<p>${god}. nije prestupna godina.</p>`;
}

// 4. Zadatak
// Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren. 

let datum = new Date();
let danUNedelji = datum.getDay();
let sati = datum.getHours();

if (danUNedelji == 6 && danUNedelji == 0) {
    if (sati < 18 && sati > 10) {
        console.log(`Butik radi.`);
    }
    //else {
    //    console.log(`Butik ne radi`);
    //}  
}
else if (sati < 20 && sati > 9) {
    console.log(`Butik radi.`);  
}
else {
    console.log(`Butik ne radi.`);
}
console.log(`Danas je ${danUNedelji}. dan u nedelji.`);

// 5. Zadatak 
// Za preuzeti datum i mesec sa računara, odrediti koliko dana ima do kraja tekućeg meseca. Rezultat ispisati na ekranu i u konzoli. 

let danUMesecu = datum.getDate();
let mesec = datum.getMonth();
let godina = datum.getFullYear();
/*
let jan = 31; //0
let mar = 31; //2
let apr = 30; //3
let maj = 31; //4
let jun = 30; //5
let jul = 31; //6
let avg = 31; //7
let sep = 30; //8
let okt = 31; //9
let nov = 30; //10
let dec = 31; //11
if (godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0)) {
    let feb = 29;
}
else {
    feb = 28;
}
*/
//console.log(`${mesec}`); // decembar je 11. mesec

let daniDoKrajaMeseca = 0;
if (mesec == 0 || mesec == 2 || mesec == 4|| mesec == 6|| mesec == 7|| mesec == 9|| mesec == 11) {
    daniDoKrajaMeseca = 31 - danUMesecu;
}
else if (mesec == 3 || mesec == 5|| mesec == 8|| mesec == 10) {
    daniDoKrajaMeseca = 30 - danUMesecu;
}
else if (godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0)) {
    daniDoKrajaMeseca = 29 - danUMesecu;
}
else {
    daniDoKrajaMeseca = 28 - danUMesecu;
}
console.log(`Do kraja meseca ima još ${daniDoKrajaMeseca} dan/-a.`);
document.body.innerHTML += `<p>Do kraja meseca ima još ${daniDoKrajaMeseca} dan/-a.</p>`

// 6. Zadatak 
// Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m2 površine lokala. Za posmatrani kafić su dati podaci da ima v m2 i da je u njemu trenutno n gostiju. Brojeve v i n određujete sami. Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava propisane mere. Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal da bi mera bila zadovoljena. 

let v = 64;
let n = 23;
let dozvoljenoGostiju = v / 3;
let moraNapustiti
if (n <= dozvoljenoGostiju) {
    document.body.innerHTML += `<p style="color:green";>DA</p>`;
}
else {
    document.body.innerHTML += `<p style="color:red";>NE</p>`;
    let ljudiKojiMorajuNapustiti = n - Math.floor(dozvoljenoGostiju);
    document.body.innerHTML += `<p style="color:red";>Potrebno je da ${ljudiKojiMorajuNapustiti} ljudi napusti lokal.</p>`;
}

// 7. Zadatak 
/* Za uneto početno i krajnje radno vreme dva lekara, ispitati koliko sati i minuta se
njihove smene preklapaju.
Ulaz (vrednosti koje samostalno dodeljujete promenljivama) :
● Početak radnog vremena u satima i minutima za prvog lekara (pocSatLek1 i
pocMinLek1)
● Kraj radnog vremena u satima i minutima za prvog lekara (krajSatLek1 i
krajMinLek1)
● Početak radnog vremena u satima i minutima za drugog lekara (pocSatLek2 i
pocMinLek2)
● Kraj radnog vremena u satima i minutima za drugog lekara (krajSatLek1 i
krajMinLek1)
Izlaz (vrednosti koje treba ispisati na ekranu i proizvoljno ih stilizovati) :
● Početak radnog vremena prvog lekara (izraženo u satima i minutima)
● Kraj radnog vremena prvog lekara (izraženo u satima i minutima)
● Početak radnog vremena drugog lekara (izraženo u satima i minutima)
● Kraj radnog vremena drugog lekara (izraženo u satima i minutima)
● Vreme koje su prvi lekar i drugi lekar zajedno proveli na poslu (izraženo u
satima i minutima). Ukoliko nema preklapanja u radnim vremenima ova dva
lekara, na ekranu ispisati da nema preklapanja.*/

let pocSatLek1 = 10;
let pocMinLek1 = 0;
let krajSatLek1 = 22;
let krajMinLek1 = 0;
let pocSatLek2 = 11;
let pocMinLek2 = 0;
let krajSatLek2 = 12;
let krajMinLek2 = 5;

document.body.innerHTML += `<p style="color:blue";>Početak radnog vremena prvog lekara je u ${pocSatLek1} sati i ${pocMinLek1} minuta.</p>`;
document.body.innerHTML += `<p style="color:purple";>Kraj radnog vremena prvog lekara je u ${krajSatLek1} sati i ${krajMinLek1} minuta.</p>`;
document.body.innerHTML += `<p style="color:green";>Početak radnog vremena drugog lekara je u ${pocSatLek2} sati i ${pocMinLek2} minuta.</p>`;
document.body.innerHTML += `<p style="color:brown";>Kraj radnog vremena drugog lekara je u ${krajSatLek2} sati i ${krajMinLek2} minuta.</p>`;

let p1 = pocSatLek1 * 60 + pocMinLek1;
let k1 = krajSatLek1 * 60 + krajMinLek1;
let p2 = pocSatLek2 * 60 + pocMinLek2;
let k2 = krajSatLek2 * 60 + krajMinLek2;
let p = 0;
let s = 0;
let m = 0;

if (k1 > p2 && k1 < k2) {
    p = k1 - p2;
    s = Math.floor(p / 60);
    m = p % 60;
    document.body.innerHTML +=`<p>Radno vreme im se preklapa ${s}h i ${m}min.</p>`
}
else if (p1 > p2 && p1 < k2) {
    p = k2 - p1;
    s = Math.floor(p / 60);
    m = p % 60;
    document.body.innerHTML +=`<p>Radno vreme im se preklapa ${s}h i ${m}min.</p>`
}
else if (p1 < p2 && k1 > k2) {
    p = k2 - p2;
    s = Math.floor(p / 60);
    m = p % 60;
    document.body.innerHTML +=`<p>Radno vreme im se preklapa ${s}h i ${m}min.</p>`
}
else if (p1 > p2 && k1 < k2) {
    p = k1 - p1;
    s = Math.floor(p / 60);
    m = p % 60;
    document.body.innerHTML +=`<p>Radno vreme im se preklapa ${s}h i ${m}min.</p>`
}
else {document.body.innerHTML +=`<p>Nema preklapanja!</p>`}

// 8. Zadatak 
// Za uneta dva broja i karakter napraviti kalkulator koji vrši:
//● Množenje ta dva broja ukoliko je uneto slovo ’m’
//● Deljenje ukoliko je uneto slovo ’d’
//● Sabiranje ukoliko je uneto slovo ’s’
//● Oduzimanje ukoliko je uneto slovo ’o’

let br1 = 2;
let br2 = 5;
let sl = "m";
let rez = 0;

if (sl === "m") {
    rez = br1 * br2;
}
else if (sl === "d") {
    rez = br1 /br2;
}
else if (sl === "s") {
    rez = br1 + br2;
}
else if (sl === "o") {
    rez = br1 - br2;
}
else {
    rez = "Nije unet odgovarajući karakter!"
}
console.log(`${rez}`);

 

