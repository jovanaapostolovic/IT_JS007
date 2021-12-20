console.log(`logicki operatori`);

//1. negacija
//2. and
//3. or
// if (!true && true) -> false
//nif (!true && true || false) -> (false && true || false) -> (false || false) -> false
//if( (!true && true) || false) 

let pol = "z";
let god = -27;

if (pol == "m" && god >= 18) {
    console.log(`osoba je muškog pola i punoletna je`);
}
else if (pol == "m" && god < 18 && god >= 0) {
    console.log(`osoba je muškog pola i maloletna je`);
}
else if (pol == "z" && god >= 18) {
    console.log(`osoba je ženskog pola i punoletna je`);  
}
else if (pol == "z" && god < 18 && god >= 0) {
    console.log(`osoba je ženskog pola i maloletna je`);
}
else {
    console.log(`pogrešan unos`);
}

pol = "Ž";
if (pol =="z" || pol =="Z" || pol == "ž" || pol == "Ž") {
    document.body.innerHTML = `<img src="Slike/female.jpg">`
    
}
else if (pol=="m"|| pol=="M") {
    document.body.innerHTML = `<img src="Slike/male.jpg">`
    
}
else {
    document.body.innerHTML = `<p>pogrešan unos</p>`
}

//document.body.innerHTML = `hello` -> prelepi sve ostalo sa hello
//document.body.innerHTML += `hello` -> doda se na sadržaj hello

///////////////
pol = "z";
god = 15;
if ((pol =="z" || pol =="Z" || pol == "ž" || pol == "Ž") && god>=18 ){
    console.log(`osoba je ženskog pola i punoletna je`);
    
}
//0<god<18 neeee!!! -> 0<=god && god<18 odnosno god>=0 && god<18
else if ((pol =="z" || pol =="Z" || pol == "ž" || pol == "Ž") && god>=0 && god<18 ) {
    console.log(`osoba je ženskog pola i maloletna je`);
}
else if ((pol=="m" || pol=="M") && god>=18) {
    console.log(`osoba je muškog pola i punoletna je`);
    
}
else if ((pol == "m" || pol == "M") && god<18) {
    console.log(`osoba je muškog pola i maloletna je`);

}    
else {
    console.log(`pogrešan unos`);

}
