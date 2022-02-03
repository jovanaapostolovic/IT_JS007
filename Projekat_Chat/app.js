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

//postavljanje vrednosti u local storage
localStorage.setItem("nazivPromenljive", 5);
localStorage.setItem("nazivPromenljive", 6);
localStorage.setItem("nazivPromenljive", "testString");
localStorage.setItem("x", 7);
localStorage.setItem("y", 10);

//uzimanje vrednosti iz local storage
let z = localStorage.x + localStorage.y;
console.log(z);
console.log(localStorage.x);
if (localStorage.x) {
    console.log("x postoji");
}
else {
    console.log("x ne postoji");
}

//ispis dokumenata iz db u konzoli
// chatroom.getChats(d => {
//     console.log(d);
// });

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
    chatroom.addChat(msg)
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
    chatroom.updateUsername(newUsername)
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