let o1 = {
    name: "Notting Hill",
    director: {name: "Roger" , surname: "Michell"},
    releaseYear: 1999,
    genres: ["romance", "comedy"],
    rating: 7.1
};

let o2 = {
    name: "Love Actually",
    director: {name: "Richard" , surname: "Curtis"},
    releaseYear: 2003,
    genres: ["comedy", "drama"],
    rating: 7.6
};

let o3 = {
    name: "The Little Mermaid",
    director: {name: "Ron" , surname: "Clements"},
    releaseYear: 1989,
    genres: ["music", "fantasy", "animation"],
    rating: 7.6
};

//Dodavanje filmova

//6.
db.collection(`movies`)
.doc(`f6`)
.set(o1)
.then(() => {
    console.log(`Dodat je novi film u kolekciju "movies"`);
})
.catch((err) => {
    console.log(`Doslo je do greske prilikom dodavanja filma: ${err}`);
});

//7.
db.collection(`movies`)
.doc(`f7`)
.set(o2)
.then(() => {
    console.log(`Dodat je novi film u kolekciju "movies"`);
})
.catch((err) => {
    console.log(`Doslo je do greske prilikom dodavanja filma: ${err}`);
});

//8.
db.collection(`movies`)
.doc(`f8`)
.set(o3)
.then(() => {
    console.log(`Dodat je novi film u kolekciju "movies"`);
    return db.collection(`movies`) //Menjanje podataka "rating" naknadno, posle dodavanja dokumenta f8
    .doc(`f8`)
    .update({
        rating: 8.1
    })
})
.then(() => {
    console.log(`Uspesno izvrsena promena`);
})
.catch((err) => {
    console.log(`Greska: ${err}`);
});

//Menjanje podataka

// db.collection(`movies`)
// .doc(`f8`)
// .update({
//     rating: 8.1
// })
// .then(() => {
//     console.log(`Uspesno izvrsena promena`);
// })
// .catch((err) => {
//     console.log(`Neuspesna promena: ${err}`);
// });

db.collection(`movies`)
.doc(`f1`)
.update({
    releaseYear: 2021
})
.then(() => {
    console.log(`Uspesno izvrsena promena`);
})
.catch((err) => {
    console.log(`Neuspesna promena: ${err}`);
});

//Dodavanje žanra

let movie2 = db.doc(`movies/f2`);
movie2.update({
    genres: firebase.firestore.FieldValue.arrayUnion("dark comedy")
});

//Brisanje žanra

movie2.update({
    genres: firebase.firestore.FieldValue.arrayRemove("crime film")
});

//Menjanje imena i prezimena režiseru

let movie8 = db.doc(`movies/f8`);
movie8.update({
    "director.name": "John",
    "director.surname": "Musker"
});


