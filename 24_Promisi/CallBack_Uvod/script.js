//primeri callback funkcija

let myFunc = callback => {
    callback();
}

//realizacija f-je vrši se prilikom poziva roditeljske f-je
myFunc(() => {
    console.log("Callback okinuta");
});

////////////

let sum = callback => {
    callback(5, 7);
    let br1 = 6;
    let br2 = 4;
    callback(br1, br2);
}

//1.
//realizacija funkcije se prosleđuje kao parametar
sum((x, y) => {
    console.log(x + y);
});

//2.
//kreiramo posebnu funkciju za realizaciju i onda je prosledimo kao parametar
function printSum(a, b) {
    console.log(a + b);
}

sum(printSum); //poziv f-je koja realizuje ide bez zagrada

////////////7

let my = f => {
    f(`Jelena`);
}

my(x => {
    console.log(`Hello ${x}!`);
});

///////////////

let računaj = (str, cb) => {
    console.log(str);
    cb(7, 3);
};

računaj("oduzimanje", (x, y) => {
    console.log(x - y);
});

računaj("množenje", (x, y) => {
    console.log(x * y);
}); 

///////////

let računaj2 = (str, cb) => {
    let a = 11;
    let b = 15;
    console.log(str, cb(a, b));
}

računaj2("deljenje", (a, b) => {
    return a / b;
});

///////////

let računaj3 = (str, a, b, cb) => {
    console.log(str, cb(a, b));
}

računaj3("deljenje", 15, 17, (a, b) => {
    return a / b;
});

