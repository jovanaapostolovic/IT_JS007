console.log("if-else grananje");

if (true) {
    console.log("uslov je ispunjen");

}
else {
    console.log("uslov nije ispunjen");
    
}


if (false) {
    console.log("uslov je ispunjen");

}
else {
    console.log("uslov nije ispunjen");
    
}

//////////////////////////////

a = 10;
b = 7;
if(a<b) {
    console.log("broj " + a + " je strogo manji od broja " + b);
}
else {
    console.log(`broj ${a} je veći ili jednak broju ${b}`);

}
////////////////////////////////

let god = 27;
if(god >= 18) {
    console.log("osoba je punoletna");

}
else {
    console.log("osoba je maloletna");
}


//////////
//zadatak 1
a = 5;
b = 8;
if (a < b) {
    console.log(`${a} je manje ii jednako od ${b}`);
}
else {
    console.log("broj a je veći ili jednak broju b");
}

if (a > b) {
    console.log(`${a} je veće od ${b}`);
}

//zadatak 2
let temp = -6;
if (temp >= 0) {
    console.log("temperatura je u plusu");
    document.body.innerHTML =`<p style="color: red;"> temperatura ${temp} stepeni je u plusu</p>`
}
else {
    console.log("temperatura je u minusu")
    document.body.innerHTML =`<p style="color: blue;"> temperatura ${temp} stepeni je u minusu</p>`
}

//zadatak 3
let pol = "m";
if (pol == "m") {
    //Prikaži avatar muškarca
    document.body.innerHTML += `<img src="Slike/male.jpg">`
}
else {
    //Prikaži avatar žene
    document.body.innerHTML += `<img src="Slike/female.jpg">`
}

//zadatak 4
let datum = new Date();
let sati = datum.getHours();
if (sati >= 12) {
    console.log("Popodne je.")
}
else {
    console.log("Jutro je.")
}

//zadatak 5
let godina = datum.getFullYear();
let godinaRođenja = 1994;
if (godina - godinaRođenja >= 18) {
    console.log("Osoba je punoletna.");
}
else {
    console.log("Osoba je maloletna.");
}

//Zadatak 6
let b1 = 9;
let b2 = 15;
let b3 = 7;

let maks = b1; //pretpostavka
//ako je pretpostavka loša, radim njen update
if (maks < b2) {
    maks = b2
}
    
if (maks < b3) {
    maks = b3;
}

document.body.innerHTML += `<p> ${maks} </p>`;
