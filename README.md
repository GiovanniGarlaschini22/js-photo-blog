# Photo Blog
---

## Consegna
**Milestone 1**
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento).
**Milestone 2**
Utilizzando Postman, testiamo una chiamata a questo endpoint:
https://lanciweb.github.io/demo/api/pictures/
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
**Milestone 3**
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

---
## Dettagli
**Bonus**
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata.

**Note**
Non siete obbligati a usare Bootstrap: siete liberi di decidere come gestire lo stile.

**Font utilizzati:**
titoli:  ‘Edu Tas Beginner’, sans-serif;
date: ‘Sometype Mono’, ‘monospace’;
(Dovreste sapere a questo punto cosa e come prendere da Google Fonts).

---
#### Ragionamento logico 12/05/2025

- [x] Creare file html e css procedendo con il milestone 1;

**HTML**
- [x] Nell'html, inserire l'header all'interno di cui inserire il titolo "estate '24"
- [x] Nell'html, sempre all'interno del body, all'interno di un main e all'interno di un container inserire n°1 card che andrà poi a contenere la fotografia che inserirò a mia scelta;
- [x] Solo all'interno di una card vado ad inserire la fotografia come da indicazione;
- [x] Creo un div per la card all'interno di cui mettere l'immagine e un secondo div per la descrizione dell'immagine;
- [x] in fondo al body collego lo script di javascript.

**CSS**
- [x] all'interno del body specifico la font utilizzata;
- [x] inserisco l'immagine di background del sughero e utilizzo background-size: cover per riempire proporzionalmente l'immagine;
- [x] all'interno dell'header inserisco l'immagine del muro e anche qui utilizzo cover per il medesimo scopo;
- [x] stilizzo il titolo;
- [x] All'interno del main stilizzo il container e la card che poi successivamente andrò a duplicare;
- [x] Per posizionare il pin rosso utilizzo position absolute;
- [x] Infine stilizzo l'immagine del box e il testo, in questo caso per comodità utilizzo un immagine già presente che é quella del sughero.
