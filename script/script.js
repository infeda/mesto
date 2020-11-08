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

let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let closeEditPopup = document.querySelector('.popup-container__close-button_popup_edit');
let closeAddPopup = document.querySelector('.popup-container__close-button_popup_add');
let closeImagePopup = document.querySelector('.popup-container__close-button_popup_image');
let submitButton = document.querySelector('.popup-container__submit-button');
let popupEdit = document.querySelector('.popup_edit');
let popupAdd = document.querySelector('.popup_add');
let popupImage = document.querySelector('.popup_image');
let nameInput = document.querySelector('.popup-container__form-item_el_name');
let jobInput = document.querySelector('.popup-container__form-item_el_text');
let namePlace = document.querySelector('.profile__header');
let jobPlace = document.querySelector('.profile__subheader');
let popupHeading = document.querySelector('.popup-container__heading');
let formElement = document.querySelector('.popup-container__form');

initialCards.forEach(makeCard);

function makeCard(elem) {
  const cardTemplate = document.querySelector('#card-template').content;
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

  addCard(cardElement);
}

function addCard(cardElement) {
  const elements = document.querySelector('.elements');
  elements.prepend(cardElement);
}

function addClassPopupOpened (popupToOpen) {
  popupToOpen.classList.add('popup_opened');
}

function openPopupImage(popupToOpen, imageSrc, imageHeading) {
  addClassPopupOpened(popupToOpen);
  popupImage.querySelector('.popup-container-image__image').src = imageSrc;
  popupImage.querySelector('.popup-container-image__heading').textContent = imageHeading;
}

function openPopup(popupToOpen, firstInputValue, secondInputValue, handler) {
  addClassPopupOpened(popupToOpen);

  nameInput.value = firstInputValue;
  jobInput.value = secondInputValue;

  formElement.addEventListener('submit', handler);
}

function closePopup(popupToClose) {
  popupToClose.classList.remove('popup_opened');
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();

  let nameValue = nameInput.value;
  let jobValue = jobInput.value;

  namePlace.textContent = nameValue;
  jobPlace.textContent = jobValue;
  
  formElement.removeEventListener('submit', editFormSubmitHandler);
  closePopup(popupEdit);
}

function addFormSubmitHandler(evt) {
  evt.preventDefault();

  const cardInfo = {
    name: nameInput.value,
    link: jobInput.value
  };

  makeCard(cardInfo);
 
  formElement.removeEventListener('submit', addFormSubmitHandler);
  closePopup(popupAdd);
}

editButton.addEventListener('click', function (evt) {
  openPopup(popupEdit, namePlace.textContent, jobPlace.textContent, editFormSubmitHandler);
});

addButton.addEventListener('click', function (evt) {
  openPopup(popupAdd, '', '', addFormSubmitHandler);
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
