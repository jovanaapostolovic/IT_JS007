// 9. Zadatak
// Ispisati dvostruku vrednost brojeva od 5 do 15.
let d = 0;
for (let i = 5; i <= 15; i++) {
    d = i * 2;
    console.log(`${d}`);
}

// 10. Zadatak
// Odrediti sumu brojeva od n do m .
let n = 2;
let m = 5;
let suma = 0;
for (i = n; i <= m; i++) {
    suma = suma + i;
    
}
console.log(`Suma brojeva od ${n} do ${m} je ${suma}`);

// 11. Zadatak
// Odrediti sumu kvadrata brojeva od n do m.
n = 3;
m = 5;
let sk = 0;
for (let i = n; i <= m; i++) {
    sk = sk + i * i;
    
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${sk}`);

// 12. Zadatak
// Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.
n = 20;
m = 100;
let p = 1;
for (let i = n; i <= m; i++) {
    if (i % 11 == 0) {
        p = p * i;
    }
    
}
console.log(`Proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100 je ${p}`);

// 13. Zadatak
// Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.
n = -10;
m = 10;
let poz = 0;
let neg = 0;
for (let i = n; i <= m; i++) {
    if (i > 0) {
        poz = ++poz;
    }
    if (i < 0) {
        neg = ++neg;
    }
    
}
console.log(`Od ${n} do ${m} ima ${poz} pozitivnih i ${neg} negativnih brojeva`);

// 14. Zadatak
// Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.
let bb = 0;
for (let i = 5; i <= 50; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        bb = ++bb;
    }
    
}
console.log(`Od 5 do 50 ima ${bb} brojeva koji su deljivi sa 3 ili sa 5`);

// 15. Zadatak
// Odrediti proizvod brojeva od n do m koji su deljivi brojem a.
n = 8;
m = 15;
let a = 3;
p = 1;
for (let i = n; i <= m; i++) {
    if (i % a == 0) {
        p = p * i;
    }
    
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi sa ${a} je ${p}`);

// 16. Zadatak
// Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.
// Npr. za broj 15, delioci su 1, 3, 5 i 15, što znači da ima 2 delioca koji su deljivi brojem
// 3 i neparni su (to su brojevi 3 i 15)
// Npr. za broj 6, delioci su 1, 2, 3, 6, što znači da ima 2 delioca koji su deljivi brojem 3
// (3 i 6), ali samo jedan od njih je neparan (broj 3), te je rešenje ovog primera 1.
let x = 15;
let ddn = 0;
for (let i = 1; i <= x; i++) {
    if (x % i == 0 && i % 3 == 0 && i % 2 == 1) {
        ddn = ++ddn;
    }
    
}
console.log(`Uneti broj ${x} ima sledeći broj delilaca koji su deljivi brojem 3 i neparni su: ${ddn}`);

// 17. Zadatak
//Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu.
let unetiBroj = 2344;
let zbirCifara = 0;
while (unetiBroj >= 1) {
    zbirCifara += unetiBroj % 10;
    unetiBroj = Math.floor(unetiBroj / 10);
}

console.log(`${zbirCifara}`);
document.body.innerHTML += `<p>Zbir cifara unetog celog broja je ${zbirCifara}</p>`

// 18. Zadatak
// Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je
// prikazano na slici.
let ul = `<ul>`;
let brr = 0;
for (let li = 1; li <= 10; li++) {
    brr = ++brr;
    if (li % 3 == 0) {
        ul += `
        <ul>
         <li style="color:purple;">Element ${brr}</li>
        </ul> `;
    }    
        
    else {
        ul += `
        <li>Element ${brr}</li>`;
    }
    
}
ul += `</ul>`;
document.body.innerHTML += ul;

// 19. Zadatak
// Kreirati 64 span elemenata i rasporediti ih kao na slici, tako da elementi izgledaju
// kao polja šahovske table.
// U realizaciji ovog zadatka koristiti for petlju.

// let div = `<div>`;
// brr = 0;
// for (let span = 1; span <= 64; span++) {
//     brr = ++brr;
    
//     if (span % 2 == 0) {
//         div += `
//         <span style="background-color:black; color:white;">${brr}</span>`;   
//     }
//     else {
//         div += `
//         <span style="border:solid black">${brr}</span>`;
//     }
    
    
// }
// div += '</div>';
// document.body.innerHTML += div;
brr = 0;
let div = `<div style="display: inline; border: solid; width: 50px; height: 150px;">`;

for (let polje = 1; polje <= 64; polje++) {
    brr = ++brr;
    if (polje % 2 == 0) {
        div += `
        <span style="background-color:black; color:white;">${brr}</span>`;   
    }
    else {
        div += `
        <span>${brr}</span>`;
    }
    if (polje <= 8 == 0) {
        div += `<br>`
        
    }
}  
 
div += `</div>`
document.body.innerHTML += div;

brr = 1;
let table = `<table style="border: solid;">`;
for (let i = 1; i <= 8; i++) {
    table += `<tr>`;
    for (let j = 1; j <= 8; j++) {
        if (j % 2 == 0) {
            table += `<td style="background-color: black; color: white;">${brr}</td>`; 
        } else {
            table += `<td style="background-color: white;">${brr}</td>`;
        }
        brr = ++brr;
    }
    table += `</tr>`;
}
table += `</table>`;
document.body.innerHTML += table;