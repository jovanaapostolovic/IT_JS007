let niz = [5, 6, -8, 7, -7, -2, 10, -3, -5]

// 1. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom.
let sumElSaParIn = niz => {
    let sum = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 == 0 ) {
            sum += niz[i];
        }
        
    }
    return sum;
}
console.log(sumElSaParIn(niz));

// 2. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona menja znak svakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli.
let menjanjeZnaka = niz => {
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 == 0) {
            if (niz[i] % 2 != 0) {
                niz[i] = -niz[i];
            }
        }
        
    }
    return niz;
}
console.log(menjanjeZnaka(niz));


// 3. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća broj elemenata niza sa neparnim indeksom.
let brElSaNepIn = niz => {
    br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 != 0) {
            br++;
            
        }
        
    }
    return br;
}
console.log(brElSaNepIn(niz));
