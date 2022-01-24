let divOrder = document.querySelector("#order");
let formOrder = document.querySelector("#order form");
let inputOrder = document.querySelector("#capacity");

let formPronađi = document.querySelector("#pronađi");
let inputDeoNaziva = document.querySelector("#deoNaziva");
let inputUnos1 = document.querySelector("#unos1");
let inputUnos2 = document.querySelector("#unos2");

let divFilter = document.querySelector("#filter");
let formFilter = document.querySelector("#filter form");
let inputNaziv = document.querySelector("#naziv");
let inputCenaMin = document.querySelector("#cenaMin");
let inputCenaMax = document.querySelector("#cenaMax");


function getItem(resource, resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener(`readystatechange`, function () {
        if (this.readyState === 4 && this.status === 200) {
            //sve ok
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if (this.readyState === 4) {
            //desila se greška
            reject("Could not fetch data!");
        }
    });
    request.open(`GET`, resource);
    request.send();
}

function submitForm1(event) {
    event.preventDefault();
    let capacity = inputOrder.value;
    let ids = [];
    getItem("Json/stock.json", (data) => {
        data.forEach(item => {
            if (item.stock <= 0) {
                ids.push(item.id);
            }
        });
        getItem("Json/weights.json", (data) => {
            let totalWeight = 0;
            data.forEach(item => {
                if (ids.includes(item.id)) {
                    totalWeight += item.weight;
                }
            });
            console.log(`Ukupna težina proizvoda koji treba da se naruče je ${totalWeight}kg`);
            if (totalWeight > capacity) {
                let par = document.createElement(`p`);
                par.innerHTML = `Ukupna težina proizvoda je veća od kapaciteta kamiona!`;
                par.style.color = `red`;
                par.style.fontSize = `24px`;
                par.style.fontWeight = `bold`;
                divOrder.appendChild(par);
            }
            else {
                getItem("Json/prices.json", (data) => {
                    let totalPrice = 0;
                    data.forEach(item => {
                        if (ids.includes(item.id)) {
                            totalPrice += item.price;
                        }
                    });
                    let par = document.createElement(`p`);
                    par.innerHTML = `Ukupna cena porudžbine je ${totalPrice}rsd`;
                    par.style.color = `green`;
                    par.style.fontSize = `24px`;
                    par.style.fontWeight = `bold`;
                    divOrder.appendChild(par);
                }, (msg) => {console.log(msg);});
            }
        }, (msg) => {console.log(msg);});
    }, (msg) => {console.log(msg);}); 
}

/*
1. ideja: getItems() da se pozove jedan za drugim
getItems("Json/stock.json");
getItems("Json/weights.json");
getItems("Json/prices.json");
NETAČNA ideja jer je svaki getItem asinhron poziv
znači da ne mora tim redosledom i da se dohvata svaki json file

2. ideja: redosled asinhronih poziva preko ballback f-ja
TAČNA ideja, ali nepraktična - callback hell

3. ideja: redosled asinhronih poziva odvija se preko PROMIS-a
*/

function getItemReturnPromise(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener(`readystatechange`, function () {
            if (request.readyState === 4 && request.status === 200) {
                //sve ok
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                //desila se greška
                reject("Could not fetch data!");
            }
        });
        request.open(`GET`, resource);
        request.send();
    });
}

