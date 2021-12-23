// 1. Zadatak
// Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je ponedeljak).

let d = 8;
switch (d) {
    case 1:
        console.log(`Ponedeljak je prvi dan u nedelji`);
        break;
    case 2:
        console.log(`Utorak je drugi dan u nedelji`);
        break; 
    case 3:
        console.log(`Sreda je treći dan u nedelji`);
        break;
    case 4:
        console.log(`Četvrtak je četvrti dan u nedelji`);
        break;
    case 5:
        console.log(`Petak je peti dan u nedelji`);
        break;
    case 6:
        console.log(`Subota je šesti dan u nedelji`);
        break; 
    case 7:
        console.log(`Nedelja je sedmi dan u nedelji`);
        break;  

    default:
        console.log(`U nedelji ne postoji dan sa rednim brojem ${d}`);
        break;
}

// 2. Zadatak
// Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan).

let o = 5;
switch (o) {
    case 1:
        console.log(`Nedovoljan`);
        break;
    case 2:
        console.log(`Dovoljan`);
        break; 
    case 3:
        console.log(`Dobar`);
        break;
    case 4:
        console.log(`Vrlo dobar`);
        break;
    case 5:
        console.log(`Odličan`);
        break;

    default:
        console.log(`Ne postoji takva ocena`);
        break;
}

// 3. Zadatak
// Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan.

let b = 10;
switch (b) {
    case 0:
        console.log(`Uneti broj je nula`);
        break;
    case 2:
        console.log(`Uneti broj je dvojka`);
        break;
    case 4:
        console.log(`Uneti broj je četvorka`);
        break;
    case 6:
        console.log(`Uneti broj je šestica`);
        break;
    case 8:
        console.log(`Uneti broj je osmica`);
        break;

    default:
        console.log(`Unos je pogrešan`);
        break;
}

// 4. Zadatak
// Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’.

let br1 = 2;
let br2 = 5;
let k = "o";
switch (k) {
    case "m":
        console.log(`${br1 * br2}`);
        break;
    case "d":
        console.log(`${br1 / br2}`);
        break;
    case "s":
        console.log(`${br1 + br2}`);
        break;
    case "o":
        console.log(`${br1 - br2}`);
        break;

    default:
        console.log(`Nepoznata operacija`);
        break;
}

// 5. Zadatak
// Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.

let datum = new Date ();
let dan = datum.getDay();
switch (dan) {
    case 1:
        console.log(`Preostalo je još ${5 - dan} cela dana do vikenda `);
        break; 
    case 2:
        console.log(`Preostalo je još ${5 - dan}  cela dana do vikenda`);
        break;
    case 3:
        console.log(`Preostalo je još ${5 - dan} cela dana do vikenda`);
        break;
    case 4:
        console.log(`Preostalo je još ${5 - dan} cela dana do vikenda`);
        break;
    case 5:
        console.log(`Preostalo je još ${5 - dan} celih dana do vikenda`);
        break;  

    default:
        console.log(`Vikend je`);
        break;
}

// 6. Zadatak
// Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.
let mesec = datum.getMonth();
switch (mesec) {
    case 0:
        console.log(`Januar`);
        break;
    case 1:
        console.log(`Februar`);
        break;
    case 2:
        console.log(`Mart`);
        break; 
    case 3:
        console.log(`April`);
        break;
    case 4:
        console.log(`Maj`);
        break;
    case 5:
        console.log(`Jun`);
        break;
    case 6:
        console.log(`Jul`);
        break;
    case 7:
        console.log(`Avgust`);
        break;
    case 8:
        console.log(`Septembar`);
        break; 
    case 9:
        console.log(`Oktobar`);
        break;
    case 10:
        console.log(`Novembar`);
        break;
    case 11:
        console.log(`Decembar`);
        break;
}

// 7. Zadatak
// Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara, ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara.

switch (mesec) {
    case 0:
        console.log(`Januar ima 31 dan`);
        break;
    case 1:
        let godina = datum.getUTCFullYear();
        if (godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0)) {
            let feb = 29;
        }
        else {
            feb = 28;
        }
        console.log(`Februar ima ${feb} dana`);
        break;
    case 2:
        console.log(`Mart ima 31 dan`);
        break; 
    case 3:
        console.log(`April ima 30 dana`);
        break;
    case 4:
        console.log(`Maj ima 31 dan`);
        break;
    case 5:
        console.log(`Jun ima 30 dana`);
        break;
    case 6:
        console.log(`Jul ima 31 dan`);
        break;
    case 7:
        console.log(`Avgust ima 31 dan`);
        break;
    case 8:
        console.log(`Septembar ima 30 dana`);
        break; 
    case 9:
        console.log(`Oktobar ima 31 dan`);
        break;
    case 10:
        console.log(`Novembar ima 30 dana`);
        break;
    case 11:
        console.log(`Decembar ima 31 dan`);
        break;
}

// 8. Zadatak
// Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.

let boja = "orange";
switch (boja) {
    case "red":
        document.body.innerHTML += `<p style="color:${boja};">Tekst je crvene boje</p>`;
        break;
    case "green":
        document.body.innerHTML += `<p style="color:${boja};">Tekst je zelene boje</p>`;
        break;
    case "blue":
        document.body.innerHTML += `<p style="color:${boja};">Tekst je plave boje</p>`;
        break;

    default:
        document.body.innerHTML += `<p style="color:yellow;">Nije uneta ni jedna od tri moguće boje</p>`;
        break;
}