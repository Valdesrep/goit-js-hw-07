import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, description, original }) => {
      return `<a class="gallery__item" href="${original}">
    <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"/>
        </a>`;
    })
    .join("");
}

const gallery = document.querySelector(".gallery");

const galleryItemMarkup = createGalleryMarkup(galleryItems);
gallery.innerHTML = galleryItemMarkup;
