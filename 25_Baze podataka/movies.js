let o1 = {
    name: "Fight Club",
    director: "David Fincher",
    releaseYear: 1999,
    genres: ["action", "drama"],
    rating: 8.8
};

let o2 = {
    name: "Fight Club",
    director: "David Fincher",
    releaseYear: 1999,
    genres: ["action", "drama"],
    rating: 8.8
};

let movies = db.collection(`movies`);

db.collection(`movies`)
.doc(`f2`)
.set(o1)
.then(() => {
    console.log(`Dodat je novi film u kolekciju "movies"`);
})
.catch((err) => {
    console.log(`Doslo je do greske prilikom dodavanja filma: ${err}`);
});

db.collection(`movies`)
.doc(`f3`)
.set(o2)
.then(() => {
    console.log(`Dodat je novi film u kolekciju "movies"`);
})
.catch((err) => {
    console.log(`Doslo je do greske prilikom dodavanja filma: ${err}`);
});

db.collection(`movies`)
.doc(`f3`)
.update({
    name: "Belfast",
    director: "Kenneth Branagh"
})
.then(() => {
    console.log(`Uspesno izvrsena promena`);
})
.catch((err) => {
    console.log(`neuspesna promena: ${err}`);
});

let movie = db.doc(`movies/f2`);
movie.update({
    genres: firebase.firestore.FieldValue.arrayUnion("comedy")
});

movie.update({
    genres: firebase.firestore.FieldValue.arrayRemove("comedy")
});
