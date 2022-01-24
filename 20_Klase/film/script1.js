import {Film} from "./film.js";

let f1 = new Film("Lajanje na zvezde", "Zdravko Šotra", 1998, [8.2, 9.3, 7.9]);

let f2 = new Film("Maratonci trče počasni krug", "Slobodan Šijan", 1982, [8, 9, 7, 6]);

let f3 = new Film("Ko to tamo peva?", "Slobodan Šijan", 1980, [7, 6, 7, 7, 8, 7]);



console.log(f1);
console.log(f2);
console.log(f3);

f1.štampaj();
f2.štampaj();
f3.štampaj();

console.log(f1.naslov);
console.log(f2.naslov);
console.log(f3.naslov);

//testiranje setera
f1.naslov = "Lajanje na zvezde!";
f1.štampaj();

//testiranje getera
console.log(f1.režiser);

//dodavanje ocene u f1
f1.dodajOcenu(10);
f1.štampaj();

//prikaz svih filmova u tabelici
let tabelica = 
`
<table border="1">
    <tr>
        <th>Naziv filma</th>
        <th>Režiser</th>
        <th>Godina izdanja</th>
        <th>Ocene</th>
        <th>Prosečna</th>
    </tr>

`;

let filmovi = [f1, f2, f3];
filmovi.forEach(element => {
    tabelica += 
    `
    <tr>
        <td>${element.naslov}</td>
        <td>${element.režiser}</td>
        <td>${element.godinaIzdanja}.</td>
        <td>${element.ocene}</td>
        <td>${element.prosek()}</td>
    </tr>
        
    `
});

tabelica += `</table>`;
document.body.innerHTML = tabelica;

console.log(f1.prosek()); 
console.log(f2.prosek()); 
console.log(f3.prosek()); 

//funkcija vekFilmova
function vekFilmova(niz, v) {
    let g = v * 100 - 100;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].godinaIzdanja >= (g + 1) && niz[i].godinaIzdanja <= (g + 100)) {
            console.log(niz[i].naslov);
        }
        
    }
}

vekFilmova(filmovi, 20);

//funkcija prosečnaOcena - sve ocene podeljene sa brojem svih filmova
function prosečnaOcena(niz) {
    let suma = 0;
    let b = 0;
    for (let i = 0; i < niz.length; i++) {
        for (let j = 0; j < niz[i].ocene.length; j++) {
            suma += niz[i].ocene[j];
            b++;
            
        }
        
    }
    return suma / b;
    
}

console.log(prosečnaOcena(filmovi));

//funkcija najboljeOcenjeni
function najboljeOcenjeni(niz) {
    let naj = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i].prosek() > naj.prosek()) {
            naj = niz[i];
        }
        
    }
    // return `Najbolje ocenjen film je ${naj.naslov}, sa ocenom ${naj.prosek()}.`;
    return naj;
}

console.log(najboljeOcenjeni(filmovi));

//funkcija osrednjiFilm
function osrednjiFilm(niz) {
    let pros = niz[0];
    let p = Math.abs(niz[0].prosek() - prosečnaOcena(niz));
    for (let i = 1; i < niz.length; i++) {
        if (Math.abs(niz[i].prosek() - prosečnaOcena(niz)) < p) {
            pros = niz[i];
            p = Math.abs(niz[i].prosek() - prosečnaOcena(niz));
        }
        
    }
    return pros;
}
console.log(osrednjiFilm(filmovi));

//Jelenina postavka
let osrednjiF = arr => {
    let globalniProsek = prosečnaOcena(arr);
    let filmNajbližiProseku = arr[0];
    let najmanjaRazlikaOdProseka = Math.abs(globalniProsek - filmNajbližiProseku.prosek());
    arr.forEach(f => {
        let prosečnaOcenaFilma = f.prosek();
        if (Math.abs(globalniProsek - prosečnaOcenaFilma) < najmanjaRazlikaOdProseka) {
            najmanjaRazlikaOdProseka = Math.abs(globalniProsek - prosečnaOcenaFilma);
            filmNajbližiProseku = f;
            
        }
    });
    return filmNajbližiProseku;
}

