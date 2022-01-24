export class Film {
    constructor(n, r, gi, o) {
        this.naslov = n;
        this.režiser = r;
        this.godinaIzdanja = gi;
        this.ocene = o;
    }

    //naslov
    set naslov(n) {
        this._naslov = n;
    }

    get naslov() {
        return this._naslov;
    }
    //režiser
    set režiser(r) {
        this._režiser = r;
    }

    get režiser() {
        return this._režiser;
    }
    //godina izdanja
    set godinaIzdanja(gi) {
        if (gi > 1800) {
            this._godinaIzdanja = gi;
        }
        else {
            this._godinaIzdanja = 1800; 
        }
        
    }
    //ocene
    set ocene(o) {
        this._ocene = o;
    }

    get ocene() {
        return this._ocene;
    }

    get godinaIzdanja() {
        return this._godinaIzdanja;
    }

    //ostale metode
    štampaj() {
        console.log(this);
    }

    //dodavanje jedne ocene
    dodajOcenu(novaOcena) {
        this._ocene.push(novaOcena);
    }

    //metod prosek
    prosek() {
        let br = 0;
        let sum = 0;
        for (let i = 0; i < this._ocene.length; i++) {
            br++;
            sum += this._ocene[i];
            
        }
        return sum / br;
    }
}


