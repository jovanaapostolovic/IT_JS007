let getSportisti = (resolve, reject) => {
    let request = new XMLHttpRequest();

    request.addEventListener(`readystatechange`, () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            resolve(data);
        
        }
        else if (request.readyState === 4) {
            reject(`Could not fetch data!`)
        }
   
    });
    request.open(`GET`, `sportisti.json`);
    request.send();
}

let ispisPoruke = poruka => {
    document.body.innerHTML += `<p class="error">${poruka}</p>`;
}

////////
let prosečnaVisina = niz => {
    let zb = 0;
    let b = 0;
    niz.forEach(s => {
        zb += s.visina;
        b++;
    });
    console.log(zb / b);

}
getSportisti(prosečnaVisina,ispisPoruke);

////////
let najmanjeTransfera = niz => {
    let minT = niz[0].imePrezime;
    let min = niz[0].timovi.length
    for (let i = 1; i < niz.length; i++) {
        if (niz[i].timovi.length < min) {
            min = niz[i].timovi.length;
            minT = niz[i].imePrezime;
        }
          
    }
    console.log(minT);
}
getSportisti(najmanjeTransfera,ispisPoruke);

///////
let igraliZaTim = niz => {
    let igrali = [];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].timovi.includes("Lakers")) {
            igrali.push(niz[i].imePrezime);
        }
         
    }
    console.log(igrali);
}
getSportisti(igraliZaTim, ispisPoruke);


