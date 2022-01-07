// 3. Izmeniti objekte u prethodnom zadatku tako da svaki objekat sadrži i polje plate koje je niz neto plata koje je svaka osoba zaradila u poslednjih 5 godina.
// Napisati funkciju koja ispisuje podatke o osobi koja ima najveću razliku između svoje minimalne i maksimalne plate.

let visine = [
    { ime: "Pera", visina: 189, pol: "M", plate: [10000, 60000, 50000, 50000, 40000],
maxPlata: function () {
    let max = this.plate[0];
    for (let i = 0; i < this.plate.length; i++) {
        if (this.plate[i] > max) {
            max = this.plate[i];
        }
        
    }
    return max;
},

minlata: function () {
    let min = this.plate[0];
    for (let i = 0; i < this.plate.length; i++) {
        if (this.plate[i] < min) {
            min = this.plate[i];
        }
        
    }
    return min;
},

razMaxMin: function () {
    return this.maxPlata() - this.minlata();
}

},
    { ime: "Laza", visina: 192, pol: "M", plate: [50000, 60000, 50000, 50000, 50000],
maxPlata: function () {
    let max = this.plate[0];
    for (let i = 0; i < this.plate.length; i++) {
        if (this.plate[i] > max) {
            max = this.plate[i];
        }
        
    }
    return max;
},

minlata: function () {
    let min = this.plate[0];
    for (let i = 0; i < this.plate.length; i++) {
        if (this.plate[i] < min) {
            min = this.plate[i];
        }
        
    }
    return min;
} ,

razMaxMin: function () {
    return this.maxPlata() - this.minlata();
}}, 
    { ime: "Milka", visina: 164, pol: "Z", plate: [50000, 60000, 60000, 50000, 40000],
maxPlata: function () {
    let max = this.plate[0];
    for (let i = 0; i < this.plate.length; i++) {
        if (this.plate[i] > max) {
            max = this.plate[i];
        }
        
    }
    return max;
},

minlata: function () {
    let min = this.plate[0];
    for (let i = 0; i < this.plate.length; i++) {
        if (this.plate[i] < min) {
            min = this.plate[i];
        }
        
    }
    return min;
},

razMaxMin: function () {
    return this.maxPlata() - this.minlata();
} },
    { ime: "Mika", visina: 176, pol: "M", plate: [50000, 60000, 60000, 50000, 40000],
maxPlata: function () {
    let max = this.plate[0];
    for (let i = 0; i < this.plate.length; i++) {
        if (this.plate[i] > max) {
            max = this.plate[i];
        }
        
    }
    return max;
},

minlata: function () {
    let min = this.plate[0];
    for (let i = 0; i < this.plate.length; i++) {
        if (this.plate[i] < min) {
            min = this.plate[i];
        }
        
    }
    return min;
},

razMaxMin: function () {
    return this.maxPlata() - this.minlata();
} },
    { ime: "Sonja", visina: 178, pol: "Z", plate: [50000, 60000, 50000, 150000, 40000],
maxPlata: function () {
    let max = this.plate[0];
    for (let i = 0; i < this.plate.length; i++) {
        if (this.plate[i] > max) {
            max = this.plate[i];
        }
        
    }
    return max;
},

minlata: function () {
    let min = this.plate[0];
    for (let i = 0; i < this.plate.length; i++) {
        if (this.plate[i] < min) {
            min = this.plate[i];
        }
        
    }
    return min;
},

razMaxMin: function () {
    return this.maxPlata() - this.minlata();
} },
    { ime: "Milica", visina: 166, pol: "Z", plate: [50000, 60000, 30000, 50000, 40000],
maxPlata: function () {
    let max = this.plate[0];
    for (let i = 0; i < this.plate.length; i++) {
        if (this.plate[i] > max) {
            max = this.plate[i];
        }
        
    }
    return max;
},

minlata: function () {
    let min = this.plate[0];
    for (let i = 0; i < this.plate.length; i++) {
        if (this.plate[i] < min) {
            min = this.plate[i];
        }
        
    }
    return min;
},

razMaxMin: function () {
    return this.maxPlata() - this.minlata();
} }
];

let najRaz = niz => {
    let rez = niz[0];
    let maxRazlika = niz[0].razMaxMin();
    for (let i = 1; i < niz.length; i++) {
        if (niz[i].razMaxMin() > maxRazlika) {
            maxRazlika = niz[i].razMaxMin();
            rez = niz[i];
        }
        
    }
    return rez;

};

console.log(najRaz(visine));

