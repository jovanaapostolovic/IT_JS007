let getTodos = (resource, callback) => {
    //1. kreiranje XML objekta
    let request = new XMLHttpRequest();

    request.addEventListener(`readystatechange`, () => {
        if (request.readyState == 4 && request.status == 200) {
            //sve ok
            //console.log(request.responseText);
            callback(request.responseText, undefined);
        }
        else if (request.readyState == 4) {
            //nešto nije ok
            //console.log("Ne mogu da dohvatim podatke");
            callback(undefined, "Ne mogu da dohvatim podatke");
        }
    });

    //2. otvaranje kreiranog zahteva
    request.open(`GET`, resource);

    //3. šaljemo zahtev
    request.send();
}



getTodos(`../Json/todos.json`, (data, err) => {
    console.log("Callback okinuta");
    // ako je err == true, ispisati grešku
    if (err) {
        console.log(err); //ispisuje grešku, ako je došlo do greške u todos.json
    }
    else {
        console.log(data); //ispisuje podatke kojima može dalje da raspolaže iz todos.json fajla

        //nakon što su se ispisali podaci iz todos.json, pozivamo podatke iz fruits.json
        getTodos(`../Json/fruits.json`, (data, err) => {
            if (err) {
                console.log(err); //ispisuje ako je došlo do greške u fruits.json
            }
            else {
                console.log(data); // ispisuje podatke iz fruits.json fajla

                // nakon učitavanja prethodnog, pozivamo sledeći vegetables.json
                getTodos(`../Json/vegetables.json`, (data, err) => {
                    if (err) {
                        console.log(err); //ispisuje ako je došlo do greške u vegetables.js
                    }
                    else {
                        console.log(data); //ispisuje podatke iz vegetables.json
                    }
                });
            }
        });
    }
});

console.log("KRAJ");
