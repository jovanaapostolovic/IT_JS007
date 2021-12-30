console.log(document);
console.log(typeof document);

console.log(document.body);
console.log(typeof document.body);

let p1 = document.getElementById(`p1`);
console.log(p1);
console.log(typeof p1);

let cont = document.getElementsByClassName(`container`);
console.log(cont);
console.log(typeof cont);

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
    
}
let contNiz = Array.from(cont);

contNiz.forEach(elem => {
    console.log(elem);
}); 

let paragrafi = document.getElementsByTagName(`p`);
for (let i = 0; i < paragrafi.length; i++) {
    console.log(paragrafi[i]);
    
}

let linkovi = document.getElementsByName(`link`);
for (let i = 0; i < linkovi.length; i++) {
    console.log(linkovi[i]);
    
}

p1 = document.querySelector(`#p1`);
console.log(p1);

cont = document.querySelector(`.container`);
console.log(cont);

cont = document.querySelectorAll(`.container`);
console.log(cont);
for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
    
}
cont.forEach(elem => {
    console.log(elem);
});

paragrafi = document.querySelectorAll(`p`);
console.log(paragrafi);
linkovi = document.querySelectorAll(`[name="link"]`);
console.log(linkovi);


//vezbanje

//Dohvatiti prvi div tag sa klasom „error“.
let er = document.querySelector(`div.error`);
console.log(er);

er = document.querySelector(`.error`);
console.log(er);

let div2 = document.getElementsByClassName(`error`);
console.log(div2[0]);
console.log(div2[div2.length - 1]);

//Dohvatiti poslednji red u tabeli.
let posRedTabele = document.querySelector(`#poslednjiRed`);
console.log(posRedTabele);

let red = document.querySelector(`table tr:last-child`);
console.log(red);

red = document.querySelector(`table tr:last-child td:last-child`); // sa razmakom znači da je element unutara elementa
console.log(red);

//Dohvatiti sve linkove na stranici.
linkovi = document.querySelectorAll(`a`);
console.log(linkovi);

//Dohvatiti sve slike na stranici.
let slike = document.querySelectorAll(`img`);
console.log(slike);

p1.innerHTML += " Promenjen <span>tekst</span> prvog paragrafa";

let sviLinkovi = document.querySelectorAll("a");
sviLinkovi.forEach(link => {
    //HTML atributi
    link.href = "https://www.google.com";
    link.target = "_blank";

    //CSS stilovi
    link.style.color = "green";
    link.style.textDecoration = "none";

    // link.style = "color: green; text-decoration: none;"
    // ovako se sav css prethodni za taj element poništava

    //preko metode
    link.setAttribute('name', 'link2'); //isto kao i link.name = "link2"; -kada imamo = možemo da dodamo i +=, ali ne moze sa el.style =

    //link.setAttribute("style", "color")
});

//vežbanje

// 1. zadatak
let sviParagrafi = document.querySelectorAll("p");
sviParagrafi.forEach( p => {
    p.innerHTML += "VAŽNO!!!";
});

// 2. zadatak
let sviDivEr = document.querySelectorAll("div.error");
sviDivEr.forEach( er => {
    er.innerHTML += " <h1>Greška!</h1>";
});

//3. zadatak
// for petljim
for (let i = 0; i < sviParagrafi.length; i++) {
    sviParagrafi[i].innerHTML += (i + 1) ** 2;
    
};
//for.each petljom
sviParagrafi.forEach((el, index) => {
el.innerHTML += (index + 1) ** 2;
});

//4. 
slike.forEach(el => {
    el.setAttribute("alt", "123")
});

//5.
sviParagrafi.forEach(el => {
    el.setAttribute("style", "color: purple")
});

//6.
for (let i = 0; i < sviParagrafi.length; i++) {
    if (i % 2 == 0) {
        sviParagrafi[i].style.backgroundColor = "green";
    }
    else {
        sviParagrafi[i].style.backgroundColor = "red";
    }
    
};

// preko child dodati

//7.
sviLinkovi.forEach(el => {
    el.style.padding = "5px";
    el.style.fontSize = "18px";
    el.style.textDecoration = "none";
});
sviLinkovi.forEach((el, index) => {
    if (index % 2 != 0) {
        el.style.backgroundColor = "green";
        el.style.color = "purple";
    }
    else {
        el.style.backgroundColor = "blue";
        el.style.color = "white";
    }
});

//8. 
// for (let i = 0; i < slike.length; i++) {
//     let ex = getFileExtension(slike[i]);
//     if (ex == "png") {
//         slike[i].style.borderStyle = "solid";

//     }
    
// };
//dobar:
// slike.forEach(e => {
//     if (e.src.indexOf) {
        
//     }
// });

//9.
// sviLinkovi.forEach(link => {
//     if (target === "_blank") {
        
//     }
// };

//11.slajd
let niz = ["Stefan", "Ivan", "Luka"];
// for (let i = 0; i < niz.length; i++) {
//     if (niz[i].charAt(0) == "S") {
//         document.body.innerHTML += `<a href="_blank">${niz[i]}</a>`;
//     }
//     else {
//         document.body.innerHTML += `<a href="#">${niz[i]}</a>`;
//     }
    
// };

niz.forEach(ime => {
    if (ime.startsWith("S")) {
        document.body.innerHTML += `<a href="#" target="_blank">${ime}</a>`;
    }
    else {
        document.body.innerHTML += `<a href="#">${ime}</a>`;
    }
});

// document.body.innerHTML += "<ul>";
let listaString = "<ul>";
niz.forEach((ime, index) => {
    if (i % 2 == 0) {
        document.body.innerHTML += `<li style="color:red">${ime}</li>`;
    }
    else {
        document.body.innerHTML += `<li style="color:blue">${ime}</li>`;
    }
})
listaString += "</ul>";
document.body.innerHTML += listaString;

for (let i = 0; i < sviParagrafi.length; i++) {
    if (i % 2 == 0) {
        sviParagrafi[i].classList.add(`error`);
    }
    else {
        sviParagrafi[i].classList.add(`success`);
    }
    
};

// sviParagrafi.forEach((p, index) => {
//     if (index ) {
        
//     }
// }); - vrati se

sviParagrafi.forEach(p => {
    if (p.textContent.includes(`error`)) {
        p.classList.add(`error`);
    }
    else if (p.textContent.includes(`success`)) {
        p.classList.add(`success`);
    }
});

for (let i = 0; i < sviParagrafi.length; i++) {
    
    
}

