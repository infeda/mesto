import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import { initialCards } from './initial-card.js'; 

const config = {
  formSelector: '.popup-container__form',
  inputSelector: '.popup-container__form-item',
  submitButtonSelector: '.popup-container__submit-button',
  inactiveButtonClass: 'popup-container__submit-button_inactive',
  inputErrorClass: 'popup-container__form-item_type_error',
  errorClass: 'popup-container__form-item-error-active'
};

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_image');
const nameInput = document.querySelector('.popup-container__form-item_el_name');
const jobInput = document.querySelector('.popup-container__form-item_el_text');
const headingInput = document.querySelector('.popup-container__form-item_el_heading');
const linkInput = document.querySelector('.popup-container__form-item_el_link');
const namePlace = document.querySelector('.profile__header');
const jobPlace = document.querySelector('.profile__subheader');
const editFormElement = document.querySelector('.popup-container__form_edit');
const addFormElement = document.querySelector('.popup-container__form_add');
const elements = document.querySelector('.elements');
const imageOfPopupImage = popupImage.querySelector('.popup-container-image__image');
const headingOfPopupImage = popupImage.querySelector('.popup-container-image__heading');

  
let esc = null;

const openPopup = (popupToOpen) => {
  popupToOpen.classList.add('popup_opened');
  esc = (evt) => closePopupOnEsc(evt, popupToOpen);
  document.addEventListener('keydown', esc);
  addFormValidator.resetValidation();
};

const openPopupImage = (imageSrc, imageHeading) => {
  imageOfPopupImage.src = imageSrc;
  headingOfPopupImage.textContent = imageHeading;
  imageOfPopupImage.alt = imageHeading;
  openPopup(popupImage);
};

const closePopupOnEsc = (evt, popupToClose) => {
  if (evt.key === "Escape") {
    closePopup(popupToClose);
  }
};

const closePopupByClick = (evt, popup) => {
  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-icon')) {
    closePopup(popup);
  }
};

const closePopup = (popupToClose) => {
  popupToClose.classList.remove('popup_opened');
  document.removeEventListener('keydown', esc);
  esc = null;
};

const openProfilePopup = () => {
  openPopup(popupEdit);
  nameInput.value = namePlace.textContent;
  jobInput.value = jobPlace.textContent;
  editFormValidator.resetValidation();
};

const editFormSubmitHandler = () => {
  namePlace.textContent = nameInput.value;
  jobPlace.textContent = jobInput.value;
  
  closePopup(popupEdit);
};

const newCard = (headingValue, linkValue) => {
  return new Card(headingValue, linkValue, '#card-template', openPopupImage);
}

const addFormSubmitHandler = (evt) => {
  const card = newCard(headingInput.value, linkInput.value);
  elements.prepend(card.createCard());
  
  closePopup(popupAdd);
};

initialCards.forEach(elem => {
  const card = newCard(elem.name, elem.link);
  elements.append(card.createCard());
});

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(config, addFormElement);
addFormValidator.enableValidation();

editButton.addEventListener('click', () => {
  openProfilePopup();
});

addButton.addEventListener('click', () => {
  headingInput.value = '';
  linkInput.value = '';
  openPopup(popupAdd);
});

popupEdit.addEventListener('click', (evt) => {
  closePopupByClick(evt, popupEdit);
});

popupAdd.addEventListener('click', (evt) => {
  closePopupByClick(evt, popupAdd);
});

popupImage.addEventListener('click', (evt) => {
  closePopupByClick(evt, popupImage);
});

editFormElement.addEventListener('submit', editFormSubmitHandler);
addFormElement.addEventListener('submit', addFormSubmitHandler);