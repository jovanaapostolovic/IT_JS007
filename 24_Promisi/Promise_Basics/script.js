let getSomething = () => {
    let obj = new Promise((resolve, reject) => {
        // resolve("Nešto resolve"); //sve ok prošlo onda je resolve
        reject("Nešto reject"); // nešto nije ok prošlo
    });
    //console.log(obj);
    return obj; // vraća promise objekat
}

//ako je promise vratio resolve, realizuje se .then() grana
//ako je promise vratio reject, realizuje se .catch() grana
getSomething().then(data => {
    console.log(`Aktivirana je ${data} grana`); // data dobija vrednost one poruke koja se prosleđuje u resolve
}).catch(err => {
    console.log(`Aktivirana je ${err} grana`); //err dobija vrednost one poruke koja se prosleđuje u reject
})