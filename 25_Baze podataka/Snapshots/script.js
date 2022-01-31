let ul = document.querySelector("ul");
let form = document.querySelector("form");

/*
db.collection(`tasks`)
.orderBy("StartDate", `desc`)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            let obj = doc.data();
            let li = document.createElement(`li`);
            li.innerHTML = `${obj.Title} (${obj.StartDate.toDate()}) [${obj.Description}]`;
            ul.appendChild(li);
            if(obj.Priority === true) {
                li.style.color = "red";
            }
        });
    }
})
.catch(err => {
    console.log(`Greška: ${err}`);
}); 
*/

form.addEventListener(`submit`, function(event) {
    event.preventDefault();
    let title = this.title.value;
    let start_date = this.start_date.value;
    let due_date = this.due_date.value;
    let priority = this.priority.checked;
    let description = this.description.value;
    // console.log(`${title} ${start_date} ${due_date} ${priority} ${description} `);

    let start_date_obj = new Date (start_date);
    let due_date_obj = new Date (due_date);
    let start_date_ts = firebase.firestore.Timestamp.fromDate(start_date_obj);
    let due_date_ts = firebase.firestore.Timestamp.fromDate(due_date_obj);

    let obj = {
        Title: title,
        StartDate: start_date_ts,
        DueDate: due_date_ts,
        Priority: priority,
        Description: description
    };
    db.collection(`tasks`)
    .add(obj)
    .then(() => {
        console.log("Uspešno dodat novi zadatak!");
    })
    .catch(err => {
        console.log(`Greška prilikom dodavanja zadatka: ${err}`);
    });
});

db.collection(`tasks`)
.onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    // console.log(changes);
    changes.forEach(change => {
        let type = change.type;
        let doc = change.doc;
        let id = doc.id;
        if (type == "added") {
            let obj = doc.data();
            let li = document.createElement(`li`);
            li.id = id;
            li.innerHTML = `${obj.Title} (${obj.StartDate.toDate()}) [${obj.Description}]`;
            ul.appendChild(li);
            if(obj.Priority === true) {
                li.style.color = "red";
            }
            let button = document.createElement(`button`);
            button.innerHTML = "Delete Task!";
            li.appendChild(button);
            
        }
        else if (type == "removed") {
            let li = document.getElementById(id);
            li.remove();
        }
    });
});

ul.addEventListener(`click`, function (event) {
    // console.log(event.target.tagName);
    if (event.target.tagName === "BUTTON") {
        let li = event.target.parentElement;
        let id = li.id;
        db.collection(`tasks`)
        .doc(id)
        .delete()
        .then(() => {
            alert("Uspešno izbrisan zadatak!")
        })
        .catch(err => {
            alert(`Greška prilikom brisanja zadatka: ${err}`);
        }) 
    }
});