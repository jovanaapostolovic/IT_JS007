// Napraviti objekat sportista koji od polja ima:
// ○ imePrezime (string - ime i prezime sportiste)
// ○ visina (decimalni broj koji predstavlja visinu sportiste u metrima)
// ○ timovi (niz stringova - različiti timovi u kojima je sve ovaj sportista igrao)

let sportista1 = {
    imePrezime: `Ivan Petrović`,
    visina: 1.95,
    timovi: [`Pume`, `Lavovi`, `Tigrovi`],
    brTransfera: function () {
        let b = 0;
        for (let i = 0; i < this.timovi.length; i++) {
            b++;
        }
        return b;
    },
};

let sportista2 = {
    imePrezime: `Mateja Nenadović`,
    visina: 2.0,
    timovi: [`Pume`, `Mačke`],
    brTransfera: function () {
        let b = 0;
        for (let i = 0; i < this.timovi.length; i++) {
            b++;
        }
        return b;
    },
};

let sportista3 = {
    imePrezime: `Igor Srpić`,
    visina: 1.9,
    timovi: [`Ajkule`, `Lavovi`, `Gušteri`],
    brTransfera: function () {
        let b = 0;
        for (let i = 0; i < this.timovi.length; i++) {
            b++;
        }
        return b;
    },
};

//➢ Napraviti niz od najmanje tri objekta (najmanje tri sportiste) 

let igrači = [sportista1, sportista2, sportista3];


// Napisati funkciju prosečnaVisina kojoj se prosleđuje niz sportista, a ona vraća
// prosečnu visinu sportista. Pozvati funkciju i rezultat ispisati u konzoli.

let prosečnaVisina = niz => {
    let zb = 0;
    let b = 0;
    for (let i = 0; i < niz.length; i++) {
        zb += niz[i].visina;
        b++;
    }
    return zb / b;
};

console.log(prosečnaVisina(igrači));

// Napisati funkciju igraliZaTim kojoj se prosleđuje niz sportista i naziv tima, a funkcija
// prebrojava koliko puta se prosleđeni tim pojavljuje među timovima za koje su
// sportisti igrali i vraća taj broj. Pozvati funkciju i rezultat ispisati u konzoli.

let igraliZaTim = (niz, tim) => {
    let b = 0;
    for (let i = 0; i < niz.length; i++) {
        let el = niz[i];
        for (let j = 0; j < el.timovi.length; j++) {
            if (el.timovi[j] == tim) {
                b++;
            }
            
        }
        
    }
    return b;
}
console.log(igraliZaTim(igrači, `Lavovi`));

// Napisati funkciju najmanjeTransfera kojoj se prosleđuje niz sportista, a funkcija
// vraća ime i prezime onog sportiste koji je imao najmanji broj transfera (najmanje
// puta je promenio tim). Pozvati funkciju i rezultat ispisati u konzoli. Ukoliko postoji
// više takvih sportista, vratiti ime i prezime bilo kog od takvih sportista.

let najmanjeTransfera = niz => {
    let min = niz[0].brTransfera();
    for (let i = 1; i < niz.length; i++) {
        if (niz[i].brTransfera() < min) {
            min = niz[i].brTransfera();
        }
        
    }
    let rez = ` `;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].brTransfera() == min) {
            rez += `${niz[i].imePrezime}`;
        }
        
    }
    return rez;
}

console.log(najmanjeTransfera(igrači));

// Trener igrače na treningu deli u dva tima kako bi se što bolje pripremili za utakmicu.
// Kada trener dobije spisak sportista (niz sportista) on ih deli na sledeći način:
// ○ Ukoliko je na spisku paran broj igrača, trener u prvi tim stavlja prvu polovinu
// igrača sa spiska, dok drugi tim čine igrači sa druge polovine liste
// ○ Ukoliko je na spisku neparan broj igrača, trener u prvi tim stavlja jednog igrača više nego u drugi tim.


// Napisati funkciju višiTimPodela, kojoj se prosleđuje niz sportista a funkcija ispisuje
// na ekranu tekst “Viši je prvi tim” ukoliko je prosečna visina igrača u prvom timu veća
// od prosečne visine igrača u drugom timu. U suprotnom funkcija na ekranu ispisuje
// “Viši je drugi tim”. Ako su te dve prosečne visine iste, funkcija ispisuje tekst “Oba
// tima su u proseku iste visine”. Pozvati funkciju.



let višiTimPodela = niz => {
    let b = 0;
    for (let i = 0; i < niz.length; i++) {
        b++;
    };
    let prviV = 0;
    let prviB = 0;
    let pr1 = 0;
    let drugiV = 0;
    let drugiB = 0;
    let pr2 = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i < Math.ceil(niz.length / 2)) {
            prviV += niz[i].visina;
            prviB++;
        }
        else {
            drugiV += niz[i].visina;
            drugiB++;
        }

            
    }
    pr1 = prviV / prviB;
    pr2 = drugiV / drugiB;
if (pr1 > pr2) {
    console.log(`Viši je prvi tim`);
}
else if (pr2 > pr1) {
    console.log(`Viši je drugi tim`);
}
else {
    console.log(`Oba
        tima su u proseku iste visine`);
}

};
višiTimPodela(igrači);

// Napisati funkciju trenerVidi kojoj se prosleđuje niz sportista a funkcija vraća
// vrednost (ceo broj) koliko sportista trener vidi.
// Pretpostavimo da sportisti stoje u vrsti, kao na sledećoj slici, a da trener stoji pre
// prvog sportiste u vrsti(pre nultog elementa u nizu).
// Vaš zadatak je da prebrojite koliko sportista trener može da vidi sa svoje pozicije.
// Na primer on vidi sportistu sa rednim brojem 0 koji je visok 2.04 (videti sliku).
// Zatim on ne vidi sportiste sa rednim brojevima 1,2,3,4 i 5 jer su niži od sportiste koji
// je visok 2.04 i on ih zaklanja. Sledećeg vidi sportistu koji na dresu nosi broj 6 koji je
// visok 2.05 i na kraju vidi sportostu koji na dresu nosi broj 7 i koji je visok 2.10.
// Zaključujemo da na ovom primeru trener vidi trojicu sportista, te bi funkcija u ovom
// slučaju trebalo kao rezultat da vrati broj 3.

let trenerVidi = niz => {
    b = 1;
    let max = niz[0].visina;
    for (let i = 1; i <niz.length; i++) {
        if (niz[i].visina > max) {
            b++;
            max = niz[i].visina;
        }
        
    }
    return b;
}
console.log(trenerVidi(igrači));