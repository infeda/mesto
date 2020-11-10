const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeEditPopup = document.querySelector('.popup__close-button_popup_edit');
const closeAddPopup = document.querySelector('.popup__close-button_popup_add');
const closeImagePopup = document.querySelector('.popup__close-button_popup_image');
const submitButton = document.querySelector('.popup-container__submit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_image');
const nameInput = document.querySelector('.popup-container__form-item_el_name');
const jobInput = document.querySelector('.popup-container__form-item_el_text');
const headingInput = document.querySelector('.popup-container__form-item_el_heading');
const linkInput = document.querySelector('.popup-container__form-item_el_link');
const namePlace = document.querySelector('.profile__header');
const jobPlace = document.querySelector('.profile__subheader');
const popupHeading = document.querySelector('.popup-container__heading');
const editFormElement = document.querySelector('.popup-container__form_edit');
const addFormElement = document.querySelector('.popup-container__form_add');
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content;
const imageOfPopupImage = popupImage.querySelector('.popup-container-image__image');
const headingOfPopupImage = popupImage.querySelector('.popup-container-image__heading');

function createCard(elem) {
  const cardElement = cardTemplate.cloneNode(true);
  
  cardElement.querySelector('.card__heading').textContent = elem.name;
  cardElement.querySelector('.card__image').src = elem.link;
  cardElement.querySelector('.card__image').setAttribute('alt', elem.name);

  cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');
  });

  cardElement.querySelector('.card__delete').addEventListener('click', function(evt) {
    evt.target.parentElement.remove();
  });

  cardElement.querySelector('.card__image').addEventListener('click', function() {
    openPopupImage(popupImage, elem.link, elem.name);
  });

  return cardElement;
}

function openPopup (popupToOpen) {
  popupToOpen.classList.add('popup_opened');
}

function closePopup(popupToClose) {
  popupToClose.classList.remove('popup_opened');
}

function openPopupImage(popupToOpen, imageSrc, imageHeading) {
  openPopup(popupToOpen);
  imageOfPopupImage.src = imageSrc;
  headingOfPopupImage.textContent = imageHeading;
  imageOfPopupImage.setAttribute('alt', imageHeading);
}

function openProfilePopup() {
  openPopup(popupEdit);
  nameInput.value = namePlace.textContent;
  jobInput.value = jobPlace.textContent;
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  namePlace.textContent = nameValue;
  jobPlace.textContent = jobValue;
  
  closePopup(popupEdit);
}

function addFormSubmitHandler(evt) {
  evt.preventDefault();

  const cardInfo = {
    name: headingInput.value,
    link: linkInput.value
  };

  elements.prepend(createCard(cardInfo));
  
  headingInput.value = '';
  linkInput.value = '';
 
  closePopup(popupAdd);
}

initialCards.forEach(elem => elements.prepend(createCard(elem)) );


editButton.addEventListener('click', function (evt) {
  openProfilePopup();
});
addButton.addEventListener('click', function () {
  openPopup(popupAdd);
});
closeEditPopup.addEventListener('click', function () {
  closePopup(popupEdit);
});
closeAddPopup.addEventListener('click', function () {
  closePopup(popupAdd);
});
closeImagePopup.addEventListener('click', function () {
  closePopup(popupImage);
});
editFormElement.addEventListener('submit', editFormSubmitHandler);
addFormElement.addEventListener('submit', addFormSubmitHandler);