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


const editForm = {
  heading: 'Редактировать профиль',
  button: 'Сохранить',
  nameInputPlaceholder: 'Введите своё имя',
  linkInputPlaceholder: 'Введите описание',
};

const addForm = {
  heading: 'Новое место',
  button: 'Создать',
  nameInputPlaceholder: 'Название',
  linkInputPlaceholder: 'Ссылка на картинку',
};

let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let closeEditPopup = document.querySelector('.popup-container__close-button_popup_edit');
let closeImagePopup = document.querySelector('.popup-container__close-button_popup_image');
let submitButton = document.querySelector('.popup-container__submit-button');
let popup = document.querySelector('.popup_info');
let popupImage = document.querySelector('.popup_image');
let nameInput = document.querySelector('.popup-container__form-item_el_name');
let jobInput = document.querySelector('.popup-container__form-item_el_text');
let namePlace = document.querySelector('.profile__header');
let jobPlace = document.querySelector('.profile__subheader');
let popupHeading = document.querySelector('.popup-container__heading');
let formElement = document.querySelector('.popup-container__form');


initialCards.forEach(function (elem) {
    const elements = document.querySelector('.elements');
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    
    cardElement.querySelector('.card__heading').textContent = elem.name;
    cardElement.querySelector('.card__image').src = elem.link;

    cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
      evt.target.classList.toggle('card__like_active');
    });

    cardElement.querySelector('.card__delete').addEventListener('click', function(evt) {
      evt.target.parentElement.remove();
    });

    cardElement.querySelector('.card__image').addEventListener('click', function() {
      openPopupImage(elem.link);
    });

    elements.prepend(cardElement);
});

function openPopupImage(imageSrc) {
  popupImage.classList.add('popup_opened');
  popupImage.querySelector('.popup-container-image__image').src = imageSrc;
}

function openPopup(obj, a, b, handler) {
  popup.classList.add('popup_opened');

  popupHeading.textContent = obj.heading;
  submitButton.textContent = obj.button;

  nameInput.value = a;
  jobInput.value = b;
  
  nameInput.setAttribute('placeholder', obj.nameInputPlaceholder);
  jobInput.setAttribute('placeholder', obj.linkInputPlaceholder);

  formElement.addEventListener('submit', handler);
}

function closePopup() {
  popup.classList.remove('popup_opened');
  popupImage.classList.remove('popup_opened');
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();

  let nameValue = nameInput.value;
  let jobValue = jobInput.value;

  namePlace.textContent = nameValue;
  jobPlace.textContent = jobValue;
  
  formElement.removeEventListener('submit', editFormSubmitHandler);
  closePopup();
}

function addFormSubmitHandler(evt) {
  evt.preventDefault();

  const elements = document.querySelector('.elements');
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);
  
  cardElement.querySelector('.card__heading').textContent = nameInput.value;
  cardElement.querySelector('.card__image').src = jobInput.value;

  elements.prepend(cardElement);
  formElement.removeEventListener('submit', addFormSubmitHandler);
  closePopup();
}



editButton.addEventListener('click', function (evt) {
  openPopup(editForm, namePlace.textContent, jobPlace.textContent, editFormSubmitHandler);
});

addButton.addEventListener('click', function (evt) {
  openPopup(addForm, '', '', addFormSubmitHandler);  
});

closeEditPopup.addEventListener('click', closePopup);
closeImagePopup.addEventListener('click', closePopup);