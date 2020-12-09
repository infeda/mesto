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

class Card {
  constructor(name, url, templateSelector, openPopupImage) {
    this._imageUrl = url;
    this._cardName = name;
    this._cardTemplate = templateSelector;

    this._openPopupImage = openPopupImage;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplate)
      .content
      .children[0]
      .cloneNode(true);

    this._element = cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
  
    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._handleDeleteItemClick();
    });

    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleImageClick();
    });
  }

  _handleLikeClick() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _handleDeleteItemClick() {
    this._element.querySelector('.card__delete').parentElement.remove();
  }

  _handleImageClick() {
    this._openPopupImage(this._imageUrl, this._cardName);
  }

  createCard() {
    this._getTemplate();
    this._setEventListeners();
    const cardImage = this._element.querySelector('.card__image');

    this._element.querySelector('.card__heading').textContent = this._cardName;
    cardImage.src = this._imageUrl;
    cardImage.setAttribute('alt', this._cardName);

    return this._element;
  }
};

const openPopup = (popupToOpen) => {
  popupToOpen.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => {
    closePopupOnEsc(evt, popupToOpen);
  });
};

const openPopupImage = (imageSrc, imageHeading) => {
  imageOfPopupImage.src = imageSrc;
  headingOfPopupImage.textContent = imageHeading;
  imageOfPopupImage.alt = imageHeading;
  openPopup(popupImage);
};

initialCards.forEach(elem => {
  const card = new Card(elem.name, elem.link, '#card-template', openPopupImage);
  elements.append(card.createCard());
});




const closePopupOnEsc = (evt, popupToClose) => {
  if (evt.key === "Escape") {
    closePopup(popupToClose);
  };
};

const closePopupByClick = (evt, popup) => {
  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-icon')) {
    closePopup(popup);
  };
};


const closePopup = (popupToClose) => {
  popupToClose.classList.remove('popup_opened');
  document.removeEventListener('keydown', (evt) => {
    closePopupOnEsc(evt, popupToClose);
  });
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
  
  closePopup(popupAdd);
};


enableValidation(config);

editButton.addEventListener('click', () => {
  openProfilePopup();
});

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
  headingInput.value = '';
  linkInput.value = '';
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
