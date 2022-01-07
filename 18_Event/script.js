console.log("Events");


// 1. dohvati html element na koji želiš da postaviš osluškivač
let pKlikni = document.getElementById("klikni");

// 2. na element postavljamo osluškivač
pKlikni.addEventListener("click", () => {
    console.log("Jednom kliknuto na paragraf");
});

///////

//1.
let pKlikniDva = document.getElementById("dvaKlika");
//2.
pKlikniDva.addEventListener("dblclick", () => {
    console.log("Dva puta kliknuto na paragraf");
});

/////////////

//1.
let btnPlus = document.getElementById("plus");

//2.
let res = 0;
let spanRes = document.getElementById("res");
btnPlus.addEventListener("click", () => {
    res++;
    //console.log(res);
    spanRes.innerHTML = res;

    if (res < 0) {
        spanRes.style.color = "blue";
    }
    else {
        spanRes.style.color = "red";
    }
});

let btnMinus = document.getElementById("minus");

//
btnMinus.addEventListener("click", () => {
    res--;
    spanRes.innerHTML = res;

    if (res < 0) {
        spanRes.style.color = "blue";
    }
    else {
        spanRes.style.color = "red";
    }
});

/////////////////

let btnHello = document.getElementById("hello");
let inputIme = document.getElementById("ime");
let pHelloIspis = document.getElementById("helloIspis");

btnHello.addEventListener("click", () => {
    let inputImeValue = inputIme.value;
    pHelloIspis.innerHTML = `Hello ${inputImeValue}`;
});

/////////////Dom

let inputGodinaRođenja = document.getElementById("godRođ");
let inputPol = document.querySelectorAll("input[name='pol']");
let btnPošalji = document.getElementById("pošalji");
let pIspis = document.getElementById("ispis");

btnPošalji.addEventListener("click", (e) => {
    e.preventDefault();
    let date = new Date();
    let tekućaGodina = date.getFullYear();

    let inputGodinaRođenjaValue = inputGodinaRođenja.value;
    inputGodinaRođenjaValue = parseInt(inputGodinaRođenjaValue);
    
    // console.log(typeof inputGodinaRođenjaValue);

    let god = tekućaGodina - inputGodinaRođenjaValue;
    pIspis.innerHTML = `Korisnik ima ${god} godina`;

    let checkedPol = document.querySelector(`input[name="pol"]:checked`); //vraća html tag onog input polja na koje je kliknuto
    let checkedPolValue = checkedPol.value; //vraća vrednost iz selektovanog html taga

    if (checkedPolValue == "z") {
        pIspis.innerHTML += " i ženskog je pola";
    }
    else if (checkedPolValue == "m") {
        pIspis.innerHTML += " i muškog je pola";
    }
    else {
        pIspis.innerHTML += " i nije se opredelio za pol";
    }
});
