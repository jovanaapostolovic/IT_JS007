let chats = db.collection(`chats`);

db.collection(`chats`)
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