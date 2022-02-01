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

    //metod koji kreira li item i ispisuje ga na stranici
    templateLI(data) {
        //izvući podatke iz prosleđenog dokumenta i ispisati ih u formatu 
        //username:
        //time_stamp:

        let htmlLI = `<li>${data.username}: ${data.message} <br> ${data.created_at}</li>`;
        this.message.innerHTML += htmlLI;

    }

}