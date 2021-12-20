let datum = new Date();
let sati = datum.getHours();
//1. način
if (sati < 9) {
    console.log(`još nije otvoreno`);
}
else if (sati >= 17) {
    console.log(`zatvoreno je`);
}
else {
    console.log(`otvoreno je`);
}
//2. način
if (sati >= 9 && sati < 17) {
    console.log(`radi`);
}
// else {
//     console.log(`ne radi`);
// }
else if (sati < 9) {
    console.log(`još nije otvoreno`);
}
else { // sati >= 17
    console.log(`zakasnili smo`);
}

/////////////

function suma(a, b) { // definicija f-je
    return a + b;
}

console.log(suma(4, 5)); //9 poziv f-je
console.log(suma(1, 0)); // poziv f-je

// Anonimne funkcije

let suma2 = function (a, b) {
    return a + b;
}
console.log(suma2(6, 6));

// Arrow funkcije - skraćen zapis anonimnih f-ja

let suma3 = (a, b) => {
    return a + b;
}
console.log(suma3(5, 3));

//primeri
//arrow f-ja za ispis poruke
let hello = () => {
    console.log(`Hello world!`);
}

hello();

//
let pozdrav = (ime, prezime) => {
console.log(`Zdravo ${ime} ${prezime}`);
}
pozdrav(`Kristijan`, `Zdravković`);
pozdrav(`Vladan`, `Stojić`);

//arrow f-ja kojoj se prosleđuju ime i godine korisnika, a ona ispisuje ime i da li je korisnik punoletan ili ne

let ispis = (ime, godine) => {
    if (godine < 18) {
        let poruka = `korisnik ${ime} je maloletna osoba`;
        document.body.innerHTML += `<p style="color:blue;">${poruka}</p>`;
    }
    else {
        let poruka = `korisnik ${ime} je punoletna osoba`;
        document.body.innerHTML += `<p style="color:green;">${poruka}</p>`;
    }
}

ispis(`Pera`, 28);
ispis(`Mika`, 16);

//3. zadatak
// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let neparan = (n) => {
    if (n % 2 != 0) {
        return true;
    }
    else {
        return false;
    }

}
console.log(neparan(4));
console.log(neparan(5)); 

//stefan
let paran = n => (n % 2 == 0);
 console.log(paran(3));
 console.log(paran(4));

//4. zadatak
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
let maks2 = (b1, b2) => {
    if (b1 >= b2) {
        return b1;
    }
    else {
        return b2;
    }
}
console.log(maks2(4, 13));
console.log(maks2(16, 5));

//stefan
let max2 = (a, b) => (a > b) ? a : b;

// _ ? _ : _
// ako je tačno ? onda je ovo : u suprotnom je ovo
//
// !(a > b)
// a + b, a && b
console.log(max2(16, 16));
console.log(max2(17, 6));

let maks4 = (b1, b2, b3, b4) => {
    let najveći = 0;
    if (b1 > b2 && b1 > b3 && b1 > b4) {
        najveći = b1;
    }
    else if (b2 > b1 && b2 > b3 && b2 > b4) {
        najveći = b2;
    }
    else if (b3 > b1 && b3 > b2 && b3 > b4) {
        najveći = b3;
    }
    else if (b4 > b1 && b4 > b2 && b4 > b3) {
        najveći = b4;
    }
    else {
        najveći = `Nema najvećeg, neki od ponuđenih su jednaki`;
    }        
    return najveći;
}
console.log(maks4(2, 6, 13, 1));
console.log(maks4(13, 6, 13, 1));

//stefan
let max4 = (a, b, c, d) => max2(max2(a, b), max2(c, d));

let max4DN = (a, b, c, d) => max2(max2(max2(a, b), c), d);

console.log(max4DN(2, 17, -14, -23)); 

//5. zadatak
// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
let slika = (putanja) => {
    document.body.innerHTML += `<img src="${putanja}">`;
}
slika("https://www.travelmagazine.rs/wp-content/uploads/2020/05/claudia-altamimi-PSD6ffClG0w-unsplash-scaled-e1590158863557.jpg");

//stefan
let slika2 = (putanja) => {
    return `<img src="${putanja}">`;
}
document.body.innerHTML += slika2("https://www.travelmagazine.rs/wp-content/uploads/2020/05/claudia-altamimi-PSD6ffClG0w-unsplash-scaled-e1590158863557.jpg");

let slika3 = (putanja) => `<img src="${putanja}">`; //kada ima samo return skraćeno zapisujemo bez {}
document.body.innerHTML += slika3("https://www.travelmagazine.rs/wp-content/uploads/2020/05/claudia-altamimi-PSD6ffClG0w-unsplash-scaled-e1590158863557.jpg");

let slika4 = putanja => `<img src="${putanja}">`; // kada imamo samo jedan parametar skraćujemo
document.body.innerHTML += slika4("https://www.travelmagazine.rs/wp-content/uploads/2020/05/claudia-altamimi-PSD6ffClG0w-unsplash-scaled-e1590158863557.jpg");


//6. zadatak
// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
let bojaTeksta = (boja) => {
    document.body.innerHTML += `<p style="color:${boja};">tekst paragrafa</p>`
}
bojaTeksta(`green`);
bojaTeksta(`red`);

//7. zadatak 
// Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
let sedmiDan = n => (n % 7 == 0) ? "ned" : (n % 7 == 1) ? "pon" : (n % 7 == 2) ? "uto" : (n % 7 == 3) ? "sre" : (n % 7 == 4) ? "čet" : (n % 7 == 5) ? "pet" : "sub";
//     if (dan == 0) {
//         return "nedelja"
//     }
//     if (dan == 1) {
//         return "pon"
//     }
//     if (dan == 2) {
//         return "uto"
//     }
//     if (dan == 3) {
//         return "sre"
//     }
//     if (dan == 4) {
//         return "čet"
//     }
//     if (dan == 5) {
//         return "pet"
//     }
//     if (dan == 6) {
//         return "sub"
//     }


// }
console.log(sedmiDan(12));

//8. zadatak
// Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.
let deljivSaTri = (n, m) => {
    let brojBrojeva = 0;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            brojBrojeva = brojBrojeva + 1;
        }
    }
    return brojBrojeva;
}
console.log(`Ovakvih brojeva ima ${deljivSaTri(3, 12)}`);

//9. zadatak 
// Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.
let sumiraj = (n, m) => {
    let suma = 0;
    for (let i = n; i <= m; i++) {
        suma += i;
    }
    return suma;
}
console.log(sumiraj(3, 7));
console.log(sumiraj(2, 5));

//10. zadatak
// Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.
let množi = (n, m) => {
    let proizvod = 1;
    for (let i = n; i <= m; i++) {
        proizvod = proizvod * i; 
    }
    return proizvod;
}
console.log(množi(2, 4));
console.log(množi(1,5));

//11.
// Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.
let arSredina = (n, m) => {
    let zbir = 0;
    let brBrojeva = 0;
    for (let i = n; i <= m; i++) {
        zbir += i;
        brBrojeva += 1;
    }
    return zbir / brBrojeva;
}
console.log(arSredina(10, 15));

//12. 
// Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
let arSredina3 =(n, m) => {
    zbir = 0;
    brBrojeva = 0;
    for (let i = n; i <= m; i++) {
        if (i % 10 == 3) {
            zbir += i;
            brBrojeva += 1;
        } 
    }
    return zbir / brBrojeva;
}
console.log(arSredina3(1, 30));

// 13.
// Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
let veličinaFonta = v 