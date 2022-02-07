export class Chatroom {
    constructor(r, u) {
        this.room = r; 
        this.username = u; 
        this.chats = db.collection("chats"); 
        this.unsub = false; //definisanje da bi bili sigurni da je učitana stranica, signal da je stranica prvi put učitana - false vrednost
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
        this._username = u; //setujemo korisničko ime iz inputa
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

    deleteMess(id) {
        db.collection(`chats`)
            .doc(id)
            .delete()
            .then(() => {
             console.log(`Uspesno brisanje`);;
            })
            .catch((e) => {
                console.log(`Greska: ${e}`);
                
            });
    }

    //metod koji prati promene u bazi i vraća poruke
    getChats(callback) {
        this.unsub = this.chats
        .where("room", "==", this.room)
        .orderBy("created_at", "asc")
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                //ispisati dokumente koji su dodati u bazu
                if (change.type == "added") {
                    callback(change.doc); //prosleđivanje dokumenta na ispis(ispis realizujemo kada realizujemo callback)
                }
            });
        });
    }

    //metod kome se kao parametar prosleđuje novo korisničko ime, a on setuje username korisnika na prosleđenu vrednost ako zadovoljava kriterijume
    updateUsername(newU) {
        newU = newU.trim();
        if (newU.length >= 2 && newU.length <= 10) {
            this.username = newU;
            localStorage.setItem("newUsername", newU);
        }
        else {
            alert("Please enter a valid username!");
        }
    }
    
    //metod kome se kao parametar prosleđuje naziv sobe, a on setuje ime sobe
    updateRoom(newR) {
        this._room = newR;
        if (this.unsub != false) { //signal da unsub više nije false, nego je u getChats postalo funkcija
            this.unsub(); //unsub je sada f-ja i pozivamo je sa ()
        }
    }

    deleteMsg(id) {
        this.chats
        .doc(id)
        .delete()
        .then()
        .catch(er => {
            console.log(er);
        });
    }
}

// export default Chatroom;
