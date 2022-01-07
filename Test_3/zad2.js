// 2. Data je sledeća promenljiva:
let visine = [
    { ime: "Pera", visina: 189, pol: "M" },
    { ime: "Laza", visina: 192, pol: "M" }, 
    { ime: "Milka", visina: 164, pol: "Z" },
    { ime: "Mika", visina: 176, pol: "M" },
    { ime: "Sonja", visina: 178, pol: "Z" },
    { ime: "Milica", visina: 166, pol: "Z" }
];
// 	Napisati funkciju koja ispituje da li je prosečna visina mušakaraca veća od prosečne visine žena

let poređenjeVisinaMM = niz => {
    let zbŽ = 0;
    let bŽ = 0;
    let ž = 0;
    let zbM = 0;
    let bM = 0;
    let m = 0;
    let rez;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].pol == "Z") {
            bŽ++;
            zbŽ += niz[i].visina;
        }
        else if (niz[i].pol == "M") {
            bM++;
            zbM+= niz[i].visina;
        }
        
    }
    ž = zbŽ / bŽ;
    m = zbM / bM;
    if (m > ž) {
        rez = true;
    }
    else {
        rez = false;
    }
    return rez;
    

};
console.log(poređenjeVisinaMM(visine));