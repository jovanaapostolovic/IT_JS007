import {Chatroom} from "./chat.js";
import {ChatUI} from "./ui.js";

//DOM
let ulChatList = document.querySelector("ul");
let liElem = document.querySelectorAll("li");
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
let colorPicker = document.getElementById("changeColor");
let btnColor = document.getElementById("btnColor");
let inputStartTime = document.getElementById("startTime");
let inputEndTime = document.getElementById("endTime");
let btnTimeInterval = document.getElementById("btnTimeInterval");

//objekti klasa / instance klasa
let username = "anonymous";
if (localStorage.newUsername) {
    username = localStorage.newUsername;
};

ulChatList.style.color = "#000000";
if (localStorage.changedColor) {
    ulChatList.style.color = localStorage.changedColor;
};

let room = "btnGeneral";
let thisRoom;
if (localStorage.activeRoom) {
    room = localStorage.activeRoom;
    thisRoom = document.getElementById(room);
    thisRoom.style.backgroundColor = "rgb(122, 122, 211)";
}

let chatroom = new Chatroom(room, username);
let chatUI = new ChatUI(ulChatList);

//ispis dokumenata iz db na stranici
chatroom.getChats(d => {
    chatUI.templateLI(d);
});

//ispis poruka
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

//promena username-a
btnUsername.addEventListener("click", e => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    // localStorage.setItem("newUsername", newUsername);
    chatroom.updateUsername(newUsername);
    //resetovanje forme
    formUser.reset();
    //kreiranje obaveštenja o promeni korisnika
    let userNotification = document.createElement("p");
    userNotification.innerHTML = `You are logged in as <b> ${newUsername} </b>`;
    userNotification.style.color = "red";
    let footer = document.querySelector("footer");
    footer.appendChild(userNotification);
    if (userNotification) {
        setTimeout(() => {
            footer.innerHTML = "";
        }, 3000);
    };
    //ponovno učitavanje stranice
    setTimeout(() => {
        location.reload();
    }, 3001);
   
});

//odabir sobe
topbar.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
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
        //pamćenje odabrane sobe
        localStorage.activeRoom = e.target.id;
    }
    
});

//brisanje poruka
ulChatList.addEventListener("click", e => {
    if (e.target.tagName === "I") {
        // console.log(e.target.parentNode);
        let id = e.target.parentElement.id;
        if (localStorage.newUsername === e.target.parentNode.childNodes[1].innerHTML) {
            if (confirm("Are you sure you want to delete this message?") == true) {
                e.target.parentElement.remove();
                chatroom.deleteMsg(id);
                //chatroom.chats.doc(e.target.parentElement.id).delete();
            }
            
        }
        else {
            e.target.parentElement.remove();
        }
    }
});

//colprpicker
btnColor.addEventListener("click", e => {
    e.preventDefault();
    let colorPickerValue = colorPicker.value;
    localStorage.setItem("changedColor", colorPickerValue);
    setTimeout(() => {
        ulChatList.style.color = colorPickerValue;
    }, 500);
    
});

//vremenski interval
btnTimeInterval.addEventListener("click", e => {
    e.preventDefault();
    chatUI.clear();
    let start = inputStartTime.value;
    start = new Date(start);
    start = firebase.firestore.Timestamp.fromDate(start);
    let end = inputEndTime.value;
    end = new Date(end);
    end = firebase.firestore.Timestamp.fromDate(end);
    db.collection(`chats`)
    .where("created_at", ">", start)
    .where("created_at", "<", end)
    .where("room", "==", localStorage.activeRoom)
    .orderBy("created_at")
    .get()
    .then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc;
            chatUI.templateLI(obj);
        });
    }
    })
    .catch(err => {
        console.log(err);
    });
    
});



