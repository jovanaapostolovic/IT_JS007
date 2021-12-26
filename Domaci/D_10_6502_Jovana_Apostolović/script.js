console.log(`Domaći zadatak broj 10
`);
//Za objekat dan kreirati sledeće metode:

// 1. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.

// 2. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.

// 3. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

let dan = {
    datum: "2021/12/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperatura: [-1, 0, 2, 3, 4, 2, 1, 0],

    //1. Zadatak
    tropskiDan: function () {
        let rez = true;
        this.temperatura.forEach(e => {
            if ( e < 24) {
                rez = false;
            }
        });
        return rez;
    },

    //2. Zadatak
    nepovoljanDan: function () {
        let rez = false;
        for (let i = 0; i < this.temperatura.length - 1; i++) {
            if (this.temperatura[i + 1] - this.temperatura[i] > 8) {
                rez = true;
            }  
        };
        return rez;
    },

    //3. Zadatak
    neuobičajenDan: function () {
        let rez = false;
        this.temperatura.forEach(e => {
            if ((e < -5 && this.kisa == true) || (e > 25 && this.oblacno == true)) {
                rez = true;
            }
        });
        if (this.kisa == true && this.oblacno == true && this.sunce == true) {
            rez = true;
        }
        return rez;
    }
};

console.log(dan.tropskiDan());
console.log(dan.nepovoljanDan());
console.log(dan.neuobičajenDan());