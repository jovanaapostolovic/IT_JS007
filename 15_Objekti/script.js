console.log("Objekti");

let blog1 = {
    title: "HTML",
    content: "Ovo je blog o osnovnim HTML tagovima",
    author: "Jelena"
};

console.log(blog1);
console.log(typeof blog1); //ispis tipa - objekt
console.log(blog1.title); //ispis propertija
console.log(blog1[`title`]); //ispis propertija 2. nacin

//izmene propertija
blog1.title = "Osnove HTML-a"
console.log(blog1);
blog1["author"] = "Jelena Matejic"
console.log(blog1);

///////////////////////

let user = {
    username: "JM",
    age: 27,
    blogs: ["If naredba grananja", "While petlja", "For petlja"],
    login: function() {
        console.log("Ulogovani ste");
    },
    logout: function() {
        console.log("Izlogovani ste");
    },
    logBlogs: function() {
        console.log(this);
        console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }

};

console.log(user);
console.log(user.blogs);

let nasloviBlogova = user.blogs;
for (let i = 0; i < nasloviBlogova.length; i++) {
    document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`;
}

for (let i = 0; i < user.blogs.length; i++) {
    document.body.innerHTML += `<h4>${user.blogs[i]}</h4>`;
}

//poziv metoda
user.login();
user.login();
user.logout();

//poivz metoda koje u sebi sadrze poziv nekog propertija
user.logBlogs();

//this
console.log(this);

///vezbanje
// Formirati objekat dan koji sadrži:
// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).
// Napisati metode koje:
// Određuje i vraća prosečnu temperaturu izmerenu tog dana.
// Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
// Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
// Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
// Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
// Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.

let dan = {
    datum: "2021/12/23",
    kisa: false,
    sunce: false,
    oblacno: true,
    vrednostiTemperature: [0, 2, 2, 3, 4, 2, 1, 1, 0],
    prosTemp: function () {
        let zb = 0;
        let b = 0;
        for (let i = 0; i < this.vrednostiTemperature.length; i++) {
            zb += this.vrednostiTemperature[i];
            b++;
        }
        return zb / b;
    },
    brNatprosecnaTemp: function () {
        let br = 0;
        let p = this.prosTemp();
        for (let i = 0; i < this.vrednostiTemperature.length; i++) {
            if (this.vrednostiTemperature[i] > p) {
                br++;
            }
            
        }
        return br;
    },
    maxTemp: function () {
        let max = this.vrednostiTemperature[0];
        for (let i = 0; i < this.vrednostiTemperature.length; i++) {
            if (this.vrednostiTemperature[i] > max) {
                max = this.vrednostiTemperature[i];
            }
            
        }
        let broj = 0;
        for (let i = 0; i < this.vrednostiTemperature.length; i++) {
            if (this.vrednostiTemperature[i] == max) {
                broj++;
            }
            
        }
        return broj;
        
    },
    vrednostIzmDva: function (a, b) {
        let bab = 0;
        for (let i = 0; i < this.vrednostiTemperature.length; i++) {
            if (this.vrednostiTemperature[i] > a && this.vrednostiTemperature[i] < b) {
                bab++;
            }
            
        }
        return bab;
        // oni su ispisivali te temp, a nisu ih brojali, a mozda i ne hahahha. ipak je dobro
    },
    iznadProsekaIliNe: function () {
        let pros = dan.prosTemp();
        let brIznad = 0;
        let bri = 0;
        for (let i = 0; i < this.vrednostiTemperature.length; i++) {
            if (this.vrednostiTemperature[i] > pros) {
                brIznad++;
            }
            else {
                bri++;
            }
            
        }
        return (brIznad > bri) ? true : false;

        // return (this.vrednostiTemperatura.length / 2) < this.brNatprosecnaTemp();
    },
    
    // ledeniDan: function () {
    //    this.vrednostiTemperature.forEach(t => {
    //        if (t > 0) {
    //            return false; - ne radi return u callback f-ji 
    //        }
    //    });
    //    return true;
    // }  
    //1. nacin
    // ledeniDan: function () { 
    //     for (let i = 0; i < this.vrednostiTemperature.length; i++) {
    //         if (this.vrednostiTemperature[i] > 0) {
    //             return false;
    //         }
            
            
    //     }
    //     return true;
    // }
    //2.nacin
    ledeniDan: function () {
        let rez = true;
        this.vrednostiTemperature.forEach(e => {
            if ( e> 0) {
                rez = false;
            }
        });
        return rez;
    }



};
console.log(dan.prosTemp());
console.log(dan.brNatprosecnaTemp());
console.log(dan.maxTemp());
console.log(dan.vrednostIzmDva(1, 4));
console.log(dan.iznadProsekaIliNe());
console.log(dan.ledeniDan());

