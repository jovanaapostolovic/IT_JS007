export class ChatUI {
    constructor(m) {
        this.message = m;
    }
    
    //geter i seter
    set message(m) {
        this._message = m;
    }

    get message() {
        return this._message;
    }


}