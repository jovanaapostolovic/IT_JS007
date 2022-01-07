let btnIzračunaj = document.getElementById(`izračunaj`);
let btnResetuj = document.getElementById(`resetuj`);

let poljeRuže = document.getElementById(`ruže`);
let poljeLjiljani = document.getElementById(`ljiljani`);
let poljeGerberi = document.getElementById(`gerberi`);

// let poljeRužeKoličina = parseInt(poljeRuže.value);
// let poljeLjiljaniKoličina = parseInt(poljeLjiljani.value);
// let poljeGerberiKoličina = parseInt(poljeGerberi.value);

let poklonBombonjera = document.getElementById(`bombonjera`);
let poklonČokolada = document.getElementById(`čokolada`);
let poklonŠampanjac = document.getElementById(`šampanjac`);

let poručeno = document.getElementById(`porudžbina`);
poručeno.innerHTML = ``;

let cenaSaPopustom = document.getElementById(`cena`);

btnIzračunaj.addEventListener("click", (e) => {
    e.preventDefault();

    let poljeRužeKoličina = poljeRuže.value;
    poljeRužeKoličina = parseInt(poljeRužeKoličina || 0);
    let poljeLjiljaniKoličina = poljeLjiljani.value;
    poljeLjiljaniKoličina = parseInt(poljeLjiljaniKoličina || 0);
    let poljeGerberiKoličina = poljeGerberi.value;
    poljeGerberiKoličina = parseInt(poljeGerberiKoličina || 0);

    let račun = poljeRužeKoličina * 150 + poljeLjiljaniKoličina * 120 + poljeGerberiKoličina * 70;

    if (poljeRužeKoličina >= 1) {
        for (let r = 0; r < poljeRužeKoličina; r++) {
            poručeno.innerHTML += `<img src="/Cvećara/Slike/rose.png" alt="ruža" width="10%" height="10%"/>`;
        
        };

    }
    poručeno.innerHTML += `<br>`;

    if (poljeLjiljaniKoličina >= 1) {
        for (let l = 0; l < poljeLjiljaniKoličina; l++) {
            poručeno.innerHTML += `<img src="/Cvećara/Slike/lily.png" alt="ljiljan" width="10%" height="10%"/>`;
        
        };
    }
    poručeno.innerHTML += `<br>`;
    
    if (poljeGerberiKoličina >= 1) {
        for (let g = 0; g < poljeGerberiKoličina; g++) {
            poručeno.innerHTML += `<img src="/Cvećara/Slike/gerbera.png" alt="gerber" width="10%" height="10%"/>`;
        
        };
    }
    
    if (poklonBombonjera.checked) {
        poručeno.innerHTML += `<p style="color:purple">+ Bombonjera</p>`;
        račun += 500;
    }

    if (poklonČokolada.checked) {
        poručeno.innerHTML += `<p style="color:purple">+ Čokolada</p>`;
        račun += 500;
    }

    if (poklonŠampanjac.checked) {
        poručeno.innerHTML += `<p style="color:purple">+ Šampanjac</p>`;
        račun += 500;
    }

    let načinPlaćanja = document.querySelector(`input[name="plaćanje"]:checked`);
    let izborPlaćanja = načinPlaćanja.value;

    if (izborPlaćanja == "kartica" && račun > 2000) {
        poručeno.innerHTML += `<p style="color:purple">Cena bez popusta je ${račun}`;
        račun = račun - račun * 0.1;
        cenaSaPopustom.innerHTML += `<h1 style="color:purple">Cena sa popustom je: ${račun}</h1>`;
    }
    else {
        poručeno.innerHTML += `<p style="color:purple">Cena je ${račun}`;
    }

    
    
});