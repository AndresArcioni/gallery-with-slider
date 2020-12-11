let imgGalleryContainer = document.querySelector('.image-gallery-container');

let imagesArray = ["images/img-bg-1.jpg", "images/img-bg-2.jpg", "images/img-bg-3.jpg", "images/img-bg-4.jpg", "images/img-bg-5.jpg", "images/img-bg-6.jpg", "images/img-bg-7.jpg", "images/img-bg-8.jpg", "images/img-bg-9.jpg"]

for( let i = 0; i < imagesArray.length; i++ ) {
    imgGalleryContainer.insertAdjacentHTML('beforeend', `
    <article class="image-thumbnail">
        <img src="${imagesArray[i]}" alt="thumbnail ${imagesArray[i]}">
        <div class="image-thumbnail__overlay"><i class="fas fa-expand-alt"></i></div>
    </article>
    `)
}

let images = document.querySelectorAll('.image-thumbnail');
let imgSelectedContainer = document.querySelector('.full-image-overlay');
let overlay = document.querySelector('.full-image-overlay__image-container img');

images.forEach(image => image.addEventListener('click', (e) => {
    let element = e.currentTarget;
    let selectedImg = element.querySelector('img').getAttribute('src');
    overlay.removeAttribute('src');
    overlay.setAttribute('src', selectedImg);
    imgSelectedContainer.classList.toggle('d-none');
}))


let closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
    imgSelectedContainer.classList.add('d-none');
})


//#region  SLIDER
let num = 0;

function next() {
    let slider = document.querySelector('.slider');
    num++;
    if(num >= imagesArray.length) {
        num = 0;
    }
    slider.src = imagesArray[num];
}

function prev() {
    let slider = document.querySelecto('.slider');
    num--;
    if(num < 0) {
        num = imagesArray.length-1;
    }
    slider.src = imagesArray[num];
}
//#endregion /SLIDER