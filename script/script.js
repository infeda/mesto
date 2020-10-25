let editButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup-container__close-icon');
let submitButton = document.querySelector('.popup-container__submit-button');
let formElement = document.querySelector('.popup-container__form');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup-container__form-item_el_name');
let jobInput = document.querySelector('.popup-container__form-item_el_text');
let namePlace = document.querySelector('.profile__header');
let jobPlace = document.querySelector('.profile__subheader');
console.log('hello');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = namePlace.textContent;
  jobInput.value = jobPlace.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
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

editButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
// submitButton.addEventListener('submit', closePopup);
formElement.addEventListener('submit', formSubmitHandler); 