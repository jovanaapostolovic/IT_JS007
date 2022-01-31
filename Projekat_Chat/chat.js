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
    
}

export default Chatroom;