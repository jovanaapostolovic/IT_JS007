let pitanje1 = {
    tekst: "What occurs during meiosis but not mitosis?",
    odgovori: ["Spindles are formed from microtubules", "Chromosome number is conserved", "Homologous chromosomes pair up", "Centromeres split"],
    indeksKorektnogOdgovora: 2 //c

};

let pitanje2 = {
    tekst: "Which events occur during both mitosis and meiosis?",
    odgovori: ["Production of haploid cells from diploid cells", "Crossing over", "Separation of the chromatids from each chromosome", "Production of genetically different cells"],
    indeksKorektnogOdgovora: 2 //c

};

let pitanje3 = {
    tekst: "During which stage does the cell surface area to volume ratio decrease?",
    odgovori: ["Interphase", "Metaphase", "Telophase", "Cytokinesis"],
    indeksKorektnogOdgovora: 0 //a
    
};

let pitanje4 = {
    tekst: "Which of the following does not occur during interphase?",
    odgovori: ["Replication", "Translation", "Cytokinesis", "An increase in the number of mitochondria"],
    indeksKorektnogOdgovora: 2 //c
        
};

let pitanje5 = {
    tekst: "Which of these processes require mitosis?",
    odgovori: ["Embryological development", "Reducing surface area to volume ratio", "Maintaining cell size", "Cell growth"],
    indeksKorektnogOdgovora: 0 //a
        
};

let pitanje6 = {
    tekst: "What happens during the G2 stage of interphase?",
    odgovori: ["Homologous chromosomes pair", "Synthesis of proteins", "Homologous chromosomes separate", "Replication of DNA"],
    indeksKorektnogOdgovora: 1 //b
        
};

let pitanje7 = {
    tekst: "During which stage of the cell cycle are the numbers of mitochondria increased in a cell?",
    odgovori: ["Cytokinesis", "Interphase", "Meiosis", "Mitosis"],
    indeksKorektnogOdgovora: 1 //b
        
};

let pitanje8 = {
    tekst: "What is the principal mode of division for the prokaryote Escherichia coli?",
    odgovori: ["Endocytosis", "Binary fission", "Cytokinesis", "Meiosis"],
    indeksKorektnogOdgovora: 1 //b
        
};

let pitanje9 = {
    tekst: "What describes nuclear division in stem cells?",
    odgovori: ["Clonal selection", "Mitosis", "Cytokinesis", "Meiosis"],
    indeksKorektnogOdgovora: 1 //b
        
};

let pitanje10 = {
    tekst: "What actions occur during interphase?",
    odgovori: ["DNA replication and RNA synthesis", "Spindle formation and DNA replication", "Chromosome alignment at the metaphase plate", "Growth and separation of sister chromatids"],
    indeksKorektnogOdgovora: 0 //a
        
};

let nizPitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];

let izmešaniNizPitanja = niz => {
    for (let i = niz.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let x = niz[i];
      niz[i] = niz[j];
      niz[j] = x;
    }
    return niz.slice(0, 5);
};

let noviNiz = izmešaniNizPitanja(nizPitanja);

let kviz = niz => {
    let t = "";
    let p = 0;
    for (let i = 0; i < niz.length; i++) {
        let odvPitanja = document.createElement("br");
        let forma = document.createElement("form");
        forma.style.border = "1px solid orange";
        forma.style.borderRadius = "10px";
        forma.style.backgroundColor = "white";
        forma.style.padding = "10px";
        forma.style.display = "block";
        forma.style.width = "50%";
        let pitanje = document.createElement("h3");
        pitanje.textContent = `${i+1}. ${niz[i].tekst}`;
        p = i + 1;
        for (let j = 0; j < niz[i].odgovori.length; j++) {
            let razmak = document.createElement("br");
            let odgovorIzbor = document.createElement("input");
            odgovorIzbor.type = "radio";
            odgovorIzbor.name = `ponuđenoNaPitanje${i}`;
            odgovorIzbor.id = `pitanje${i}ogovor${j}`;
            if (j == 0) {
                odgovorIzbor.checked = "checked";
            }
            // if (j == niz[i].indeksKorektnogOdgovora) {
            //     t += `<p>Tačno ste odgovorili na ${p}. pitanje.</p>`;
                
            // }
            // else {
            //     t += `<p>Netačno ste odgovorili na ${p}. pitanje.</p>`;
            // }
            
            let odgovorPonuđen = document.createElement("label");
            odgovorPonuđen.textContent = niz[i].odgovori[j];
            pitanje.appendChild(razmak);
            pitanje.appendChild(odgovorIzbor);
            pitanje.appendChild(odgovorPonuđen);
 
        }

        forma.appendChild(pitanje);
        document.body.appendChild(forma);
        document.body.appendChild(odvPitanja);
    }

    let btnPošaljiOdgovore = document.createElement("button");
    btnPošaljiOdgovore.textContent = "Pošalji odgovore";
    document.body.appendChild(btnPošaljiOdgovore);

    let btnNovaPitanja = document.createElement("button");
    btnNovaPitanja.textContent = "Nova pitanja";
    document.body.appendChild(btnNovaPitanja);

    btnPošaljiOdgovore.addEventListener("click", () => {
        
        // for (let i = 0; i < niz.length; i++) {
        //     for (let j = 0; j < niz[i].length; j++) {
        //         if ( j == niz[i].indeksKorektnogOdgovora && niz[i][j].checked) {
        //             t += `<p>Tačno ste odgovorili na ${p}. pitanje.</p>`;
                    
        //         }
        //         else {
        //             t += `<p>Netačno ste odgovorili na ${p}. pitanje.</p>`;
        //         }
                
        //     }
            
        // }
        // document.body.innerHTML += t;
    });

    btnNovaPitanja.addEventListener("click", () => {
    location.reload();
    });


};

kviz(noviNiz);


