/*let i = 1;
console.log(i); //1
i++;
console.log(i); //2
i++;
console.log(i); //3
i++;
console.log(i); //4
i++;
console.log(i); //5
i++;*/

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log(`vrednost promenljive i je: ${i}`); //6

//zadatak 1
//a u istom redu
i = 1;
let rez = "";
while (i <= 20) {
    //rez = rez + i + " ";
    rez += i + " ";
    i++;
}
console.log(rez);


//b u novom redu
i = 1;
while (i <= 20) {
    console.log(i);
    i++;
    
}

//zadatak 2
i = 20;
while (i >= 1) {
    console.log(i);
    i--;
    
}

//zadatak 3
//prvi način
i = 1;
while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
    
}
//drugi način
i = 2;
while (i <= 20) {
    console.log(i);
    //i = i + 2; -> može
    //i + 2 nikako! -> beskonačna petlja
    i += 2;
}

//zadatak 4
/*
document.body.innerHTML += "<p style='color: red'>1. paragraf</p>";
document.body.innerHTML += "<p style='color: purple;'>2. paragraf</p>";
document.body.innerHTML += "<p style='color: green;'>3. paragraf</p>";
document.body.innerHTML += "<p style='color: blue;'>4. paragraf</p>";
document.body.innerHTML += "<p style='color: yellow;'>5. paragraf</p>";
document.body.innerHTML += "<p style='color: orange;'>6. paragraf</p>";
*/

let n = 16;
i = 1;
while (i <= n) {
    
    if (i % 3 == 1) {
        document.body.innerHTML += `<p style='color: red;'>${i} paragraf</p>`;
     
    }
    else if (i % 3 == 2) {
        document.body.innerHTML += `<p style='color: purple;'>${i} paragraf</p>`;
        
    }
    else {
        document.body.innerHTML += `<p style='color: green;'>${i} paragraf</p>`;
    }
    i++;
}

//zadatak 6
//suma od 1 do 100
i = 1;
let suma = 0;
while (i <= 100) {
    suma = suma + i;
    i++;
    
}
console.log(`suma brojeva od 1 do 100 je: ${suma}`);
/*

------------------------------
#iteracije | i | suma
------------------------------
     0     | 1 |  0
     1     | 2 |  1
     2     | 3 |  3
     3     | 4 |  6 
     4     | 5 |  10
     ....................
     ....................
     100   |101|  5050
 

*/

// odrediti sumu brojeva od 1 do n
n = 18;
i = 1;
suma = 0;
while (i <= n) {
    suma = suma += i;
    i++;
    
}
console.log(`suma brojeva od 1 do ${n} jednaka je ${suma}`);

//odrediti proizvod brojev od n do m
n = 3;
let m = 6;
let proizvod = 1;
i = n;
while (i <= m) {
    proizvod = proizvod * i;
    i++;
}
console.log(`proizvod brojeva od ${n} do ${m} jednak je ${proizvod}`);

//zadatak 10
n = 2;
m = 6;
let suma1 = 0;
let suma2 = 0;
i = n;
while (i <= m) {
    if (i % 2 == 0) {
        suma1 = suma1 + i * i;
    }
    else {
        suma2 = suma2 + i * i * i;
    }
    i++;
}
console.log(`${suma1} i ${suma2}`);


//zadatak 11
/*let k = 8;
i = 1;
while (k % i == 0) {

    
}*/
