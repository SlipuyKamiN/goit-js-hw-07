import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  gallery: document.querySelector(".gallery"),
};
// 1.

const makeMarkup = (array) => {
  return array
    .map(
      ({ preview, original, description } = {}) =>
        `      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
  `
    )
    .join(" ");
};

refs.gallery.insertAdjacentHTML("beforeend", makeMarkup(galleryItems));

// 2.

const onImageClick = (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const originalImgUrl = event.target.getAttribute("data-source");

  // 3

  let instance;
  const openModal = () => {
    instance = basicLightbox.create(`
    <img src="${originalImgUrl}" width="800" height="600" class="modal">`);

    instance.show();
  };

  const closeModalByEsc = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
    window.removeEventListener("keydown", closeModalByEsc);
  };

  openModal();

  window.addEventListener("keydown", closeModalByEsc);
};

refs.gallery.addEventListener("click", onImageClick);
