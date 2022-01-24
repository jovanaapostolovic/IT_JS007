import { Pacijent } from "./pacijent.js";

let p1 = new Pacijent("Jelena", 1.73, 66);
let p2 = new Pacijent("Ana", 1.8, 72);
let p3 = new Pacijent("Pera", 1.9, 140);
let p4 = new Pacijent("Mika", 1.67, 57);
let p5 = new Pacijent("Mila", 1.5, 70);

let pacijenti = [p1, p2, p3, p4, p5];

//Ispisati podatke o pacijentu sa najmanjom težinom.
let btnMinTez = document.getElementById("minTez");
let spanMinTezRez = document.getElementById("minTezRez");
btnMinTez.addEventListener("click", () => {
    let min = pacijenti[0]; // pozivamo geter
    pacijenti.forEach(p => {
        if (min.težina > p.težina) {
            min = p;
        }
    });
    spanMinTezRez.innerHTML = min.štampajListu();
    // console.log(min);
    // min.štampaj();
});

// Ispisati podatke o pacijentu sa najvećim bmi.
let btnMaxBmi = document.querySelector("#maxBmi");
let maxBmiRez = document.querySelector("#maxBmiRez");
btnMaxBmi.addEventListener("click", () => {
    let maxBmi = pacijenti[0]; //pretpostavka da 1. pacijent ima max bmi
    for (let i = 1; i < pacijenti.length; i++) {
        if (maxBmi.bmi() < pacijenti[i].bmi()) {
            maxBmi = pacijenti[i];
        }
        
    }
    maxBmiRez.innerHTML = maxBmi.štampajListu();
});