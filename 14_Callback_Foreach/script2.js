let a = [1, 9, -6, 5, 0];
let b = [3, 4, 8, -5]
// function ispis(elem) {
//     console.log(`element niza je: ${elem}`);
    
// }

// a.forEach(ispis);

a.forEach(elem => {
    console.log(`element: ${elem}`);
});

// Odrediti zbir  celobrojnog niza.
let zbir = niz => {
    let s = 0;
    niz.forEach(el => {
        s += el;
    });
    return s;
} //;

// zbir parnih
let zbirParnih = niz => {
    let s = 0;
    niz.forEach(el => {
        if(el % 2 == 0) {
            s += el;
        }
    });
    return s;
} //;
console.log(zbir(a));
console.log(zbir(b));
console.log(zbirParnih(a));

let zbirParniIndex = niz => {
    let s = 0;
    niz.forEach((el, index) => { // ne mora "index", svakako je drugi parametar index elemenata
        if(index % 2 == 0) {
            s += el;
        }
    });
    return s;
}
console.log(zbirParniIndex(a));

// Odrediti proizvod elemenata celobrojnog niza.
let proizvodEl = niz => {
    let p = 1;
    niz.forEach (element => {
        p *= element;
    });
    return p;
}
console.log(proizvodEl(a));

// Odrediti srednju vrednost elemenata celobrojnog niza.
let srVrEl = niz => {
    let zbir = 0;
    //let broj = 0;
    // niz.forEach((element, index) => {
    //     zbir += niz[index];
    //     broj++;
    // });
    // return zbir / broj;
    niz.forEach(element => {
        zbir += element;
       // broj++;
    });
    return (niz.length != 0) ? zbir / niz.length : 0;

}
console.log(srVrEl(a));

// Odrediti maksimalnu vrednost u celobrojnom nizu.
let maxVr = niz => {
    let max = niz[0];
    // niz.forEach((element, index) => {
    //     if (niz[index] > max) {
    //         max = niz[index];
    //     }
    // });
    niz.forEach(element => {
        if (element > max) {
            max = element;
            }
    });
    return max;
}
console.log(maxVr(a));

// Odrediti minimalnu vrednost u celobrojnom nizu.
let minVr = niz => {
    let min = niz[0];
    // niz.forEach((element, index) => {
    //     if (niz[index] < min) {
    //         min = niz[index];
    //     }
    // });
    niz.forEach(element => {
        if (element < min) {
            min = element;
            }
    });
    return min;
}
console.log(minVr(a));

// Odrediti indeks maksimalnog elementa celobrojnog niza.


let indexMax = niz => {
    let max = niz[0];
    let imax = 0;
    niz.forEach((el, i) => {
        if(el > max) {
            max = el;
            imax = i;
        }
    });
    return imax;
}
console.log(indexMax(a));

//sa callback-om
// Odrediti indeks minimalnog elementa celobrojnog niza.
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
// let indexMaxCallback = niz => {
//     let max = maxEl(niz);
//     let imax;
//     niz.forEach((el, i) => {
//         if (el == max) {
//             imax = i;
//         }
//     });
//     return imax;
// }

// let indexMinCallback = niz => {
//     let min = minEl(niz);
//     let imin;
//     niz.forEach((el, i) => {
//         if (el == min) {
//             imin = i;
//         }
//     });
//     return imin;
// }

let indexSvojstvo = (niz, svojstvo) => {
    let s = svojstvo(niz);
    let index;
    niz.forEach((el, i) => {
        if (el == s) {
            index = i;
        }
    });
    return index;
}
console.log(indexSvojstvo(a, maxEl));
console.log(indexSvojstvo(a, minEl));
