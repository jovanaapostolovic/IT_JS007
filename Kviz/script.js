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



let kviz = niz => {

    document.body.style.backgroundColor = "cornsilk"; //boja pozadine

    let izmešaniNiz5Pitanja = niz => {
        for (let i = niz.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let x = niz[i];
          niz[i] = niz[j];
          niz[j] = x;
        }
        return niz.slice(0, 5);
    };
    
    let noviNiz = izmešaniNiz5Pitanja(niz);

    let forma = document.createElement("form"); 

    for (let i = 0; i < noviNiz.length; i++) {
        let paragraf = document.createElement("p");
        paragraf.style.border = "1px solid orange";
        paragraf.style.borderRadius = "10px";
        paragraf.style.backgroundColor = "white";
        paragraf.style.padding = "10px";
        paragraf.style.display = "block";
        paragraf.style.width = "50%";
        let pitanje = document.createElement("h3");
        pitanje.textContent = `${i+1}. ${niz[i].tekst}`;
        paragraf.appendChild(pitanje);
        
        for (let j = 0; j < noviNiz[i].odgovori.length; j++) {
            let razmak = document.createElement("br");
            let odgovorIzbor = document.createElement("input");
            odgovorIzbor.type = "radio";
            odgovorIzbor.name = `ponuđenoNaPitanje${i}`;
            odgovorIzbor.value = j;
            if (j == 0) {
                odgovorIzbor.checked = "checked";
            }  

            let odgovorPonuđen = document.createElement("label");
            odgovorPonuđen.textContent = noviNiz[i].odgovori[j];
            paragraf.appendChild(odgovorIzbor);
            paragraf.appendChild(odgovorPonuđen);
            paragraf.appendChild(razmak);
        }

        forma.appendChild(paragraf);
        
    }
    document.body.appendChild(forma);

    let btnPošaljiOdgovore = document.createElement("button");
    btnPošaljiOdgovore.textContent = "Pošalji odgovore";
    document.body.appendChild(btnPošaljiOdgovore);

    let btnNovaPitanja = document.createElement("button");
    btnNovaPitanja.textContent = "Nova pitanja";
    document.body.appendChild(btnNovaPitanja);

    btnPošaljiOdgovore.style.margin = "5px";
    btnNovaPitanja.style.margin = "5px";

    let p = 0; //br. pitanja
    
    btnPošaljiOdgovore.addEventListener("click", () => {
        let rešenja = document.createElement("div");
        for (let i = 0; i < noviNiz.length; i++) {
            p = i + 1;
            let tačno = noviNiz[i].indeksKorektnogOdgovora;
            let čekirano = document.querySelector(`input[name="ponuđenoNaPitanje${i}"]:checked`).value;
            if (tačno == čekirano) {
                rešenja.innerHTML += `<p style="color:green;">Tačno ste odgovorili na ${p}. pitanje.</p>`;
            }
            else {
                rešenja.innerHTML += `<p style="color:red;">Netačno ste odgovorili na ${p}. pitanje.</p>`;
            }
            
            let k = document.getElementsByTagName("input");
            let k1 = Array.from(k);
            k1.forEach( n => {
                n.disabled = true;
            });
            
        }

        document.body.appendChild(rešenja);
        
    });

    btnNovaPitanja.addEventListener("click", () => {
        location.reload();
    });

};

kviz(nizPitanja);





