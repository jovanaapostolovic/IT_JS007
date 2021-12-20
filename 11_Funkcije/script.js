console.log(`Funkcije`);

function zdravo() {
    console.log(`Zdravo svete!`);
}

zdravo();
console.log(`hello!`);
zdravo();

///////////////////////////

function štampaj(tekst) {
    console.log(tekst);
}
štampaj("Jelena");
štampaj("Stefan");
ime = "Sofija";
štampaj(ime);

///////////////////////////

function korisnik(ime, prezime) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime}`);
}
korisnik("Stefan", "Stanimirović");
korisnik("Jelena", "Matejić");

////////////////////////////////

function korisnikGodine(ime, prezime, godine) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godina`);

}
korisnikGodine("Jovana", "Apostolović", 27);
korisnikGodine("Pera", "Perić", 17);

//////////////////////////////////
let x = 5;
let y = 7;
let z = x + y;
console.log(z);

function zbirDvaBroja(x, y) {
    let zbir = x + y;
    console.log(zbir); // ispisuje vrednost
}

zbirDvaBroja(15, 12);
zbirDvaBroja(3, 9);

/////////////////////////////////

function vratiZbirDvaBroja(a, b) {
    let zbir = a + b;
    //console.log(`vrati zbir`);
    return zbir;
    console.log("vrati zbir iza return"); // ne izvršava se ništa posle return
}

let rez = vratiZbirDvaBroja(50, 70); 
console.log(rez);
rez = vratiZbirDvaBroja(16, 15);
console.log(rez);

let rez1 = vratiZbirDvaBroja(4, 6); // rez1 = 10
let rez2 = vratiZbirDvaBroja(5, 7); // rez2 = 12
let rez3 = vratiZbirDvaBroja(rez1, rez2); // rez3 = 22
console.log(rez3);

let rez4 = vratiZbirDvaBroja (4+5, 1+3);
console.log(rez4);
let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7, 9), 3);
console.log(rez5);

let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1, 2), vratiZbirDvaBroja(5, 3));
console.log(rez6);

////////////////////////////

function voda(temperatura) {
    console.log(`Uneli ste temperaturu od ${temperatura} stepeni C`);
    if (temperatura <= 0) {
        console.log(`voda je čvrstom agregatnom stanju`);
    }
    else if (temperatura >= 100) {
        console.log(`voda je u gasovitom agregatnom stanju`);
    }
    else {
        console.log(`voda je u tečnom agregatnom stanju`);
    }
}

voda(3);
voda(100);
//2.Zadatak
function razlikaDvaBroja(b1, b2) {
    let razlika = b1 - b2;
    return razlika;
}
rez = razlikaDvaBroja(12, 6);
console.log(rez);

function proizvodDvaBroja(b1, b2) {
    let proizvod = b1 * b2;
    return proizvod;
}
rez = proizvodDvaBroja(12, 6);
console.log(rez);

function količnikDvaBroja(b1, b2) {
    let količnik = b1 / b2;
    return količnik;
}
rez = količnikDvaBroja(12, 6);
console.log(rez);

//2. Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function računaj(br1, br2, operacija) {
    let rezultat = "";
    if (operacija == "+") {
        rezultat = br1 + br2;
        console.log(rezultat);
    }
    else if (operacija == "-") {
        rezultat = br1 - br2;
        console.log(rezultat);
    }
    else if (operacija == "*") {
        rezultat = br1 * br2;
        console.log(rezultat);
        
    }
    else if (operacija == "/") {
        if (br2 == 0) {
            rezultat = "Deljenje nulom nije dozvoljeno";
        }
        else{
            rezultat = br1 / br2;
            
        }
        console.log(rezultat);
    }
    else {
        rezultat = "Pogrešan unos";
    }
}
računaj (5, 4, "+");
računaj (5, 4, "-");
računaj (5, 4, "*");
računaj (5, 2, "/");
računaj (5, 2, "%");
računaj (5, 0, "/");

///////////////
// primer 1 za scope i let
if (true) {
    let test = "zdravo";
    if (test == "zdravo") {
        console.log(test); // ovde vidi test
    }
}
// console.log(test); // ne vidi test van skupa u kom je definisan

//primer 2 za scope i let
if (true) {
    let test = "zdravo"; // linija *
    console.log(test); // ispisuje zdravo koji je dodeljen u liniji *
    if (true) {
        let test = "hello"; // linija **
        console.log(test); // ovde vidi test iz linije ** jer je u to scope
    }
    console.log(test); // ovde vidi test iz linije *
}
// console.log(test); // ne vidi test

//primer 3
if (true) {
    let test = "zdravo"; // linija *
    console.log(test); // ispisuje zdravo koji je dodeljen u liniji *
    if (true) {
        test = "zzz";
        console.log(test);
        // let test = "hello"; // linija **
        console.log(test); // ovde vidi test iz linije ** jer je u to scope
    }
    console.log(test); // ovde vidi test iz linije *
}
// console.log(test); // ne vidi test

//proba = "proba"; // ovako definisana promenljiva je var
if (true) {
    var proba = "proba"; // var važi i van scope, a let samo u okviru scope
    // ako ne stavimo let i var ispred promenljive, računa se da je var
}
console.log(proba);

