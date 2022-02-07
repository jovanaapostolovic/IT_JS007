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

    //vreme kreiranja poruke
    formatDate(date) {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();

        d = String(d).padStart(2,"0");
        m = String(m).padStart(2,"0");
        h = String(h).padStart(2,"0");
        min = String(min).padStart(2, "0");

        let strDate = `${d}.${m}.${y} - ${h}:${min}`;
        let today = new Date();

        if (date.getDate() == today.getDate()) {
            strDate = `${h}:${min}`;
        }
        
        return strDate;
        
    }

    //metod koji kreira li item i ispisuje ga na stranici
    templateLI(doc) {
        let id = doc.id;
        // console.log(id);
        let data = doc.data();
        //izvući podatke iz prosleđenog dokumenta i ispisati ih u formatu 
        //username: poruka
        //time_stamp: vreme slanja poruke
        let d = data.created_at.toDate();
        // console.log(d.getDate());
        // console.log(d.getFullYear());
        let htmlLI;
        if (data.username == localStorage.newUsername) {
            htmlLI = `
            <li id=${id} class="myMessage" style="border:1px solid purple; padding:10px; display:block; width:50%; position:">
                <span>${data.username}</span>
                <span>: ${data.message}</span>
                <div>${this.formatDate(d)}</div>
                <i class="glyphicon glyphicon-trash"></i>
            </li>`;
        }
        else {
            htmlLI = `
            <li id=${id} style="border:1px solid purple; padding:10px; display:block; width:50%; position:">
                <span>${data.username}</span>
                <span>: ${data.message}</span>
                <div>${this.formatDate(d)}</div>
                <i class="glyphicon glyphicon-trash"></i>
            </li>`;
        }
        this.message.innerHTML += htmlLI;

    };

    //brisanje poruke
    clear() {
        this.message.innerHTML = "";
    };

}

