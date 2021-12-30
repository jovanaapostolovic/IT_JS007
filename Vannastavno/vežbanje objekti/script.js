let student1 = {
    ime: `Ivan`,
    prezime: `Popov`,
    godinaStudija: 4,
    ocene: [7, 8, 9, 9, 10, 10],
    prosek: function () {
        let zb = 0;
        let b = 0;
        for (let i = 0; i < this.ocene.length; i++) {
            zb += this.ocene[i];
            b++;
        }
        return zb / b;
    },
};

let student2 = {
    ime: `Vana`,
    prezime: `Dopović`,
    godinaStudija: 4,
    ocene: [10, 8, 9, 9, 7, 10],
    prosek: function () {
        let zb = 0;
        let b = 0;
        for (let i = 0; i < this.ocene.length; i++) {
            zb += this.ocene[i];
            b++;
        }
        return zb / b;
    },
};

let student3 = {
    ime: `Dario`,
    prezime: `Prijić`,
    godinaStudija: 4,
    ocene: [7, 8, 7, 9, 10, 7],
    prosek: function () {
        let zb = 0;
        let b = 0;
        for (let i = 0; i < this.ocene.length; i++) {
            zb += this.ocene[i];
            b++;
        }
        return zb / b;
    },
};

let student4 = {
    ime: `Ivana`,
    prezime: `Savić`,
    godinaStudija: 1,
    ocene: [7, 6, 9, 9, 6, 10],
    prosek: function () {
        let zb = 0;
        let b = 0;
        for (let i = 0; i < this.ocene.length; i++) {
            zb += this.ocene[i];
            b++;
        }
        return zb / b;
    },
};

let studenti = [student1, student2, student3, student4];

//1.
let zadatoSlovo = (studenti, slovo) => {
    studenti.forEach(el => {
       if (el.prezime.charAt(0) == slovo) {
           console.log(el.ime, el.prezime);
       }  
    });
};

zadatoSlovo(studenti, `P`);

//2.
let sadrziDvaStr = (niz, a, b) => {
    niz.forEach(el => {
        if (el.ime.includes(a) && el.prezime.includes(b)) {
            console.log(el.ime, el.prezime);
        }
    });
};

sadrziDvaStr(studenti,`na`, `ić`);

//3.
let godStudija = (niz, br) => {
    let b = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].godinaStudija == br) {
            b++;
        }
        
    }
    return b;
}
console.log(godStudija(studenti, 4));

//4.
let maxProsek = niz => {
    max = niz[0].prosek;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i].prosek() > max) {
            max = niz[i].prosek();
        }
        
    }
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].prosek() == max) {
            console.log(niz[i].ime, niz[i].prezime);
        }
        
    }
}
maxProsek(studenti);

//5....

//II Zadatak
let polaznik1 = {
    ime: `Mat`,
    prezime: `Nik`,
    ocena: 87

};

let polaznik2 = {
    ime: `Ves`,
    prezime: `Šojić`,
    ocena: 100

};

let polaznik3 = {
    ime: `Mrko`,
    prezime: `Dugić`,
    ocena: 97

};

let polaznik4 = {
    ime: `Rej`,
    prezime: `Lić`,
    ocena: 85

};

let polaznik5 = {
    ime: `Nikola`,
    prezime: `Nikić`,
    ocena: 98

};

let polaznik6 = {
    ime: `Ana`,
    prezime: `Lalić`,
    ocena: 70

};

let polaznik7 = {
    ime: `Marija`,
    prezime: `Naić`,
    ocena: 77

};

let polaznik8 = {
    ime: `Lea`,
    prezime: `Jakić`,
    ocena: 57

};

let polaznik9 = {
    ime: `Mirko`,
    prezime: `Kojić`,
    ocena: 80

};

let polaznik10 = {
    ime: `Anja`,
    prezime: `Zak`,
    ocena: 87

};

let polaznik11 = {
    ime: `Luka`,
    prezime: `Tatić`,
    ocena: 84

};

let polaznik12 = {
    ime: `Hana`,
    prezime: `Pajić`,
    ocena: 100

};


let kurs1 = {
    naziv: `Osnove programiranja: Java`,
    grad: `Niš`,
    polaznici: [polaznik1, polaznik2, polaznik3],
    brPolaznika: function () {
        let b = 0;
        for (let i = 0; i < this.polaznici.length; i++) {
            b++;
        }
        return b;
    },
};

let kurs2 = {
    naziv: `Razvoj veb stranica: PHP`,
    grad: `Kosovska Mitrovica`,
    polaznici: [polaznik4, polaznik5, polaznik6],
    brPolaznika: function () {
        let b = 0;
        for (let i = 0; i < this.polaznici.length; i++) {
            b++;
        }
        return b;
    },
};

let kurs3 = {
    naziv: `Testiranje softvera: QA`,
    grad: `Beograd`,
    polaznici: [polaznik7, polaznik8, polaznik9],
    brPolaznika: function () {
        let b = 0;
        for (let i = 0; i < this.polaznici.length; i++) {
            b++;
        }
        return b;
    },
};

let kurs4 = {
    naziv: `Osnove programiranja: Java`,
    grad: `Niš`,
    polaznici: [polaznik10, polaznik11, polaznik12],
    brPolaznika: function () {
        let b = 0;
        for (let i = 0; i < this.polaznici.length; i++) {
            b++;
        }
        return b;
    },
};

let kursevi = [kurs1, kurs2, kurs3, kurs4];

//Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.

let kursUGradu = (niz, g) => {
    let b = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].grad == g) {
            b++;
        }
        
    }
    return b;
};
console.log(kursUGradu(kursevi, `Niš`));


//Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.

let nazivKursa = (niz, n) => {
    let b = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].naziv == n) {
            b++;
        }
        
    }
    return b;
}
console.log(nazivKursa(kursevi,`Osnove programiranja: Java` ));

//Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.

let maxPolaznika = niz => {
    let max = niz[0].brPolaznika();
    for (let i = 1; i < niz.length; i++) {
        if (niz[i].brPolaznika() > max) {
            max = niz[i].brPolaznika();
        }
        
    };
    let rez = ``;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].brPolaznika() == max) {
            rez = (`${niz[i].naziv} ${niz[i].grad}`);
        }
        
    };
    console.log(rez);
};

maxPolaznika(kursevi);

//Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.

//Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji.

//Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.

//Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan. Funkciji se prosleđuje niz kurseva i grad, a vraća da li dati grad kida (funkcija vraća true ili false).

//Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false).