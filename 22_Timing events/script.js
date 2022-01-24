console.log("1");
console.log("2");

// for (let i = 1; i <= 1000000; i++) {
//     console.log(i);
    
// } - blokira asinhrono programiranje, blokirajući kod

//setTimeout se ponaša asinhrono, štoperica radi u pozadini
setTimeout(() => {
    console.log("3");
}, 1000 * 4);

let btn1 = document.getElementById("btn1");
let div = document.getElementById("result");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn2 = document.getElementById("btn2");
let ispis = document.getElementById("ispis");

let startB = document.getElementById("start");
let stopB = document.getElementById("stop");
let odbrojavanje = document.getElementById("odbrojavanje");
let sat = null;

let timer = null;
let clock = null;

btn1.addEventListener("click", function(){
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if (timer === null) {
            timer = setTimeout(() => {
            div.innerHTML= `${sati}:${minuti}:${sekunde}`;
            timer = null;
        }, 2000);
    }
    
});

btn2.addEventListener("click", function() {
    clearTimeout(timer);
    timer = null;
});

btn3.addEventListener("click", function () {
    if (clock === null) {
        clock = setInterval(() => {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            ispis.innerHTML= `${sati}:${minuti}:${sekunde}`;
        }, 1000 / 10);
    }
    
});

btn4.addEventListener("click", function () {
    clearInterval(clock);
    timer = null;
});

startB.addEventListener("click", () => {
    if (sat === null) {
            let n = 0;  
            sat = setInterval(() => {
            n = n + 1;
            odbrojavanje.setAttribute("value", n);
        }, 1000);
    }
    
});

stopB.addEventListener("click", () => {
    clearInterval(sat);
    sat = null;
});


// setTimeout(() => {
//     console.log(this); // this = window
// }, 1000 / 2);
// let btn1 = document.getElementById("btn1");
// btn1.addEventListener("click", () => {
//     console.log(this);
// });


// setTimeout(function() {
//     console.log(this);  //this = objekat koji poziva metodu
// }, 1000 * 2);
//ovde se vidi razlika:
// let btn1 = document.getElementById("btn1");
// btn1.addEventListener("click", function(){
//     console.log(this);
// });


// function ispis() {
//     console.log("3");
// }

// setTimeout(ispis, 1000 * 2);


