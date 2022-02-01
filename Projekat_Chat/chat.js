export class Chatroom {
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
        if (u.length > 2 && u.length < 10 && u.trim()) {
            this._username = u;
        }
        else {
            alert("Username must contain between 2 and 10 characters!")
        }
        
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
    getChats(callback) {
        this.chats
        .where("room", "==", this.room)
        .orderBy("created_at", "asc")
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                //kada se desila promena u bazi ispisati "promena u bazi"
                // console.log(change.type);
                // if (change.type == "added") {
                //     console.log("Promena u bazi!");
                // }

                //ispisati dokumente koji su dodati u bazu
                if (change.type == "added") {
                    callback(change.doc.data()); //prosleđivanje dokumenta na ispis(ispis realizujemo kada realizujemo callback)
                    // console.log(change.doc.data()); 
                }
            });
        });
    }

    //metod kome se kao parametar prosleđuje novo korisničko ime, a on setuje username korisnika na prosleđenu vrednost
    updateUsername(newU) {
        this._username = newU;
    }

    //metod ome se kao parametar prosleđuje naziv sobe, a on setuje ime sobe
    updateRoom(newR) {
        this._room = newR;
    }


}

// export default Chatroom;
