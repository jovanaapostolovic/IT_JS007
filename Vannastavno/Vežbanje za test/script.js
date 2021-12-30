// Zadatak 1.
// Objekat Student sadrži njegovo ime (string), prezime (string), godinu studija (ceo broj između 1 i 5), kao i niz ocena do sada položenih ispita (niz celih brojeva, gde je svaki od brojeva u intervalu od 6 do 10).

let student1 = {
    ime: "Ivan",
    prezime: "Ivanović",
    godinaStudija: 1,
    ocene: [7, 10, 8, 7],
    prosek: function () {
        let sum = 0;
        let b = 0;
        this.ocene.forEach(e => {
            sum += e;
            b++;
        });
        return sum / b;
    }

};

let student2 = {
    ime: "Ivana",
    prezime: "Ivković",
    godinaStudija: 4,
    ocene: [10, 9, 9, 10, 10, 10],
    prosek: function () {
        let sum = 0;
        let b = 0;
        this.ocene.forEach(e => {
            sum += e;
            b++;
        });
        return sum / b;
    }
};

let student3 = {
    ime : "Jovan",
    prezime : "Jovanović",
    godinaStudija : 3,
    ocene : [6, 6, 8, 6],
    prosek: function () {
        let sum = 0;
        let b = 0;
        this.ocene.forEach(e => {
            sum += e;
            b++;
        });
        return sum / b;
    }
};

let student4 = {
    ime : "Kosta",
    prezime : "Panić",
    godinaStudija : 1,
    ocene : [10, 10, 10, 10],
    prosek: function () {
        let sum = 0;
        let b = 0;
        this.ocene.forEach(e => {
            sum += e;
            b++;
        });
        return sum / b;
    }
};

let student5 = {
    ime : "Duška",
    prezime : "Ilić",
    godinaStudija : 2,
    ocene : [8, 9, 9, 7],
    prosek: function () {
        let sum = 0;
        let b = 0;
        this.ocene.forEach(e => {
            sum += e;
            b++;
        });
        return sum / b;
    }
};

// Kreirati niz od barem 4 studenta. 

let studenti = [student1, student2, student3, student4, student5];

// Napisati sledeće arrow funkcije:
// Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.

let zadatoSlovo = (niz, s) => {
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].prezime.charAt(0) == s) {
            console.log(niz[i].ime, niz[i].prezime);
        }
        
    }
}

zadatoSlovo(studenti, "J");

// Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.

let sadržeSlova = (niz, im, pr) => {
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].ime.includes(im) && niz[i].prezime.includes(pr)) {
            console.log(niz[i].ime, niz[i].prezime);
        }
        
    }
};

sadržeSlova(studenti, "v", "I");

// Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.

let prosleđenaGodina = (niz, br) => {
    let b = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].godinaStudija == br) {
            b++;
        }
        
    }
    return b;
};
console.log(prosleđenaGodina(studenti, 1));

// Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.

let maxProsek = niz => {
    let max = niz[0].prosek();
    let rez = `${niz[0].ime} ${niz[0].prezime}`;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i].prosek() > max) {
            max = niz[i].prosek();
            rez = `${niz[i].ime} ${niz[i].prezime}`;
        }
        
    }
    console.log(rez);;
};

maxProsek(studenti);

// Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.

let prosečniStudenti = niz => {
    let rez = ``;
    for (let i = 0; i < niz.length; i++) {
        let st = niz[i];
        let b = 0;
        for (let j = 0; j < st.ocene.length; j++) {
            if (st.ocene[j] == 6 || st.ocene[j] == 10) {
                b++;
            }
            
        }
        if (b == 0) {
            rez += niz[i].ime + ` ` + niz[i].prezime
        }
        
    }
    console.log(rez);
};
prosečniStudenti(studenti);

// Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.

let ekstraStudenti = niz => {
    for (let i = 0; i < niz.length; i++) {
        let b = 0;
        let st = niz[i];
        let b9 = 0;
        let b10 = 0;
        for (let j = 0; j < st.ocene.length; j++) {
            if (st.ocene[j] < 9) {
               b++; 
            }
            else if (st.ocene[j] == 9) {
                b9++;
            }
            else {
                b10++;
            }
            
        }
        if (b == 0 && b10 >= 2 * b9) {
            console.log(st.ime, st.prezime);
        }
        
    }
    
};

ekstraStudenti(studenti);
