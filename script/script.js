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
let formElement = document.querySelector('.popup-container__form');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup-container__form-item_el_name');
let jobInput = document.querySelector('.popup-container__form-item_el_text');
let namePlace = document.querySelector('.profile__header');
let jobPlace = document.querySelector('.profile__subheader');

let popupHeading = document.querySelector('.popup-container__heading');


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
}


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  // Получите значение полей из свойства value
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;

  // Вставьте новые значения с помощью textContent
  namePlace.textContent = nameValue;
  jobPlace.textContent = jobValue;
  closePopup();
}


editButton.addEventListener('click', function () {
  openPopup(editForm);
  nameInput.value = namePlace.textContent;
  jobInput.value = jobPlace.textContent;
});

addButton.addEventListener('click', function () {
  openPopup(addForm);
  nameInput.value = '';
  jobInput.value = '';
});

closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

