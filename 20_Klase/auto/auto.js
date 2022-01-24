class Auto {
    constructor(m, b, ik, bv = 5) {
        // let m1 = m.trim();
        // if (m1.length > 0) {
        //     this._marka = m1;
        // }
        // else {
        //     this._marka = "Auto";
        // }

        //videti zašto ne čita trim
        // this.postaviMarku(m);

        this.marka = m; //poziva se seter marka sa parametrom m
        this.boja = b; //ovde se poziva seter boja
        this.imaKrov = ik; //poziva se seter imaKrov
        this.brojVrata = bv;
    }

    sviraj() {
        console.log("Beep! Beep!");
    }

    vozi(x) {
        // let m = this._marka;
        console.log(`Auto ${this.marka} vozi ${x} km`);
        //poziva se geter marka
    }

    stampaj() {
        console.log(`auto marke: ${this.marka}, boje: ${this.boja}, ima krov: ${this.imaKrov}`); //svuda su pozvani geteri
    }

    // seter i geter za polje _marka
    // set marka(m) {
    //     let m1 = m.trim();
    //     if (m1.length > 0) {
    //        this._marka = m1;
    //     }
    //     else {
    //        this._marka = "Auto";
    //     }
    // }
    // get marka() {
    //     return this._marka;
    // }

    //seteri geter za polje _boja
    set boja(b) {
        this._boja = b;
    }

    get boja() {
        return this._boja;
    }

    //seter i geter za polje _imaKrov
    set imaKrov(ik) {
        if(ik === true || ik === false) {
            this._imaKrov = ik;
        }
        else {
            this._imaKrov = false;
        }
    }
    get imaKrov() {
        return this._imaKrov;
    }

    //seter i geter za polje _imaVrata

    set brojVrata(bv) {
        if(bv > 0) {
            this._brojVrata = bv;
        }
        else{
          this._brojVrata = 1;
        }
    }
    get brojVrata() {
        return this._brojVrata;
    }
}


export default Auto;

//praksa je da jedino geteri i seteri pristupaju poljima, a ostale metode, kao i objekti van klase

//mogu obične metode, ali vizuelno nije lepo
//  //metoda koja postavlja vrednost polja ._marka
//  postaviMarku(m) {
//     let m1 = m.trim();
//     if (m1.length > 0) {
//         this._marka = m1;
//     }
//     else {
//         this._marka = "Auto";
//     }
// }

// //metoda koja čita vrednost polja
// dohvatiMarku() {
//     return this._marka;
// }