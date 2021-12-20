let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);

let numbers = [6, -7, 8, 5, -5, 3.3];
console.log(numbers);

let random = [6, "Stefan", -3.8, true, [3, 4, 5]];
console.log(random);

console.log(cars[0]); //Toyota
console.log(cars[1]); //BMW
console.log(cars[2]); //Volvo
console.log(cars[3]); //undefined -ali ne prijavljuje grešku

console.log(random[4][1]);

cars[0] = "Peugeot";
console.log(cars);

// cars[0] = undefined; //uklanjanje elemenata

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
    
}
// for (let i = 0; i <= cars.length - 1; i++) {
//     console.log(cars[i]);
    
// }

//2. zadatak
// Odrediti zbir elemenata celobrojnog niza.
let skup = [1, 2, 3, 4, 5];
let zbir = 0;
for (let i = 0; i < skup.length; i++) {
    zbir = zbir + skup[i];
    
}
console.log(zbir);

let skup2 = [2, 3, 4];
let skup3 = [3, 4, 5];

// zbir = 0;
// for (let i = 0; i < skup2.length; i++) {
//     zbir = zbir + skup2[i];
    
// } - ponavljanje 
console.log(zbir);

let sumaElemenata = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma = suma + niz[i];
        
    }
    return suma
}
console.log(`suma elemenata prvog niza je ${sumaElemenata(skup)}`);
console.log(`suma elemenata prvog niza je ${sumaElemenata(skup2)}`);
console.log(`suma elemenata prvog niza je ${sumaElemenata(skup3)}`);

//3. zadatak
//Odrediti proizvod elemenata celobrojnog niza.
let p = 1;
for (let i = 0; i < skup.length; i++) {
    p = p * skup[i];
    
}
console.log(p);

// 
let proizvodElemenata = niz => {
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        proizvod *= niz[i];
        
    }
    return proizvod;
}
console.log(proizvodElemenata(skup2));
console.log(proizvodElemenata(skup3));
console.log(-9 * 0); //-0

//4. zadatak
//Odrediti srednju vrednost elemenata celobrojnog niza.
let b = 0;
zbir = 0;
for (let i = 0; i < skup.length; i++) {
    zbir = zbir + skup[i];
    b = b + 1;
}
console.log(zbir / b);

//
let arSr = niz => {
    let suma = 0;
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
        broj++;
        
    }
    return (broj != 0) ? suma / broj : 0;
}

//
let arSr2 = niz => {
    let suma = sumaElemenata(niz);
    let broj = niz.length;
    return (broj != 0) ? suma / broj : 0;
}

//
let arSr3 = niz => (niz.length != 0) ? sumaElemenata(niz) / niz.length : 0;

console.log(arSr(skup));
console.log(arSr(skup2));
console.log(arSr(skup3));
console.log(arSr([]));

console.log(arSr2(skup));
console.log(arSr2(skup2));
console.log(arSr2(skup3));
console.log(arSr2([]));

console.log(arSr3(skup));
console.log(arSr3(skup2));
console.log(arSr3(skup3));
console.log(arSr3([]));

//4´. odredi srednju vrednost parnih elemenata niza
let arSrParnih = niz => {
    let suma = 0;
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            suma += niz[i];
            broj++;
        }
        
    }
    return (broj == 0) ? 0 : suma / broj;
}
console.log(arSrParnih(skup));

//5. zadatak
// Odrediti maksimalnu vrednost u celobrojnom nizu.

// let max2 = (e1, e2) => (e1 > e2) ? e1 : e2;
// let max5 = (e1, e2, e3, e4, e5) => max2(max2(max2(max2(e1, e2), e3), e4), e5);

let maxVrednostNiza = niz => {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
        }
        
    }
    return max;
    //return (niz[i] > max) ? niz[i] : max; -vežba
}

console.log(maxVrednostNiza(skup));
let nizz = [3, 7, 4, 11]
console.log(maxVrednostNiza(nizz));

//6.
//Odrediti minimalnu vrednost u celobrojnom nizu.
let minVrednostNiza = niz => {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
        }
        
    }
    return min;
    
}
console.log(minVrednostNiza(nizz));

//7.
// Odrediti indeks maksimalnog elementa celobrojnog niza.
let maxVrednostIndex = niz => {
    let max = niz[0];
    let maxIndex = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
            maxIndex = i;
        }
        
    }
    return maxIndex;
    
}
console.log(maxVrednostIndex(nizz));
let a = [9, 2, 3, 6, 1];
console.log(maxVrednostIndex(a));

//8.
//Odrediti indeks minimalnog elementa celobrojnog niza.
let minVrednostIndex = niz => {
    let min = niz[0];
    let minIndex = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
            minIndex = i;
        }
        
    }
    return minIndex;
    
}
console.log(minVrednostIndex(a));

//9.
//Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let brElVećiOdAr = niz => {
    let brEl = 0;
    let br = 0;
    let sum = 0;
    let aS = 0;
    for (let i = 0; i < niz.length; i++) {
        sum += niz[i];
        br++; 
    }
    aS = sum / br;

    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > aS) {
            brEl++;
        }
        
    }
    return brEl;

}
console.log(brElVećiOdAr(a));
let sk = [2, -2, 4, 6];
console.log(brElVećiOdAr(sk));

//10.
//Izračunati zbir pozitivnih elemenata celobrojnog niza.
let zbirPozEl = niz => {
    let zbir = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > 0) {
            zbir = zbir + niz[i];
        }
        
    }
    return zbir;

}
console.log(zbirPozEl(sk));

//11.
// Odrediti broj parnih elemenata u celobrojnom nizu.
let brParEl = niz => {
    let b = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            b++;
        }
        
    }
    return b;
}
console.log(brParEl(sk));
console.log(brParEl(skup));

//12.
// Odrediti broj parnih elemenata sa neparnim indeksom.