osrednjiF(filmovi).štampaj();

//Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = arr => {
    let najboljiFilm = najboljeOcenjeni(arr);
    let oceneNajboljegFilma = najboljiFilm.ocene;
    let najslabijaOcena = oceneNajboljegFilma[0];
    oceneNajboljegFilma.forEach(o => {
        if (o < najslabijaOcena) {
        najslabijaOcena = o;     
        }
    });
    console.log(najslabijaOcena);
}

najmanjaOcenaNajboljeg(filmovi);

//Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
let najmanjaOcena = niz => {
    let minOcena = niz[0].ocene[0];
    for (let i = 0; i < niz.length; i++) {
        for (let j = 0; j < niz[i].ocene.length; j++) {
            if (niz[i].ocene[j] < minOcena) {
                minOcena = niz[i].ocene[j];
            }
            
        }
        
    }
    return minOcena;

}

console.log(najmanjaOcena(filmovi));

//Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali.
let fo1 = [8.2, 9.3, 7.9, 10];
let fo2 = [8, 9, 7, 6];
let fo3 = [7, 6, 7, 7, 8, 7];
let f = [];
f = f.concat(fo1, fo2, fo3);
// f = f.concat(f1);
// f = f.concat(f2);
// f = f.concat(f3);
console.log(f); //tip je objekat

let sveOcene = arr => {
    let arrSveOcene = [];
    arr.forEach(f => {
        arrSveOcene = arrSveOcene.concat(f.ocene);
        // arrSveOcene.push(f.ocene); vraća niz od 3 niza, podnizove pavi, da bi napravili jedan moramo opet da se krećemo od jedne do druge odene i da je dodajemo
    });
    return arrSveOcene;
}

console.log(sveOcene(filmovi));

//niz koji prosleđujemo je niz svih ocena
let najčešćaOcena = arr => {
    let pretpostavkaElem = arr[0];
    let pretpostavkaElemPojavljivanja = 1;
    for (let i = 0; i < arr.length; i++) {
        let tekući = arr[i]; //zvezdica
        let tekućiBrPojavljivanja = 0;
        for (let j = 0; j < arr.length; j++) {
            if (tekući == arr[j]) {
                tekućiBrPojavljivanja++;
            }
            
        }
        if (pretpostavkaElemPojavljivanja < tekućiBrPojavljivanja) {
            pretpostavkaElemPojavljivanja = tekućiBrPojavljivanja;
            pretpostavkaElem = tekući;
        }
        
    }
    return pretpostavkaElem;
}

console.log(najčešćaOcena(sveOcene(filmovi)));

let sve = sveOcene(filmovi);
console.log(najčešćaOcena(sve));

//Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
let iznadOcene = (o, arr) => {
    let nizFilmova = [];
    arr.forEach( f => {
        if (f.prosek() > o) {
            nizFilmova.push(f);
        }
    });
    return nizFilmova;
}

console.log(iznadOcene(7.4, filmovi)); 

let niz = iznadOcene(7.4, filmovi);
niz.forEach(f => {
    f.štampaj();
});

//Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu
let iznadOceneNoviji = (o, arr) => {
    let nizZad = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].prosek() >= o) {
            nizZad.push(arr[i]);
        }
        
    }
    let najnoviji = nizZad[0];
    let ng = nizZad[0].godinaIzdanja;
    for (let j = 1; j < nizZad.length; j++) {
        if (nizZad[j].godinaIzdanja > ng) {
            ng = nizZad[j].godinaIzdanja;
            najnoviji = nizZad[j];
        }
        
    }
    return najnoviji;
}
console.log(iznadOceneNoviji(6, filmovi));