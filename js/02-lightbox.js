import { galleryItems } from './gallery-items.js';

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `  
      <a class="gallery__item" href="${original}">
        <img
         class="gallery__image"
         src="${preview}"
         alt="${description}"
        />
      </a>  
    `;
    })
    .join('');
}

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  navText: ['⇦', '⇨'],
});
