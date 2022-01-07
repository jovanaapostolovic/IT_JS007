// Dat je sledeći niz objekata u obliku recept/sastojci:
let recepti = [
  { naziv: "kolac", sastojci: ["jaja", "brasno", "mleko", "secer"] },
  { naziv: "kajgana", sastojci: ["jaja", "so"] },
  { naziv: "pires",  sastojci: ["krompir", "mleko", "maslac", "so"] },
  { naziv: "espreso", sastojci: ["kafa", "mleko"] },
  { naziv: "kacamak", sastojci: ["palenta", "so", "mast"] }
];
// Napisati program koji ispisuje sve recepte čiji naziv sadrži slovo “s”, a broj sastojaka je strogo veći od 2.

let sadrziSSastojci = niz => {
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].naziv.includes("s") && niz[i].sastojci.length > 2) {
            console.log(niz[i].naziv);
        }
        
    }
};

sadrziSSastojci(recepti);
