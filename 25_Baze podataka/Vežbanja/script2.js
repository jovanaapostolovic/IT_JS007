// 1) pristupanje konkretnom dokumentu u kolekciji
// 2) pristupanje svim ili određenim dokumentim iz kolekcije

// 1) 
db.collection(`customers`) 
.doc(`japostolovic`)
.get()
.then((doc) => {
    if (doc.exists) {
        console.log(`Postoji dokument ${doc.id}`);
        let obj = doc.data();
        console.log(obj);
    }
    else {
        console.log(`Ne postoji dokument čiji je ID: ${doc.id}`);
    }
    // polja: doc.id (string), doc.exists (boolean)
    // metoda: doc.data()
})
.catch(err => {
    console.log(`nemoguće dohvatiti dokument: ${err}`);
});


// 2)
db.collection(`customers`)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            console.log(doc.id, doc.data());
        });
    }
    else {
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err => {
    console.log(`Nemoguće dohvatiti dokumente iz kolekcije: ${err}`);
});


// 1) dohvatanje dokumenata u određenom redosledu
// 2) dohvatanje određenog br. dokumenata iz kolekcije
// 3) dohvatanje dokumenata koji zadovoljavaju određene kriterijume


// 1)
db.collection(`customers`)
.orderBy("Age", "desc") //asc ili desc - uzlazno i silazno
.orderBy("Name")
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
        });
    }
    else {
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err => {
    console.log(`Nemoguće dohvatiti dokumente iz kolekcije: ${err}`);
});


//2)
db.collection(`customers`)
.orderBy("Name")
.orderBy("Age", "desc") //asc ili desc - uzlazno i silazno
.orderBy("Salary", "desc")
.limit(1)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
        });
    }
    else {
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err => {
    console.log(`Nemoguće dohvatiti dokumente iz kolekcije: ${err}`);
});


//3)
db.collection(`customers`)
.where("Age", "<=", 26)
// .where("Salary", "==", 45000.5) // opet je potrebno kreirati index (kompozitna polja)
// .orderBy("Age", "desc") //asc ili desc - uzlazno i silazno
// .orderBy("Name")
// // .orderBy("Salary", "desc")
// .limit(1)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
        });
    }
    else {
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err => {
    console.log(`Nemoguće dohvatiti dokumente iz kolekcije: ${err}`);
});

//Zadatak 1.
db.collection(`customers`)
.orderBy("Name")
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
        });
    }
    else {
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err => {
    console.log(`Nemoguće dohvatiti dokumente iz kolekcije: ${err}`);
});


//Zadatak 2.
//1)
db.collection(`customers`)
.where("Addresses", "array-contains", "Nis")
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
        });
    }
    else {
        console.log(`Nema korisnika sa zadatim uslovom`);
    }
})
.catch(err => {
    console.log(`Greška u upitu: ${err}`);
});

//2)
db.collection(`customers`)
.where("Salary", ">=", 50000)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
        });
    }
    else {
        console.log(`Nema korisnika sa zadatim upitom`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});

//3)
db.collection(`customers`)
.where("Salary", ">=", 47000)
.where("Salary", "<=", 60000)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
        });
    }
    else {
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err => {
    console.log(`Nemoguće dohvatiti dokumente iz kolekcije: ${err}`);
});

//4)
db.collection(`customers`)
.where("Salary", "<", 50000)
.where("Age", "==", 27)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
        });
    }
    else {
        console.log(`Nema takvih korisnika`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});

//5)
db.collection(`customers`)
.where("Addresses", "array-contains-any", ["Nis", "Beograd"])
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
        });
    }
    else {
        console.log(`Nema korisnika sa zadatim kriterijumima`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});

//6)
db.collection(`customers`)
.where("Age", "in", [22, 26, 30])
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
        });
    }
    else {
        console.log(`Nema takvih korisnika`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});


//Zadatak 3.
db.collection(`tasks`)
.orderBy("Title")
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Title + " " + obj.Description);
        });
    }
    else {
        console.log(`Nema ovakvih zadataka`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});

//Zadatak 4.
//1)
db.collection(`tasks`)
.where("Priority", "==", true)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Title + " " + obj.Description);
        });
    }
    else {
        console.log(`Nema ovakvih zadataka`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});

//2)
// let datumP = new Date("2022-01-01 00:00:00");
// let datumK = new Date("2022-12-31 24:00:00");
let now = new Date();
let year = now.getFullYear();
let date1 = new Date(year, 0, 1); // 1. januar tekuće godine
let date2 = new Date(year + 1, 0, 1); // 1. januar naredne godine

let date1TimeStamp = firebase.firestore.Timestamp.fromDate(date1);
let date2TimeStamp = firebase.firestore.Timestamp.fromDate(date2);

db.collection(`tasks`)
.where("DueDate", ">=", date1TimeStamp)
.where("DueDate", "<", date2TimeStamp)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Title + " " + obj.Description);
        });
    }
    else {
        console.log(`Nema ovakvih zadataka`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});

//3)
let dateNTimeStamp = firebase.firestore.Timestamp.fromDate(now);

db.collection(`tasks`)
.where("DueDate", "<=", dateNTimeStamp)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Title + " " + obj.Description);
        });
    }
    else {
        console.log(`Nema ovakvih zadataka`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});

//4)


db.collection(`tasks`)
.where("StartDate", ">", dateNTimeStamp)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.Title + " " + obj.Description);
        });
    }
    else {
        console.log(`Nema ovakvih zadataka`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});

//Zadatak 5
// a)
db.collection(`movies`)
.where("director.name", "==", `John`)
.where("director.surname", "==", `Musker`)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name);
        });
    }
    else {
        console.log(`Nema ovakvih zadataka`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});

//b)
db.collection(`movies`)
.where("rating", ">=", 8)
.where("rating", "<=", 10)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name);
        });
    }
    else {
        console.log(`Nema ovakvih zadataka`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});

//c)
db.collection(`movies`)
.where("genres", "array-contains-any", ["music", "fantasy", "drama"])
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name);
        });
    }
    else {
        console.log(`Nema ovakvih zadataka`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});

//d)
db.collection(`movies`)
.where("releaseYear", ">=", 2001)
.where("releaseYear", "<", 2101)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name);
        });
    }
    else {
        console.log(`Nema ovakvih zadataka`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});

//Zadatak 6.
db.collection(`movies`)
.orderBy("rating", "desc")
.limit(1)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj);
        });
    }
    else {
        console.log(`Nema ovakvih zadataka`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});

//Zadatak 7.
db.collection(`movies`)
.where("genres", "array-contains", "drama")
.orderBy("rating", "asc")
.limit(1)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj);
        });
    }
    else {
        console.log(`Nema ovakvih zadataka`);
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
});