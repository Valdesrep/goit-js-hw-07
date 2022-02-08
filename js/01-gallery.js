import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
    </a>
    </div>`;
    })
    .join("");
}

const gallery = document.querySelector(".gallery");

const galleryItemMarkup = createGalleryMarkup(galleryItems);
// gallery.insertAdjacentElement("beforeend", galleryItemMarkup);
gallery.innerHTML = galleryItemMarkup;

gallery.addEventListener("click", (event) => {
    preventDefault()
});