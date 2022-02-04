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
let topbar = document.getElementById("topbar");
let btnGeneral = document.getElementById("btnGeneral");
let btnJs = document.getElementById("btnJs");
let btnHomework = document.getElementById("btnHomework");
let btnTests = document.getElementById("btnTests");

//objekti klasa / instance klasa
let username = "anonymous";
if (localStorage.username) {
    username = localStorage.username;
}
let chatroom = new Chatroom("js", username);
let chatUI = new ChatUI(ulChatList);

//ispis dokumenata iz db na stranici
chatroom.getChats(d => {
    chatUI.templateLI(d);
});

btnSend.addEventListener("click", e => {
    e.preventDefault();
    let msg = inputMessage.value;
    if (msg.trim()) {
        chatroom.addChat(msg)
        .then(() => {
            formMess.reset();
            // inputMessage.value = "";
        })
        .catch(err => {
            console.log(err);
        })
    }
    else {
        alert("Invalid message entry!");
        formMess.reset();
    }
    
});

btnUsername.addEventListener("click", e => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    localStorage.setItem("newUsername", newUsername);
    chatroom.updateUsername(newUsername);
    formUser.reset();
    let userNotification = document.createElement("p");
    userNotification.innerHTML = `You are logged in as <b> ${newUsername} </b>`;
    let footer = document.querySelector("footer");
    footer.appendChild(userNotification);
    if (userNotification) {
        setTimeout(() => {
            footer.innerHTML = "";
        }, 3000);
    };
   
});

topbar.addEventListener("click", e => {
    if (e.target.tagName == "BUTTON") {
        //izbrisati sve poruke sa ekrana
        chatUI.clear();
        //menjanje sobe
        chatroom.updateRoom(e.target.id);
        //prikaz poruka
        chatroom.getChats(d => {
            chatUI.templateLI(d);
        });
        //odznačavanje svih soba
        let noRooms = document.querySelectorAll(".btn");
        noRooms.forEach(el => {
            el.style.backgroundColor = "purple";
        });
        //označavanje trenutne sobe
        let roomBtn = document.getElementById(e.target.id);
        roomBtn.style.backgroundColor = "rgb(122, 122, 211)";
    }
    
});

