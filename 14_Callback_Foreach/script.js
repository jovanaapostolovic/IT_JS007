// function ispisKonzola(niz) {
//     let rez = "";
//     for (let i = 0; i < niz.length; i++) {
//         rez += niz[i] + " ";
        
//     }
//     console.log(rez);
// }

// function ispisHTML(niz) {
//     let rez = "";
//     for (let i = 0; i < niz.length; i++) {
//         rez += niz[i] + " ";
        
//     }
//     document.body.innerHTML += `<div>${rez}</div>`;
// } 

let brojevi = [1, 5, -4, 9];
// ispisKonzola(brojevi);
// ispisHTML(brojevi);

function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
}

function ispisNiza(niz, cb) {
    let rez = "";
    for (let i = 0; i < niz.length; i++) {
        rez += niz[i] + " ";
    }
    cb(rez);
}
ispisNiza(brojevi, ispisKonzola);
ispisNiza(brojevi, ispisStranica);


// isti zadatak samo se pozivaju anonimne funkcije

ispisNiza(brojevi, function(poruka) {
    console.log(poruka);
});

ispisNiza(brojevi, function(poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
});

// isti zadatak samo se pozivaju arrow funkcije

ispisNiza(brojevi, poruka => {
    console.log(poruka);
});

ispisNiza(brojevi, poruka => {
    document.body.innerHTML += `<div>${poruka}</div>`;
});

// a) odredi broj maksimalnih elemenata u celobrojnom nizu
// b) odredi broj minimalnih elemenata u celobrojnom nizu
// let nizbrojeva = [2, 6, 2, 7, 4, 7, 7, 2];
// let max = niz => {
//     let b = 0;
//     let maxVr = niz[0];
//     for (let i = 1; i < niz.length; i++) {
//         if (niz[i] > maxVr) {
//             maxVr = niz[i];
//         }
        
//     }
//     for (let i = 0; i < niz.length; i++) {
//         if (niz[i] == maxVr) {
//             b += 1;
//         }
        
//     }
//     return b;
// }

// let min = niz => {
//     let b = 0;
//     let minVr = niz[0];
//     for (let i = 1; i < niz.length; i++) {
//         if (niz[i] < minVr) {
//             minVr = niz[i];
//         }
        
//     }
//     for (let i = 0; i < niz.length; i++) {
//         if (niz[i] == minVr) {
//             b += 1;
//         }
        
//     }
//     return b;
// }

// let MM = niz => {
//     let bM = 0;
//     let bm = 0;
//     let maxVr = niz[i];
//     let minVr = niz[i];
//     for (let i = 1; i < niz.length; i++) {
//         if (niz[i] > maxVr) {
//             maxVr = niz[i];
//         }
//         if (niz[i] < minVr) {
//             minVr = niz[i];
//         }
        
//     }
//     for (let i = 0; i < niz.length; i++) {
//         if (niz[i] == maxVr) {
//             bM += 1;
//         }
//         if (niz[i] == minVr) {
//             bm += 1;
//         }
        
//     }
//     return bM, bm ;
// }
// console.log(max(nizbrojeva));
// console.log(min(nizbrojeva));
// console.log(MM(nizbrojeva));

// function brojMaxMinEl(nizbrojeva, MM ) {
    
// }

////stefan
function maxEl(niz) {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
        }
        
    }
    return max;
}

function minEl(niz) {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
        }
        
    }
    return min;
}

function brojsvojstvoNiz(niz, svojstvo) {
    let s = svojstvo(niz);
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == s) {
            broj++;
        }
        
    }
    return broj;
}
let temperature = [0, 0, 1, 2, 2, 1, 2, 1, 0, 0];
console.log(brojsvojstvoNiz(temperature, maxEl));
console.log(brojsvojstvoNiz(temperature, minEl));
//doooovde
///

// function maxEl(niz) {
//     let max = niz[0];
//     for (let i = 1; i < niz.length; i++) {
//         if (niz[i] > max) {
//             max = niz[i];
//         }
        
//     }
//     return max;
// }
//acino resenje
function maxMinEl(niz) {
    let max = niz[0];
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
        }
        if (niz[i] > max) {
            max = niz[i];
        }
        
    }
    return [min, max];
}

function brojSvojstvoNizDr(niz, svojstvo, index) {
    let temp = svojstvo(niz);
    let s = temp[index];
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == s) {
            broj++;
        }
        
    }
    return broj;
}
const MAX_INDEX = 1;
const MIN_INDEX = 0;
console.log(brojSvojstvoNizDr(temperature, maxMinEl, MAX_INDEX));
console.log(brojSvojstvoNizDr(temperature, maxMinEl, MIN_INDEX));

