// ENDPOINT //
// "https://lanciweb.github.io/demo/api/pictures/" //

document.addEventListener('DOMContentLoaded', () => {
    // Seleziono l'elemento HTML con la classe "grid", che rappresenta il contenitore delle card //
    const grid = document.querySelector('.grid');

    // URL DELL'API //
    const apiImage = "https://lanciweb.github.io/demo/api/pictures/";

    // Seleziono l'overlay e il bottone di chiusura con querySelector //
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.getElementById('closeBtn');
    const overlayImg = overlay.querySelector('img');

    // Chiudo l'overlay al click del bottone con addEventListener //
    closeBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });

    // CHIAMATA CON AXIOS //
    axios.get(apiImage)
        .then((resp) => {
            // Estraggo i dati dalla risposta //
            const pictures = resp.data;
            console.log(pictures);

            // Inizializzo una variabile per contenere l'HTML delle card //
            let htmlContent = '';

            // Itero su ogni elemento dell'array ricevuto dall'API //
            pictures.forEach(item => {
                console.log(item);

            // Per ogni elemento, creo un blocco HTML che rappresenta una card //
            htmlContent += `
            <div class="card">
                <img class="pin" src="./IMG/pin.svg" alt="pin">
                <img class="card-img" src="${item.url}" alt="${item.title}">
                <div class="card-content">
                <p>${item.date}</p>
                <h3>${item.title}</h3>
                </div>
            </div>
            `;
            });
            // Dopo aver generato l'HTML per tutte le card, assegno la proprietà innerHTML //
            grid.innerHTML = htmlContent;

            // Dopo che le immagini sono state aggiunte al DOM //
            const allImages = document.querySelectorAll('.card-img');
            allImages.forEach(img => {
                // Aggiungo un evento al click dell’immagine //
                img.addEventListener('click', () => {
                    // al click imposto l'immagine dell’overlay uguale a quella cliccata //
                    overlayImg.src = img.src;
                    overlayImg.alt = img.alt;
                    // rimuovo la classe "hidden" per mostrare l’overlay //
                    overlay.classList.remove('hidden');
                });
            });
        });
});