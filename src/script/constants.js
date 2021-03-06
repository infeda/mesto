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

const config = {
  formSelector: '.popup-container__form',
  inputSelector: '.popup-container__form-item',
  submitButtonSelector: '.popup-container__submit-button',
  inactiveButtonClass: 'popup-container__submit-button_inactive',
  inputErrorClass: 'popup-container__form-item_type_error',
  errorClass: 'popup-container__form-item-error-active',
  invalidInputClass: 'popup-container__form-item_invalid'
};

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editAvatarButton = document.querySelector('.profile__avatar-container');
const nameInput = document.querySelector('.popup-container__form-item_el_name');
const jobInput = document.querySelector('.popup-container__form-item_el_text');
const editFormElement = document.querySelector('.popup-container__form_edit');
const addFormElement = document.querySelector('.popup-container__form_add');
const editAvatarFormElement = document.querySelector('.popup-container__form_edit-avatar');

  
export {config, editButton, addButton, nameInput, jobInput, editFormElement, addFormElement, editAvatarFormElement, editAvatarButton };