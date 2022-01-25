//db je objekat baze, njega vucemo iy html fajla
console.log(db);

//pristupanje kolekciji
let customers = db.collection(`customers`);
console.log(customers);

//pristupanje dokumentu
//1.
let doc1 = customers.doc(`japostolovic`);
console.log(doc1);
//2.
let doc2 = db.collection(`tasks`).doc(`domaci`);
console.log(doc2);

/*
za pristup dokumentu db.collection(`..`).doc(`...`)
kod dokumenata imamo sledece operacije:
CRUD(Create, Read, Update, Delete)
 create: doc.set(...)
 read:   doc.get(...)
 update: doc.update(...)
 delete: doc.delete(...)
sve 4 operacije vracaju promise
znaci da nakon njih lancamo .then() i .catch()
*/

let obj = {
    Name: "Vesna",
    Age: 22,
    Addresses: ["Nis", "Subotica"],
    Salary: 47000.8

};

db.collection(`customers`)
.doc(`vmatovic`)
.set(obj)
.then(() => {
    console.log("Dodat novi dokument u kolekciju `customers");
    return db.collection(`customers`)
    .doc(`vmatovic`)
    .set(
        {height: 180}, 
        {merge: true}
    );
})
.then(() => {
    console.log("Spojen dokument `vmatovic` u kolekciju `customers");
})
.catch((err) => {
    console.log(`Greska prilikom dodavanja novog dokumenta: ${err}`);
})
.catch((err) => {
    console.log(`Greska prilikom dodavanja novog dokumenta: ${err}`);
});

let datum1 = new Date("2022-01-26 20:00:00");
let datum2 = new Date("2022-01-26 24:00:00");

let obj2 = {
    Title: "Posao",
    StartDate: firebase.firestore.Timestamp.fromDate(datum1),
    DueDate: firebase.firestore.Timestamp.fromDate(datum2),
    Priority: true,
    Description: "Idi radi"
};

db.collection(`tasks`)
.doc(`posao`)
.set(obj2)
.then(() => {
    console.log(`Uspesno dodat task`);
})
.catch((msg) => {
    console.log(`Desila se greska: ${err}`);
})

//Update
db.collection(`tasks`)
.doc(`skuvajrucak`)
.update({
    Priority: true
})
.then(() => {
    console.log(`uspesno promenjeno polje u dokumentu`);
})
.catch((err) => {
    console.log(`doslo je do greske: ${err}`);
});

//delete
db.collection(`customers`)
.doc(`nvukojevic`)
.delete()
.then(() => {
    console.log(`uspesno izbrisan dokument`);
})
.catch((err) => {
    console.log(`greska prilikom brisanja: ${err}`);
})


console.log(`Test poruka`);

