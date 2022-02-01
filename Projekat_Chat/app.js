import {Chatroom} from "./chat.js";
import {ChatUI} from "./ui.js";

let c1 = new Chatroom("js", "mirko72");
let c2 = new Chatroom("general", "coka24");

//test getera
// console.log(c1.username, c1.room);

//test setera
// c1.username = "mirko73";
// console.log(c1.username);

// c1.room = "general";
// console.log(c1.room);

c1.addChat("Hello");
c2.addChat("HR trening!");

let c3 = new Chatroom("js", "sonja98");
// dodajemo poruku
c3.addChat("Pošaljite CV")
    .then( () => console.log("Uspešno dodat chat!"))
    .catch( err => console.log(err));

//ispis dokumenata iz db u konzoli
c2.getChats(d => {
    console.log(d);
});

let ulChatList = document.querySelector("ul");
let chatUI1 = new ChatUI(ulChatList);

//ispis dokumenata iz db na stranici
c2.getChats(d => {
    chatUI1.templateLI(d);
});