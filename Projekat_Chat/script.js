import Chatroom from "./chat.js";

// let chats = db.collection(`chats`);

// db.collection(`chats`)
// .get()
// .then(snapshot => {
//     if (!snapshot.empty) {
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc => {
//             console.log(doc.id, doc.data());
//         });
//     }
//     else {
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err => {
//     console.log(`Nemoguće dohvatiti dokumente iz kolekcije: ${err}`);
// });

let c1 = new Chatroom("js", "mirko72");
let c2 = new Chatroom("general", "coka24");


//test getera
console.log(c1.username, c1.room);

//test setera
c1.username = "mirko73";
console.log(c1.username);

c1.room = "general";
console.log(c1.room);

c1.addChat("Hello");
c2.addChat("HR trening!");

let c3 = new Chatroom("js", "sonja98");
//dodajemo poruku
// c3.addChat("Pošaljite CV")
//     .then( () => console.log("Uspešno dodat chat!"))
//     .catch( err => console.log(err));

c2.getChats(d => {
    console.log(d);
});