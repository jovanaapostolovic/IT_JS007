export class Knjiga {
    constructor(n, a, g, b, c) {
        this.naslov = n;
        this.autor = a;
        this.godIzdanja = g;
        this.brojStrana = b;
        this.cena = c;
    }

    //naslov
    set naslov(n) {
        this._naslov = n;
    }

    get naslov() {
        return this._naslov;
    }
    
    //autor
    set autor(a) {
        this._autor = a;
    }

    get autor() {
        return this._autor;
    }
    
    //godIzdanja
    set godIzdanja(g) {
        this._godIzdanja = g;
    }

    get godIzdanja() {
        return this._godIzdanja;
    }
    
    //brojStrana
    set brojStrana(b) {
        this._brojStrana = b;
    }

    get brojStrana() {
        return this._brojStrana;
    }
    
    //cena
    set cena(c) {
        this._cena = c;
    }

    get cena() {
        return this._cena;
    }

    //metoda štampaj
    štampaj() {
        console.log(this);
    }

    //metoda obimna
    obimna() {
        let rez = false;
        if (this._brojStrana > 600) {
            rez = true;
        }
        return rez;
    }

    //metoda skupa
    skupa() {
        let rez = false;
        if (this._cena > 8000) {
            rez = true;
        }
        return rez;
    }

    //metoda dugačkoIme
    dugačkoIme() {
        let rez = false;
        if (this._autor.length > 18) {
            rez = true;
        }
        return rez;
    }

    // //metod ispisAutor
    // ispisAutor() {
    //     let htmlIspisAutor = `<p>${this._autor}</p>`;
    //     return htmlIspisAutor;
    // }

    // //metod ispisNaslov
    // ispisNaslov() {
    //     let htmlIspisNaslov = `<p>${this._naslov}</p>`;
    //     return htmlIspisNaslov;
    // }

    //metod ispis
    ispis(x) {
        let ispisX = `<p>${x}</p>`;
        return ispisX;
    }
    
}