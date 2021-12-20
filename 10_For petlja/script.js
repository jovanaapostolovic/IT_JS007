console.log(`For petlja`);
let a = 1;
while (a <= 5) {
    console.log(`na redu je broj ${a}`);
    a++;
}
//1)
for (let i = 1; i <= 5; i++){
    console.log(`for petlja iteracija ${i}`);
  
}
//2)
i = 1;
for (i; i <= 5; i++){
    console.log(`for petlja iteracija ${i}`);
  
}
//3)
i = 1;
for (; i <= 5; i++){
    console.log(`for petlja iteracija ${i}`);
  
}

//2. zadatak -od 20 do 1

for (i = 20; i >= 1; i--) {
    console.log(`broj ${i}`);
    
}

console.log(`3. zadatak -parni od 1 do 20`); 

//1)
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
        
    }
    
}

//2)
for (i = 2; i<= 20; i+=2) {
    console.log(i);
    
}

/*može i 
for (i = 2; i<= 20; i++, i++) {
    console.log(i);
    
}*/

for (let i = 1, k = 5; i <= k; i++) {
    console.log(i);
    
}

////////////
console.log(`5. zadatak -odrediti sumu brojeva od 1 do n`);
let n = 100;
let suma = 0;
for (i = 1; i <= n; i++) {
    suma += i;
   
}
console.log(suma);

///////////////
console.log(`7. zadatak -proizvod od n do m`);
n = 2;
let m = 6;
let p = 1;
for (i = n; i <= m; i++) {
    p *= i; // p = p * i;
    
}
console.log(`proizvod brojeva od ${n} do ${m} je ${p}`);

//////
//zadatak 9
//<img src="Slike/1.jpg">
//<img src="Slike/2.jpg">
//<img src="Slike/3.jpg">

// for (let i = 1; i <= 3; i++) {
//     document.body.innerHTML +=`<img src="Slike/${i}.jpg">`;
    
// }

// ////zadatak 11. -prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150
// let br = 0;
// for (let i = 5; i <= 150; i++) {
//     if (i % 13 == 0) {
//         br++;
//     }

// }
// console.log(`ima ${br} brojeva deljivih sa 13 u intervalu od 5 do 150`);

//zadatak 12 -aritmetička sredina brojeva od n do m
n = 10;
m = 20;
suma = 0;
br = 0;
let arSredina
for (let i = n; i <= m; i++) {
    suma += i;
    br++;
}
arSredina = suma / br;
console.log(`aritmetička sredina brojeva od ${n} do ${m} je ${arSredina}`);

//zadatak 15 -prebrojati i izračunati sumu brojeva od n do m čija je poslednja cifra 4
n = 5;
m = 56;
br = 0;
suma = 0;
for (let i = n; i <= m; i++) {
    if (i % 10 == 4) {
        br++;
        suma += i;
        
    }
    
}
console.log(`brojeva od ${n} do ${m} koji se završavaju cifrom 4 ima ${br}, a njihova suma je ${suma}`);


//zadatak 16 - suma brojeva od n do m koji nisu deljivi brojem a
n = 4;
m = 24;
a = 7;
suma = 0;
for (let i = n; i <= m; i++) {
    if (i % a != 0) {
        suma += i;
    }
    
}
console.log(`suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`);

// zadatak 4 - ispisati dvostruku vrednost brojeva od 5 do 15
for (let i = 5; i <= 15; i++) {
    console.log(i * 2);
}

// zadatak 18 sa koliko brojeva je deljiv uneti broj k
//for petljom
let k = 4;
br = 0;
for (let i = 1; i <= k; i++) {
    if (k % i == 0) {
        br++;
        
    }
    
}
console.log(`broj ${k} je deljiv sa ${br} br.`);

//while petljom
br = 0;
i = 1;
while (i <= k) {
    if (k % i == 0) {
        br++;
    }
    i++;
    
}

console.log(`broj ${k} je deljiv sa ${br} br.`);

//19. zadatak odrediti da li je k prost broj
//nadovezujemo se na prethodni zadatak
if (br == 1) {
    console.log(`broj nije ni prost, ni složen`);
    
}
else if (br == 2) {
    console.log(`broj je prost`);
    
}
else {
    console.log(`broj je složen`);
}

//20. zadatak
// for (let i = 1; i <= 6; i++) {
//     if (i % 2 == 0) {
//         document.body.innerHTML += `<table style="border: solid;"><tr class= "obojen"><td>Tekst</td><td>Tekst</td></tr></table>`;
//         document.body.inn
        
//     }
//     else {
//         document.body.innerHTML += `<table style="border: solid;"><tr><td>Tekst</td><td>Tekst</td></tr></table>`;

//     }
    
// }

let tabela = `<table border="1">`;
for (let red = 1; red <= 6; red++) {
   if (red % 2 == 0) {
    tabela +=
    `
    <tr class="roze">
    <td>Tekst</td>
    <td>Tekst</td>
    </tr>
    `;
    }
else {
    tabela +=
    `
    <tr>
    <td>Tekst</td>
    <td>Tekst</td>
    </tr>
    `;

}
}
tabela += `</table>`;
document.body.innerHTML += tabela;