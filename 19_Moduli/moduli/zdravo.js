function ispis(poruka) {
    console.log(poruka);
}

function zdravo(ime) {
    console.log(`Zdravo, ${ime}`);
}

let ime = "Jovana";

export {zdravo, ime}; // proizvoljan br. promenljivih i funkcija iz modula može da eksportuje, a ne mora sve