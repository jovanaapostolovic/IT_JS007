console.log("if_else_if");

let ocena = -4;
if (ocena == 5) {
    console.log("odličan 5");
    
}
else if (ocena == 4) {
    console.log("vrlo dobar 4");
    
}
else if (ocena == 3) {
    console.log("dobar 3");
    
}
else if (ocena == 2) {
    console.log("dovoljan 2");
    
}
else if (ocena == 1) {
    console.log("nedovoljan 1");
    
}
else {
    console.log("pogrešan unos");
}

console.log("Kod nakon if - else if");

/////////////////////////

let b1 = 9;
let b2 = 15;
let b3 = 27;

let maks = b1; //pretpostavka
//ako je pretpostavka loša, radim njen update
if (maks < b2) {
    maks = b2
}
//ako ovde stavimo else if, ukoliko je prvo tačno ovo neće ni proveravati 
if (maks < b3) {
    maks = b3;
}

document.body.innerHTML += `<p> ${maks} </p>`;

//////////////////////////

//zadatak 7
let poeni = 83;
if (poeni <= 50) {
    console.log("Učenik je pao, ocena 5");
    
}
else if (poeni <= 60) {
    console.log("ocena 6");

}
else if (poeni <= 70) {
    console.log("ocena 7");
    
}
else if (poeni <= 80) {
    console.log("ocena 8");

}
else if (poeni <= 90) {
    console.log("ocena 9");

}
else if (poeni <= 100) {
    console.log("ocena 10");

}
else {
    console.log("pogdešan unos");
}

//zadatak 8
let datum = new Date();
let dan = datum.getDay();
// console.log(dan);
// if (dan == 1) {
//     console.log("radni je dan");
    
// }
// else if (dan == 2) {
//     console.log("radni je dan");
    
// }
// else if (dan == 3) {
//     console.log("radni je dan");
    
// }
// else if (dan == 4) {
//     console.log("radni je dan");
    
// }
// else if (dan == 5) {
//     console.log("radni je dan");
    
// }
// //else if (dan == 6) {
//     //console.log("neradni je dan");}
    
// else {
//     console.log("neradni je dan");
    
// }
if (dan == 0) {
    console.log("danas je nedelja");
    
}
else if (dan == 6) {
    console.log("danas je subota");
    
}
else {
    console.log("danas je radni dan");
}

//zadatak 9
let vreme = datum.getHours();
if (vreme < 12) {
    console.log("dobro jutro");
    
}
else if (vreme < 18) {
    console.log("dobar dan");
    
}
else {
    console.log("dobro veče");
}

//zadatak 10
let dan1 = 17;
let mesec1 = 5;
let godina1 = 2021;
let dan2 = 23;
let mesec2 = 5;
let godina2 = 2021;
if (godina1 > godina2) {
    console.log(`raniji je datum ${dan2}.${mesec2}.${godina2}.`);
    
}
else if (godina1 < godina2) {
    console.log(`raniji je datum ${dan1}.${mesec1}.${godina1}.`);
    
}
else if (mesec1 > mesec2) {
        console.log(`raniji je datum ${dan2}.${mesec2}.${godina2}.`);
        
        }
else if (mesec1 < mesec2) {
        console.log(`raniji je datum ${dan1}.${mesec1}.${godina1}.`);
        
        }
else if(dan1 > dan2) {
            console.log(`raniji je datum ${dan2}.${mesec2}.${godina2}.`);
            
        }
else if (dan1 < dan2) {
            console.log(`raniji je datum ${dan1}.${mesec1}.${godina1}.`);
            
        }
else {
    console.log("datumi su isti");
}
//zadatak 11 Kristinin videti
let sati = 15;
if (sati < 9) {
    console.log("ne radi");
    
}
else if (sati >= 17) {
    console.log("ne radi");
}
else {
    console.log("radi");
}

// let rv1 = 9;
// let rv2 = 17;
// if (vreme <= rv1) {
// }
// else {
//     console.log("Ne radi");
// }

//zadatak 12
let p1 = 7;
let k1 = 10;
let p2 = 11;
let k2 = 14;

if (k1 < p2) {
    console.log("ne preklapaju se");
    
}
else if (k2 < p1) {
    console.log("ne preklapaju se");
    
}
else {
    console.log("preklapaju se");
}

//zadatak 13

let broj = 17;
if (broj % 2 == 0) {
    console.log("Broj je paran");
    
}
else {
    console.log("Broj je neparan");
}

//zadatak 14

if (broj % 3 != 0) {
    console.log("broj nije deljiv sa 3");
    
}
else {
    console.log("broj je deljiv sa 3");
}

//zadatak 16
broj = 0;
if (broj <= 0) {
    broj = broj - 1; //broj-- ili broj-=
    console.log(broj);
    
}
else {
    broj = broj + 1;
    console.log(broj);
}

//zadatak 17

let a1 = 45;
let a2 = 65;
let a3 = 35;
let max = a1;
if (max < a2) {
    max = a2;
    
}
if (max < a3) {
    max = a3;
    
}
console.log(`Najveći broj je ${max}`);

//najmanji
let min = a1;
if (min > a2) {
    min = a2;
    
}
if (min > a3) {
    min = a3;
    
}
console.log(`najmanji broj je ${min}`);

//srednji broj
let srednji = a1 + a2 + a3 - min - max;
console.log(`srednji broj je ${srednji}`);

//zadatak 18
//1. način
let s = 15.3;
console.log(s%1);
if (s%1 == 0) {
    console.log(`broj je ceo`);

}
else {
    console.log(`broj nije ceo`);
}
// 2. način
s = 14.5;
console.log(Math.floor(s)); // može i sa zaokruživanjem round i ceil
if (Math.floor(s) == s) {
    console.log("broj je ceo");    
}
else {
    console.log("broj nije ceo");
}

