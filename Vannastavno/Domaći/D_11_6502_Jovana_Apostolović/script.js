let knjiga1 = {
    nazivKnjige: "Mali Princ",
    autorKnjige: "Antoan de Sent Egziperi",
    sličica: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_600/251953_600_600px.jpg",
    polje: true,
    dodajSliku:function () {
        let img = document.createElement('img'); 
        img.src = this.sličica; 
	    return img;
    },
    dodajParagraf:function () {
        let p = document.createElement(`p`);
        p.setAttribute("id", "paragraf");
        document.getElementById(`paragraf`).innerHTML += `${this.nazivKnjige} ${this.autorKnjige}`;
        return p;
    }
};

let knjiga2 = {
    nazivKnjige: "Hiljadu čudesnih sunaca",
    autorKnjige: "Haled Hoseini",
    sličica: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_600/125960_600_600px.jpg",
    polje: true,
    dodajSliku:function () {
        let img = document.createElement('img'); 
        img.src = this.sličica; 
	    return img;
    },
    dodajParagraf:function () {
        let p = document.createElement(`p`);
        p.setAttribute("id", "paragraf");
        document.getElementById(`paragraf`).innerHTML += `${this.nazivKnjige} ${this.autorKnjige}`;
        return p;
    }
};

let knjiga3 = {
    nazivKnjige: "Čovek po imenu Uve",
    autorKnjige: "Fredrik Bakman",
    sličica: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_600/305240_600_600px.jpg",
    polje: false,
    dodajSliku:function () {
        let img = document.createElement('img'); 
        img.src = this.sličica; 
	    return img;
    },
    dodajParagraf:function () {
        let p = document.createElement(`p`);
        p.setAttribute("id", "paragraf");
        document.getElementById(`paragraf`).innerHTML += `${this.nazivKnjige} ${this.autorKnjige}`;
        return p;
    }
};

let knjiga4 = {
    nazivKnjige: "Oproštajni valcer",
    autorKnjige: "Milan Kundera",
    sličica: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_600/271123_600_600px.jpg",
    polje: true,
    dodajSliku:function () {
        let img = document.createElement('img'); 
        img.src = this.sličica; 
	    return img;
    },
    dodajParagraf:function () {
        let p = document.createElement(`p`);
        p.setAttribute("id", "paragraf");
        document.getElementById(`paragraf`).innerHTML += `${this.nazivKnjige} ${this.autorKnjige}`;
        return p;
    }
};

let knjiga5 = {
    nazivKnjige:"Fama o biciklistima",
    autorKnjige: "Svetislav Basara",
    sličica: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_600/251974_600_600px.jpg",
    polje: false,
    dodajSliku:function () {
        let img = document.createElement('img'); 
        img.src = this.sličica; 
	    return img;
    },
    dodajParagraf:function () {
        let p = document.createElement(`p`);
        p.setAttribute("id", "paragraf");
        document.getElementById(`paragraf`).innerHTML += `${this.nazivKnjige} ${this.autorKnjige}`;
        return p;
    }
};

let niz = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5];

// let kreiranjeTabele = niz => {

// let tabela = document.createElement("table");
// for (let i = 0; i < niz.length; i++) {
//     let slika = `<img src:${niz[i].sličica}>`;
//     let podaci = `<p>${niz[i].nazivKnjige} ${niz[i].autorKnjige}</p>`;

//     let red = document.createElement("tr");

//     let slikaPolje = document.createElement("td");
//     let podaciPolje = document.createElement("td");

//     slikaPolje.appendChild(document.createTextNode(slika));
//     podaciPolje.appendChild(document.createTextNode(podaci));

//     red.appendChild(slikaPolje);
//     red.appendChild(podaciPolje);

//     tabela.appendChild(red);

// };
// document.body.innerHTML += String(tabela);

// document.body.innerHTML += tabela;
// return tabela;
// }
// console.log(kreiranjeTabele(niz));

let tabelaKnjiga = niz => {
    
    let tabela = document.createElement("table");
    tabela.setAttribute("id", "MyTable");
    document.body.appendChild(tabela);

    for (let i = 0; i < niz.length; i++) {
    let red = document.createElement("tr");
    red.setAttribute("id", "MyTr");
    document.getElementById("MyTable").appendChild(red);

    let polje1 = document.createElement("td");
    let sadržaj1 = document.createTextNode(niz[i].dodajSliku());
    polje1.appendChild(sadržaj1);
    document.getElementById("MyTr").appendChild(polje1);

    let polje2 = document.createElement("td");
    let sadržaj2 = document.createTextNode(niz[i].dodajParagraf());
    polje2.appendChild(sadržaj2);
    document.getElementById("MyTr").appendChild(polje2);
        
        
    };
    return tabela;
};

document.body.innerHTML += tabelaKnjiga(niz);

// let tabelaKnjiga = nizKnjiga => {
// let tabela = document.createElement(`table`);
// document.body.appendChild(tabela);
// for (let i = 0; i < nizKnjiga.length; i++) {
//     let red = document.createElement(`tr`);
//     document.table.appendChild(red);
//     let podatak = document.createElement(`td`);
    
// }

// };

// let funkcija = niz => {
//     let x = document.createElement("table");
//     x.setAttribute("id", "myTable");
//     document.body.appendChild(x);
//     let y = "";
//     let z = "";
//     let t = "";
//     for (let i = 0; i < niz.length; i++) {
//         y = document.createElement("tr");
//         y.setAttribute("id", "myTr");
//         document.getElementById("myTable").appendChild(y);
        
//         z = document.createElement("td");
//         t = document.createElement("img");
//         t.setAttribute("src", `${niz[i].sličica}`);
//         z.appendChild(t);
//         document.getElementById("myTr").appendChild(z);
//     }
    
  
    
//   };

//   document.body.innerHTML += funkcija(niz);

// let table = document.createElement("table");
// function generateTable(table, niz) {
//     let text = "";
//     for (let i = 0; i < niz.length; i++) {
//         let row = table.insertRow();
//         for (let j = 0; j < 2; j++) {
//             let cell = row.insertCell();
//             if (j == 0) {
//                 text = document.createTextNode(niz[i].nazivKnjige);
//             }
//             else {
//                 text = document.createTextNode(niz[i].autorKnjige);
//             }
//             cell.appendChild(text);
//         }
//     }
// };

// document.body.innerHTML += generateTable(table, niz);

// function add_img() { 
// 	let img = document.createElement('img'); 
//     img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
// 	document.getElementById('body').appendChild(img);
// }