import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};
// 1.

const makeMarkup = (array) => {
  return array
    .map(
      (element) =>
        `<a class="gallery__item" href="${element.original}">
         <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
    </a>`
    )
    .join("");
};

refs.gallery.insertAdjacentHTML("beforeend", makeMarkup(galleryItems));

const onImageClick = (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  let gallery = new SimpleLightbox(".gallery a");
  gallery.on("show.simplelightbox", function () {});

  gallery.on("error.simplelightbox", function (e) {
    console.log(e);
  });

  gallery.options.captionsData = "alt";
  gallery.options.captionDelay = 250;
};

refs.gallery.addEventListener("click", onImageClick);
