/*
creare un carousel di immagini
le immagini sono in un array (array di stringhe)
pulsanti avanti indietro
aggiungere le thumb (la thumb attiva sarà distinguibile dalle altre)
dopo 5 secondi la slide avanza automaticamente
*/

/*
Consegna:
Riprendiamo l'esercizio carosello e rifacciamolo, 
questa volta usando gli oggetti, 
prendendo come riferimento il codice scritto oggi insieme a lezione, 
che trovate in allegato
Modifichiamo il codice dell'esercizio per renderlo 
funzionante con un array di oggetti, 
con una sola regola: non è possibile modificare l'HTML, 
ma solamente JS e CSS. Ricordiamo sempre l'importanza dell'integrità del dato.
*/

// settings
const CHANGE_IMAGE_DELAY = 5;

const arrayOfObject = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


// stampa array di oggetti sulla console
const images = []

for (let i = 0; i < arrayOfObject.length; i++){
    const classe = arrayOfObject[i];
    images.push(classe.url)
    console.log(`${classe.url} ${classe.title} ${classe.description}`)
}


let activeIndex = 0;
buildCarousel(arrayOfObject, activeIndex);

let idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);

const leftArrowButton = document.getElementById('left-arrow');
const rightArrowButton = document.getElementById('right-arrow');

leftArrowButton.addEventListener('click', moveCarouselPrevious);


rightArrowButton.addEventListener('click', moveCarouselForward);




function moveCarouselForward(){
    clearInterval(idInterval)
    // se l'indice si trova in fondo allora lo riposizione all'inizio dell'array
    activeIndex = activeIndex < images.length -1 ? activeIndex +1 : 0 ;
    buildCarousel(images, activeIndex);
    idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);
}

function moveCarouselPrevious(){
     clearInterval(idInterval)
    // se l'indice è in prima posizione si valorizza all'ultima posizione dell'array
    activeIndex = activeIndex > 0 ? activeIndex -1 : images.length -1 ;

    // parte di codice che si scrive in forma abbreviata nella riga numero 96
    /* 
    if(activeIndex > 0){
        activeIndex = activeIndex -1
    } else{
        activeIndex = images.length -1
    }
   */ 

    buildCarousel(images, activeIndex);
    idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);
}


function buildCarousel(urls, activeIndex){
    const carouselImages = document.querySelector('.carousel-images');
    const carouselThumbs = document.querySelector('.carousel-thumbs');
    let content = '';
    for(let i = 0; i < urls.length; i++){
        const url = urls[i];
        const imageClass = i === activeIndex ? 'carousel-img active' : 'carousel-img'
        content += `<img class="${imageClass}" src="${url}" alt="${url}" />`;
    }
    // console.log({content});
    carouselImages.innerHTML = content;
    carouselThumbs.innerHTML = content;
}