function submitForm2(event) {
    event.preventDefault();
    let capacity = inputOrder.value;
    let naziv = inputDeoNaziva.value;
    let pUnos = inputUnos1.value;
    let dUnos = inputUnos2.value;
    let ids = [];
    let naStanju = [];
    let traženi = [];
    let izmeđuVrednosti = [];
    getItemReturnPromise("Json/stock.json")
    .then((data) => {
        data.forEach(item => {
            if (item.stock <= 0) {
                ids.push(item.id);
            }
            else {
                naStanju.push(item.id);
            }

            if (item.item.includes(naziv)) {
                traženi.push(item.id);
            }
        });
        return getItemReturnPromise("Json/weights.json");
    })
    .then((data) => {
        let totalWeight = 0;
        data.forEach(item => {
            if (ids.includes(item.id)) {
                totalWeight += item.weight;
            }
        });
        if (totalWeight > capacity) {
            let par = document.createElement(`p`);
            par.innerHTML = `Ukupna težina proizvoda je veća od kapaciteta kamiona!`;
            par.style.color = `red`;
            par.style.fontSize = `24px`;
            par.style.fontWeight = `bold`;
            divOrder.appendChild(par);
        }
        else {
            return getItemReturnPromise("Json/prices.json");
        }
    })
    .then((data) => {
        if (data !== undefined) {
            let totalPrice = 0;
            let rez = `
            <tr>
            <th>Naziv artikla</th>
            <th>Cena artikla</th>
            </tr>
            `;

            let proizvodiUListi = ``;

            let tab = document.createElement(`table`);
            let lista = document.createElement(`ul`);
                
            data.forEach(item => {
                if (ids.includes(item.id)) {
                    totalPrice += item.price;
                
                
                    rez += 
                    `
                    <tr> 
                    <td>${item.item}<td/> 
                    <td>${item.price}<td/> 
                    </tr>
                    `

                    if (naStanju.includes(item.id && traženi.includes(item.id) && izmeđuVrednosti.includes(item.id))) {
                        proizvodiUListi += 
                        `
                     <li>˘${item.item}</li>
                     `;
                    }
                }

                if (pUnos <= dUnos) {
                    if (item.price > pUnos && item.price < dUnos) {
                        izmeđuVrednosti.push(item.id);
                    }
                }
                else {
                    if (item.price < pUnos && item.price > dUnos) {
                        izmeđuVrednosti.push(item.id);
                    }
                }

            });
            rez += 
            `
            <tr>
            <th>Ukupna cena</th>
            <th>${totalPrice}</th>
            </tr>
            `;
            tab.innerHTML = rez;
            divOrder.appendChild(tab);
            // let par = document.createElement(`p`);
            // par.innerHTML = `Ukupna cena porudžbine je ${totalPrice}rsd`;
            // par.style.color = `green`;
            // par.style.fontSize = `24px`;
            // par.style.fontWeight = `bold`;
            // divOrder.appendChild(par);
            lista.innerHTML = proizvodiUListi;
            divOrder.appendChild(lista);
            
        }
    })
    .catch((msg) => {
        console.log(msg);
    });
}

// formOrder.addEventListener(`submit`, submitForm1);
formOrder.addEventListener(`submit`, submitForm2);

//zadatak 2

async function clickGetItems() {
    let naziv = inputNaziv.value;
    let cenaMin = inputCenaMin.value;
    let cenaMax = inputCenaMax.value;

    let data1 = await getItemReturnPromise(`Json/stock.json`);
    let artikliNaStanju = [];
    data1.forEach(item => {
        if (item.stock > 0) {
            artikliNaStanju.push(item.id)
        }
    });

let data2 = await getItemReturnPromise(`Json/prices.json`);
let tabela = document.createElement(`table`);
data2.forEach(item => {
    if (artikliNaStanju.includes(item.id) && item.item.includes(naziv) && item.price >= cenaMin && item.price <= cenaMax) {
        let tr = document.createElement(`tr`);
        let td1 = document.createElement(`td`);
        let td2 = document.createElement(`td`);
        td1.innerHTML = item.item;
        td2.innerHTML = item.price;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabela.appendChild(tr);
        
    }
})

    return artikliNaStanju;
}

function akcija(event) {
    event.preventDefault();
    clickGetItems()
    .then(data => {
        divFilter.appendChild(data);
    })
    .catch(error => {
        console.log(error);
    });
}

formFilter.addEventListener(`submit`, akcija)