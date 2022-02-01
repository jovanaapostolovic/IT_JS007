class Chatroom {
    constructor(r, u) {
        this.room = r; 
        this.username = u; 
        this.chats = db.collection("chats"); 
    }
    //room
    set room(r) {
        this._room = r;
    }

    get room() {
        return this._room;
    }
    
    //username
    set username(u) {
        this._username = u;
    }

    get username() {
        return this._username;
    }
    
    //dodavanje poruke
    async addChat(mess) {
        //dohvatanje trenutnog vremena koje nam je potrebno za timestamp (created_at)
        let date = new Date();
        //kreiranje dokumenta/objekta koji prosleđujem bazi podataka
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };

        //da sačuvam dokument u db
        let response = await this.chats.add(docChat);
        return response; //vraćam promis i mogu za njega da kažem .then i .catch
        
    }

    //metod koji prati promene u bazi i vraća poruke
    getChats(callback){
        this.chats.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                //kada se desila promena u bazi ispisati "promena u bazi"
                // console.log(change.type);
                // if (change.type == "added") {
                //     console.log("Promena u bazi!");
                // }

                //ispisati dokumente koji su dodati u bazu
                if (change.type == "added") {
                    // console.log(change.doc.data());
                    callback(change.doc.data()); //prosleđivanje dokumenta na ispis(ispis realizujemo kada realizujemo callback)
                }
            });
        });
    }
}

export default Chatroom;