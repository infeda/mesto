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
let closePopupButton = document.querySelector('.popup-container__close-icon');
let submitButton = document.querySelector('.popup-container__submit-button');
let popup = document.querySelector('.popup');
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

    elements.prepend(cardElement);
});

function openPopup(obj) {
  popup.classList.add('popup_opened');

  popupHeading.textContent = obj.heading;
  submitButton.textContent = obj.button;
  
  nameInput.setAttribute('placeholder', obj.nameInputPlaceholder);
  jobInput.setAttribute('placeholder', obj.linkInputPlaceholder);
}

function closePopup() {
  popup.classList.remove('popup_opened');
  formElement.classList.remove('popup-container__form-edit', 'popup-container__form-add');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function editFormSubmitHandler(evt) {
  evt.preventDefault(); 
  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  let nameValue = nameInput.value;
  let jobValue = jobInput.value;

  namePlace.textContent = nameValue;
  jobPlace.textContent = jobValue;
  
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
  closePopup();
}


editButton.addEventListener('click', function (evt) {
  openPopup(editForm);
  formElement.classList.add('popup-container__form-edit');
  let editFormElement = document.querySelector('.popup-container__form-edit');
  
  nameInput.value = namePlace.textContent;
  jobInput.value = jobPlace.textContent;
  editFormElement.addEventListener('submit', editFormSubmitHandler);
  console.log(formElement.classList);
});

addButton.addEventListener('click', function (evt) {
  formElement.classList.add('popup-container__form-add');
  let addFormElement = document.querySelector('.popup-container__form-add');
  openPopup(addForm);
  nameInput.value = '';
  jobInput.value = '';
  submitButton.setAttribute('name', 'add-submit-button');
  addFormElement.addEventListener('submit', addFormSubmitHandler);
  console.log(formElement.classList);
});

closePopupButton.addEventListener('click', closePopup);
// editFormElement.addEventListener('submit', editFormSubmitHandler);
// addFormElement.addEventListener('submit', addFormSubmitHandler);