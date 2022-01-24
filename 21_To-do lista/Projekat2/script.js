let n = document.querySelectorAll("li");
let n1 = Array.from(n);
for (let i = 0; i < n1.length; i++) {
    n1[i].addEventListener("click", () => {
        if (n1[i].style.textDecoration == "line-through") {
        n1[i].style.textDecoration = "none";
        }
        else {
         n1[i].style.textDecoration = "line-through";
        }
    });
    
}

let ulTasks = document.querySelector("ul");
let inputTask = document.getElementById("task");
// let submitTask = document.getElementById("submit");
// let liTasks = document.querySelectorAll("li");

inputTask.addEventListener("keyup", (e) => {
    e.preventDefault();
    // console.log(e.key, e.keyCode);
    //ključ za enter je 13
    
    if (e.key == "Enter") {
        let inputTaskValue= inputTask.value; //uzimam vrednost iz input polja
        
        inputTaskValue = inputTaskValue.trim();

        if (inputTaskValue == "" || inputTaskValue == null) {
            alert("Morate uneti tekst zadatka!")
        }
        else{
            let liNewTask = document.createElement("li"); //kreiram novi li
            liNewTask.textContent += inputTaskValue; //upisujem tekst u novi li

            let radioAdd = document.querySelector("input[name=add]:checked");
            // console.log(radioAdd.id, radioAdd.value);
            if (radioAdd.value == "beggin") {
                //dodavanje na početak
                ulTasks.prepend(liNewTask); //dodajemo li čvor na početak ul
            }
            else {
                //dodavanje na kraj
                ulTasks.appendChild(liNewTask); //dodajemo li čvor na kraj ul
            }

        
            inputTask.value = ""; //isprazni input polje nakon dodavanja    elementa u ul
        }

    
    }

    // let radioPočetak = document.createElement("input");
    // radioPočetak.type = "radio";
    // let radioIzborP = document.createElement("label");
    // radioIzborP.textContent = "Dodaj na početak";

    // let radioKraj = document.createElement("input");
    // radioKraj.type = "radio";
    // let radioIzborK = document.createElement("label");
    // radioIzborK.textContent = "Dodaj na kraj";

    // document.body.appendChild(radioPočetak);
    // document.body.appendChild(radioIzborP);
    // document.body.appendChild(radioKraj);
    // document.body.appendChild(radioIzborK);
    
});

// liTasks.forEach(li => {
//     li.addEventListener("click", () => {
//         li.remove();
//     });
// });

ulTasks.addEventListener("click", e => {
    //console.log("kliknuto na ul");
    //console.log(e.target); //vraća ceo tag i negovu decu
    //console.log(e.target.tagName); //vraća samo ime taga na koji je kliknuto
    if (e.target.tagName == "LI") {
        //console.log("kliknuto na li");
        e.target.remove();
    }
});


//trim
let tekst = "    Neki     tekst   ";
console.log(tekst);
console.log(tekst.trim()); //.trim() funkcija sklanja praznine sa početka i kraja stringa

tekst = "      ";
console.log(tekst);
console.log(tekst.trim());