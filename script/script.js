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
    openPopupImage(elem.link, elem.name);
  });

  return cardElement;
};

const openPopup = (popupToOpen) => {
  popupToOpen.classList.add('popup_opened');
};

const closePopup = (popupToClose) => {
  popupToClose.classList.remove('popup_opened');
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
};

const editFormSubmitHandler = (evt) => {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  namePlace.textContent = nameValue;
  jobPlace.textContent = jobValue;
  
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


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add('popup-container__form-item_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup-container__form-item-error-active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove('popup-container__form-item_type_error');
  errorElement.classList.remove('popup-container__form-item-error-active');
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  };
};

const hasInvalidInput = (inputList) => {
  return inputList.some( (inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup-container__submit-button_inactive');
  } else {
    buttonElement.classList.remove('popup-container__submit-button_inactive');
  };
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup-container__form-item'));
  const buttonElement = formElement.querySelector('.popup-container__submit-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup-container__form'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};


initialCards.forEach(elem => elements.append(createCard(elem)) );

enableValidation();

editButton.addEventListener('click', () => {
  openProfilePopup();
});
addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});
closeEditPopup.addEventListener('click', () => {
  closePopup(popupEdit);
});
closeAddPopup.addEventListener('click', () => {
  closePopup(popupAdd);
  headingInput.value = '';
  linkInput.value = '';
});

closeImagePopup.addEventListener('click', () => {
  closePopup(popupImage);
});

editFormElement.addEventListener('submit', editFormSubmitHandler);
addFormElement.addEventListener('submit', addFormSubmitHandler);

popups.forEach( (popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    };
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === "Escape") {
      closePopup(popup);
    };
  });
});

