let getTodos = resource => {
    //1. kreiranje XML objekta
    let request = new XMLHttpRequest();

    //2. otvaranje kreiranog zahteva
    request.open(`GET`, resource);

    //3. šaljemo zahtev
    request.send();

    return new Promise((resolve, reject) => {
        request.addEventListener(`readystatechange`, () => {
            if (request.readyState == 4 && request.status == 200) {
                //sve ok
                //console.log(request.responseText);
                //callback(request.responseText, undefined);
                resolve(request.responseText);
            }
            else if (request.readyState == 4) {
                //nešto nije ok
                //console.log("Ne mogu da dohvatim podatke");
               // callback(undefined, "Ne mogu da dohvatim podatke");
               reject("Ne mogu da dohvatim podatke"); 
            }
        });
    });
    
    // return p; //vraćam objekat promise
    
}

//želim 1. da se učit todos, pa 
//2. da se učita fruits, pa 
//3. vegetables

getTodos("../Json/todos.json").then(data => {
    console.log("promise todos resolved", data);
    return getTodos("../Json/fruits.json"); //vraćam promise na koji se odnosi naredni then
}).then(data => {
    console.log("promise fruits resolved", data);
    return getTodos("../Json/vegetables.json");
}).then(data => {
    console.log("promise vegetables resolved", data);
}).catch(err => {
    console.log("promise rejected", err);
});


console.log("KRAJ");
