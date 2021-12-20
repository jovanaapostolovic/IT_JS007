console.log("if_ugnježdeno");
//zadatak 19
let b1 = 5;
let b2 = 2;
let b3 = 4;

if (b1 > b2) {
    if (b1 > b3) {
        console.log(`broj ${b1} je najveći`);
        if(b2>b3) {
            console.log(`broj ${b2} je srednji`);
            console.log(`broj ${b3} je najmanji`);
        }
        else {
            console.log(`broj ${b3} je srednji`);
            console.log(`broj ${b2} je najmanji`);
        }
    }
    else {
        console.log(`broj ${b1} je srednji`);
        if (b2>b3) {
            console.log(`broj ${b2} je najveći`);
            console.log(`broj ${b3} je najmanji`);
        }
        else {
            console.log(`broj ${b2} je najmanji`);
            console.log(`broj ${b3} je najveći`);
             }

        }
    }

    ///////////////
    //20. zadatak
    let a = 6;
    let b = 8;
    if (a > b) {
        if (a % 2 == 0) {
            console.log(`broj ${a} je veći i paran je`); 
        }
        else {
            console.log(`broj ${a} je veći ali je neparan`);
        }
        
    }
    else {
        if (b % 2 == 0) {
            console.log(`broj ${b} je veći i paran je`); 
        }
        else {
            console.log(`broj ${b} je veći ali je neparan`);
        }
    }




