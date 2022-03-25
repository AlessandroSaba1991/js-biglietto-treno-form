/* 
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il nome completo, il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).

per generare il codice della carrozza e il codice CP potreste usare Math.random()
*/

//Prezzo al km
const prezzo_al_km = 0.21;

//prezzo finale + messaggio
let prezzo_finale, messaggio;

const element_button_genera = document.querySelector(".genera");
element_button_genera.addEventListener("click", function() {
    //Prendi Nome e Cognome + Km da percorrere + fascia d'eta
    const element_nome_utente = document.getElementById("nome_utente");
    const element_km_da_percorrere = document.getElementById("km_da_percorrere");
    const element_fascia_eta = document.getElementById("fascia_eta");

    //prezzo biglietto
    const prezzo_biglietto = element_km_da_percorrere.value * prezzo_al_km;

    //Definire sconti
    const sconto_minorenne = prezzo_biglietto * 0.2;
    const sconto_over_65 = prezzo_biglietto * 0.4;

    //numero carrozza
    const num_carrozza = Math.floor(Math.random() * 8);

    //numero codice CP
    const num_codice = Math.floor(Math.random() * 100000);

    //sconto minorenni + comunicazione costo biglietto
    if (element_fascia_eta.value == 1) {
        prezzo_finale = prezzo_biglietto - sconto_minorenne;
        messaggio = "Sconto Minorenne";
    }
    //sconto anziani + comunicazione costo biglietto
    else if (element_fascia_eta.value == 2) {
        prezzo_finale = prezzo_biglietto - sconto_over_65;
        messaggio = "Sconto Over 65";
    }
    //nessuno sconto + comunicazione costo biglietto
    else if (element_fascia_eta.value == 3) {
        prezzo_finale = prezzo_biglietto;
        messaggio = "Nessuno Sconto";
    }

    const element_nome = document.querySelector(".nome_passeggero");
    element_nome.insertAdjacentHTML("beforeend", `<p> ${element_nome_utente.value} </p>`);

    const element_sconto = document.querySelector(".offerta");
    element_sconto.insertAdjacentHTML("beforeend", `<p> ${messaggio} </p>`);

    const element_num_carrozza = document.querySelector(".carrozza");
    element_num_carrozza.insertAdjacentHTML("beforeend", `<p> ${num_carrozza} </p>`);

    const element_num_codice = document.querySelector(".codice_cp");
    element_num_codice.insertAdjacentHTML("beforeend", `<p> ${num_codice} </p>`);

    const element_costo = document.querySelector(".costo_biglietto");
    element_costo.insertAdjacentHTML("beforeend", `<p> ${prezzo_finale.toFixed(2)}€ </p>`);
});

const element_button_annulla = document.querySelector(".annulla");
element_button_annulla.addEventListener("click", function() {
    window.location.reload();
});