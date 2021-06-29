const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

/* 
    ## Раздел ссылок на элементы
*/

const galleryRef = document.querySelector(".js-gallery");
const modalMenuRef = document.querySelector(".js-lightbox");
const modalMenuImgRef = document.querySelector(".lightbox__image");
const modalOverlayRef = document.querySelector(".lightbox__overlay");
const modalCloseBtnRef = document.querySelector(".lightbox__button");
const generatedGalleryMarkup = createGalleryElementsMarkup(galleryItems);

// Вставка сгенерированной разметки
galleryRef.insertAdjacentHTML("beforeend", generatedGalleryMarkup);

/* 
    ## Раздел слушателей событий
*/

galleryRef.addEventListener("click", onGalleryItemClick);

modalCloseBtnRef.addEventListener("click", onModalCloseBtnClick);

modalOverlayRef.addEventListener("click", onModalOverlayClick);

document.addEventListener("keydown", onModalOverlayKeydown);

/* 
    ## Раздел функций
*/

function createGalleryElementsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link"
                  href="${original}"
                  >
                  <img class="gallery__image"
                    src="${preview}" 
                    data-source="${original}" 
                    alt="${description}"
                  />
                </a>
                </li>`;
    })
    .join("");
}

function onGalleryItemClick(e) {
  const isGalleryImg = e.target.classList.contains("gallery__image");

  if (!isGalleryImg) {
    return;
  }

  e.preventDefault();
  modalMenuRef.classList.add("is-open");
  modalMenuImgRef.src = e.target.dataset.source;
  modalMenuImgRef.alt = e.target.alt;
}

function onModalCloseBtnClick(e) {
  closeModalOverlay()
}

function onModalOverlayClick(e) {
  closeModalOverlay()
}

function onModalOverlayKeydown(e) {
  if (e.code !== "Escape") {
    return;
  }

  closeModalOverlay()
}

function closeModalOverlay() {
  modalMenuRef.classList.remove("is-open");
  modalMenuImgRef.src = "";
  modalMenuImgRef.alt = "";
}
