# Esercitazione: "Photo Blog"

**Nome Repository:** `js-photo-blog`  
**Deadline:** 14 Maggio 2025
**Autore:** Giovanni Garlaschini  

---

## 📌 Milestone 12 Maggio 2025

## CONSEGNA:
Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
Milestone 2
Utilizzando Postman, testiamo una chiamata a questo endpoint:
https://lanciweb.github.io/demo/api/pictures/
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
Font utilizzati:
titoli:  ‘Edu Tas Beginner’, sans-serif;
date: ‘Sometype Mono’, ‘monospace’;
(Dovreste sapere a questo punto cosa e come prendere da Google Fonts… :occhiolino:)
Bonus
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
Note
Non siete obbligati a usare Bootstrap: siete liberi di decidere come gestire lo stile :faccia_leggermente_sorridente:
Buon Lavoro e buon divertimento!

---

## ESECUZIONE LOGICA: Il mio ragionamento

1. **Impostazione del layout statico:**  
   Ho cominciato con una sola card statica per curare i dettagli grafici e il posizionamento. Procedendo con HTML e CSS.

2. **Analisi e comprensione dell’API:**  
   Prima di scrivere il codice JS, ho voluto capire bene come erano strutturati i dati.  
   Usando Postman ho visto che ogni oggetto dell’array conteneva tutto il necessario per costruire una card.

3. **JavaScript:**  
   Ho usato una `axios.get()` per caricare le immagini da remoto.  
   Ho quindi costruito le card una ad una usando `template literals`, e le ho inserite nel DOM.

---

### ✅ Milestone 1 — Layout statico con HTML e CSS

Per prima cosa, ho creato la struttura HTML della pagina, definendo l’`<header>` con un titolo centrale e il blocco `<main>` contenente una griglia `.grid` per le card.  
Ho inserito manualmente una sola card come riferimento iniziale, composta da:
- una data
- un titolo

Nel CSS ho lavorato sullo stile generale della pagina, utilizzando due sfondi diversi: uno per il `body` (texture del sughero) e uno per l’`header` (texture del muro).  
Ho importato due font da Google Fonts per dare carattere al layout:
- `'Edu TAS Beginner'` per i titoli
- `'Sometype Mono'` per le date

Ho utilizzato `flex` e `flex-wrap` per gestire il posizionamento delle card nella griglia.

---

### ✅ Milestone 2 — Test dell’API con Postman

Ho collegato lo `script cdn Axios` all'html;

Dopo aver completato la base statica, mi sono concentrato sull’integrazione dell’API.  
Ho utilizzato l'estensione di VSC **Postman** per testare il funzionamento dell’endpoint fornito:

📍 `https://lanciweb.github.io/demo/api/pictures/`

Analizzando la risposta JSON ho notato che ogni oggetto includeva:
- `title`: il nome della foto
- `date`: la data associata
- `url`: il link all’immagine

A quel punto, ho iniziato a pensare a come strutturare il codice JavaScript per generare una card che contenesse i dati forniti dalla risposta ricevuta dall'API.

---

### ✅ Milestone 3 — Chiamata AXIOS e generazione cards

Ho utilizzato **Axios** per effettuare la richiesta.  
Una volta ricevuti i dati dall’API, ho iterato su ogni elemento usando `forEach()` e ho creato una stringa HTML per ogni card, poi inserita nel DOM all’interno del contenitore `.grid`.

---

## DETTAGLI TECNICI

### Font utilizzati:
- **Titoli:** `'Edu TAS Beginner', cursive`
- **Date:** `'Sometype Mono', monospace`

---

## Bonus: Responsive
 
Ho utilizzato `flex-wrap` e `max-width` per le card, in modo che su smartphone e tablet si dispongano in colonna.

---

## 💡 Note

- **Non ho utilizzato Bootstrap**: ho preferito scrivere il CSS manualmente per aumentare la domestichezza nell'utilizzo e nella scrittura dei i fogli stile e per non attribuire maggiore peso al progetto in quanto Bootstrap ha un notevole peso.

---

## 📌 Milestone 13 Maggio 2025

## CONSEGNA:
Milestone 1
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.
Milestone 2
Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il `display: none` .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
Milestone 3
Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare;
Bonus
Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare.

---

## ESECUZIONE LOGICA: Il mio ragionamento

Costruire la base HTML prima di qualsiasi interazione o stile, era fondamentale avere una struttura HTML solida. Ho deciso di:
- creare un contenitore `<main>` dove contenere poi le immagini;
- predisporre un overlay all’interno della pagina, da tenere nascosto inizialmente;
- Progettare l’overlay, mi serviva un elemento che coprisse tutto lo schermo e che potesse mostrare un’immagine ingrandita. Ho pensato ad usare un `div` con `position: fixed`, centrato con `Flexbox`.
- Controllare la visibilità con JavaScript, una volta creato l’overlay, ho ragionato su come mostrarlo e nasconderlo:
    - ho creato la classe `.hidden` che lo rende invisibile;
    - ho gestito i click tramite `addEventListener`, alternando `classList.add()`
    e `classList.remove()`.

- Per collegare ogni immagine all’overlay sapevo che non bastava aprire l’overlay: dovevo inserire l’immagine giusta al suo interno. Ho pensato di usare `src` e `alt` dell’immagine cliccata, assegnandoli all’immagine presente nell’overlay.

---

### ✅ Milestone 1 — Struttura overlay

La prima cosa che ho fatto è stato progettare l’overlay, ovvero un elemento che si sovrappone all’intera pagina quando clicco su una foto.
L’obiettivo era fargli occupare tutta la finestra e centrare al suo interno un’immagine e un bottone di chiusura.

- Ho aggiunto direttamente all’interno del `<main>` un nuovo `<div>` con classe `.overlay`;
- Poi nel CSS, ho definito il suo stile, in modo che coprisse tutta la finestra e centrasse i contenuti;

---

### ✅ Milestone 2 — Mostrare e nascondere l’overlay

Successivamente ho pensato a come far comparire e scomparire l’overlay.
Per fare questo ho usato una classe CSS `.hidden`, impostando `display: none`, da aggiungere o rimuovere attraverso JavaScript.

Nel file `script.js`, una volta caricata la pagina, ho selezionato:
- l’elemento overlay
- il bottone di chiusura
- il tag immagine interno

Infine, una volta caricate le foto (via API), ho aggiunto un `addEventlistener` per ogni immagine per mostrare l’overlay.

---

### ✅ Milestone 3 — Mostrare l'immagine cliccata nell'overlay

Per quest'ultima parte, per far sì che l’immagine cliccata venga mostrata nell’overlay.
Ho pensato che fosse sufficiente assegnare `src` e `alt` dell’immagine cliccata all’immagine dell’overlay:

`const allImages = document.querySelectorAll('.card-img');
allImages.forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlayImg.alt = img.alt;
    overlay.classList.remove('hidden');
  });
});`

In questo modo, ogni volta che clicco una foto, l’overlay si apre con quella foto esatta visibile a tutto schermo.