if (true) {
    var promenljiva = "promenljiva"
    if (true) {
        var promenljiva = "hmmm"; // var promenljiva se posmatra na globalnom nivou
        console.log(promenljiva);
    }
    console.log(promenljiva);
}

//3.Zadatak Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
    let vrednost = 0; // ili ""
    if (n % 2 != 0) {
        //vrednost = "tačno";
        return true;
    }
    else {
        //vrednost = "netačno";
        return false; // može više return, jer čim se prvi izvrši, tu staje funkcija, drugi se ne vrši
    }
    //return vrednost; // ja probala
}
let nep = neparan(13);
console.log(nep);

function neparan1(n) {
    let rez = true;
    if (n % 2 == 0) {
        rez = false;
    }
    return rez;
}
let nep1 = neparan1(6);
console.log(nep1); 

function neparan2(n) {
    return n % 2 != 0;
}
let nep2 = neparan2(165);
console.log(nep2);

///////////////////

// 4. Zadatak Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
function maks2(a, b) {
    let veći = 0;
    if (a > b) {
        veći = a;
    }
    else if (b > a) {
        veći = b;
    }
    else {
        veći = `${a} i ${b} su jednaki`;
    }
    return veći;
    
}

function maks4(a, b, c, d) {
    let najveći = 0;
    if (a > b && a > c && a > d) {
        najveći = a;
    }
    else if (b > a && b > c && b > d) {
        najveći = b;
    }
    else if (c > a && c > b && c > d) {
        najveći = c;
    }
    else if (d > a && d > b && d > c) {
        najveći = d;
    }
    else {
        najveći = `Nema najvećeg, neki od ponuđenih su jednaki`;
    }        
    return najveći;
}
let veći = maks2(3, 3);
console.log(veći);
let najveći = maks4(10, 6, 10, 3);
console.log(najveći);

//Jelenin
function maks4_jelena(a, b, c, d) {
    let max1 = maks2(a, b); //vrati mi veći između a i b
    let max2 = maks2(c, d); // vrati veći između c i d
    let max = maks2(max1, max2);
    return max;
}
let maks4broja = maks4_jelena(5,7,2,9);
console.log(maks4broja);

//Aleksandrov
function maks4_aleksandar(a, b, c, d) {
    let max = maks2(maks2(a,b), maks2(c,d));
    //return maks2(maks2(a,b), maks2(c,d)); //u jednoj liniji
    return max;
}
let maks4brojaa = maks4_aleksandar (1,6,7,17);
console.log(maks4brojaa);

//5. zadatak Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function slika(putanja) {
    document.body.innerHTML += `<img src="${putanja}">`;
}

slika(`https://rs.n1info.com/wp-content/uploads/2016/06/kafa-222414250-76196.jpeg`);

//6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
function unetaBoja(boja) {
    document.body.innerHTML += `<p style="color:${boja};">paragraf</p>`;
}

unetaBoja(`red`);
unetaBoja("green");


//7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
function sedmiDan(n) {
    if (n % 7 == 0) {
        console.log(`nedelja`);
    }
    else if (n % 7 == 1) {
        console.log(`ponedeljak`);
    }
    else if (n % 7 == 2) {
        console.log(`utorak`);
    }
    else if (n % 7 == 3) {
        console.log(`sreda`);
    }
    else if (n % 7 == 4) {
        console.log(`četvrtak`);
    }
    else if (n % 7 == 5) {
        console.log(`petak`);
    }
    else if (n % 7 == 6) {
        console.log(`subota`)
    }
}

sedmiDan(3);
sedmiDan(0);
sedmiDan(36);
sedmiDan(14);

//8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.

function deljivSaTri(n, m) {
    let brojBrojeva = 0;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            brojBrojeva = brojBrojeva + 1;
        }
    }
    console.log(`takvih brojeva ima ${brojBrojeva}`);
}
deljivSaTri(1, 9);

//14. Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.
function petPuta(rečenica, boja) {
    for (let i = 5; i <= 10; i++) {
        document.body.innerHTML += `<p style="font-size:${i*10}px; color:${boja};">${rečenica}</p>`;
        
    }
}
petPuta(`neka rečenica`, `purple`);

//15. Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
function praksa(n, a, d) {
    let suma = a;
    for (let i = 1; i <= n; i++) {
        if (i >= 2) {
            suma += a + d;
        }
    }
    return suma;    
}
let novac = praksa(3, 50000, 5000);
console.log(novac);

//jelena
let n = 3;
let a = 5000;
let d = 200;
//1. mesec 5000
//2. mesec 5200
//3. mesec 5200
let ukupno = a * n + d * (n - 1); //plate plus povišice
let ukupno1 = n * (a + d) - d; //plate sa pov. - jedna povišica koju nemamo 1. meseca
let ukupno2 = a + (n - 1) * (a + d); //plata za 1. mesec + plata za preostalih n-1 meseci

//16. 
function vreme(t, p, n) {
    let čekaj = n + p - t;
    if (p > t || t >= p + n) {
        console.log(`Burke samo piči`);
    }
    else {
        console.log(`Burke treba da krene kroz ${čekaj} sekundi da ne bi čekao most`);
    }
}
vreme(110, 16, 16);