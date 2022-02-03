import {Chatroom} from "./chat.js";
import {ChatUI} from "./ui.js";

//DOM
let ulChatList = document.querySelector("ul");
let formMess = document.getElementById("formMessage");
let formUser = document.getElementById("formUsername");
let btnSend = document.getElementById("btnSend");
let btnUsername = document.getElementById("btnUpdate");
let inputMessage = document.getElementById("inputMessage");
let inputUsername = document.getElementById("inputUsername");

//objekti klasa / instance klasa
let chatroom = new Chatroom("general", "jovana");
let chatUI = new ChatUI(ulChatList);

//ispis dokumenata iz db u konzoli
chatroom.getChats(d => {
    console.log(d);
});

//dodajemo poruku
// chatroom.addChat("Pošaljite CV")
//     .then( () => console.log("Uspešno dodat chat!"))
//     .catch( err => console.log(err)
// );

//ispis dokumenata iz db na stranici
chatroom.getChats(d => {
    chatUI.templateLI(d);
});

btnSend.addEventListener("click", e => {
    e.preventDefault();
    let msg = inputMessage.value;
    c1.addChat(msg)
    .then(() => {
        formMess.reset();
        // inputMessage.value = "";
    })
    .catch(err => {
        console.log(err);
    })

});

btnUsername.addEventListener("click", e => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    c1.updateUsername(newUsername)
    formUser.reset();

});

// btnSend.addEventListener("click", e => {
//     e.preventDefault();
//     let msg = inputMessage.value;
//     if (msg.trim()) {
//         c1.addChat(msg)
//         .then(() => {
//             btnSend.reset();
            
//         })
//         .catch(err => {
//             console.log(err);
//         })
        
//     }
//     inputMessage.value = "";

// });