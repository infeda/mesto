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
const closeEditPopup = document.querySelector('.popup__close-button_popup_edit');
const closeAddPopup = document.querySelector('.popup__close-button_popup_add');
const closeImagePopup = document.querySelector('.popup__close-button_popup_image');
const popups = document.querySelectorAll('.popup');
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

const createCard = (elem) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  
  cardElement.querySelector('.card__heading').textContent = elem.name;
  cardImage.src = elem.link;
  cardImage.setAttribute('alt', elem.name);

  cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');
  });

  cardElement.querySelector('.card__delete').addEventListener('click', function(evt) {
    evt.target.parentElement.remove();
  });

  cardImage.addEventListener('click', function() {
    openPopupImage(elem.link, elem.name);
  });

  return cardElement;
};

const closePopupOnEsc = (evt, popupToClose) => {
  if (evt.key === "Escape") {
    closePopup(popupToClose);
  };
};

const closePopupByClick = (evt, popup) => {
  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-icon')) {
    closePopup(popup);
    if (popup.classList.contains('popup_add')) {
      headingInput.value = '';
      linkInput.value = '';
    };
  };
};

const openPopup = (popupToOpen) => {
  popupToOpen.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => {
    closePopupOnEsc(evt, popupToOpen);
  });
};

const closePopup = (popupToClose) => {
  popupToClose.classList.remove('popup_opened');
  document.removeEventListener('keydown', (evt) => {
    closePopupOnEsc(evt, popupToClose);
  });
};

const openPopupImage = (imageSrc, imageHeading) => {
  openPopup(popupImage);
  imageOfPopupImage.src = imageSrc;
  headingOfPopupImage.textContent = imageHeading;
  imageOfPopupImage.alt = imageHeading;
};

const openProfilePopup = () => {
  openPopup(popupEdit);
  nameInput.value = namePlace.textContent;
  jobInput.value = jobPlace.textContent;
  resetValidation(popupEdit, config);
};

const editFormSubmitHandler = (evt) => {
  evt.preventDefault();

  namePlace.textContent = nameInput.value;
  jobPlace.textContent = jobInput.value;
  
  closePopup(popupEdit);
};

const addFormSubmitHandler = (evt) => {
  evt.preventDefault();

  const cardInfo = {
    name: headingInput.value,
    link: linkInput.value
  };

  elements.prepend(createCard(cardInfo));
  
  headingInput.value = '';
  linkInput.value = '';
  
  closePopup(popupAdd);
};

initialCards.forEach(elem => elements.append(createCard(elem)) );

enableValidation(config);

editButton.addEventListener('click', () => {
  openProfilePopup();
});
addButton.addEventListener('click', () => {
  openPopup(popupAdd);
  resetValidation(popupAdd, config);
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
