let knjiga1 = {
    nazivKnjige: "Mali Princ",
    autorKnjige: "Antoan de Sent Egziperi",
    sličica: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_600/251953_600_600px.jpg",
    polje: true
};

let knjiga2 = {
    nazivKnjige: "Hiljadu čudesnih sunaca",
    autorKnjige: "Haled Hoseini",
    sličica: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_600/125960_600_600px.jpg",
    polje: true
};

let knjiga3 = {
    nazivKnjige: "Čovek po imenu Uve",
    autorKnjige: "Fredrik Bakman",
    sličica: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_600/305240_600_600px.jpg",
    polje: false
};

let knjiga4 = {
    nazivKnjige: "Oproštajni valcer",
    autorKnjige: "Milan Kundera",
    sličica: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_600/271123_600_600px.jpg",
    polje: true
};

let knjiga5 = {
    nazivKnjige:"Fama o biciklistima",
    autorKnjige: "Svetislav Basara",
    sličica: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_600/251974_600_600px.jpg",
    polje: false
};

let niz = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5];

function makeTable(array) {
    let table = document.createElement('table');
    for (let i = 0; i < array.length; i++) {
        let row = document.createElement('tr');
        if (i % 2 == 0) {
            row.style.backgroundColor = `yellow`;
        }
        else {
            row.style.backgroundColor = `beige`;
        }
        for (let j = 0; j < 2; j++) {
            let cell = document.createElement('td');
            let img = document.createElement(`img`);
            let par = document.createElement(`p`);
            if (j == 0) {
                img.src = `${array[i].sličica}`;
                cell.appendChild(img);
            }
            else {
                par.textContent = `${array[i].nazivKnjige} ${array[i].autorKnjige}`;
                if (array[i].polje == true) {
                    par.style.color = `blue`;
                }
                else {
                    par.style.color = `grey`;
                }
                cell.appendChild(par);
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
    return table;
};

makeTable(niz);