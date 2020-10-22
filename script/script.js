let editButton = document.querySelector('.edit-button');
let closePopupButton = document.querySelector('.popup-container__close-icon');

let popup = document.querySelector('.popup');

function openPopup() {
  popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}

closePopupButton.addEventListener('click', closePopup);

let submitButton = document.querySelector('.form__submit-button');
submitButton.addEventListener('click', closePopup);

// Находим форму в DOM
let formElement = document.querySelector('.form');
  // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = document.querySelector('.form__item_el_name');
    // Воспользуйтесь инструментом .querySelector()
    let jobInput = document.querySelector('.form__item_el_text');
    // Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    let namePlace = document.querySelector('.profile__header');
    let jobPlace = document.querySelector('.profile__subheader');

    // Вставьте новые значения с помощью textContent
    namePlace.textContent = nameValue;
    jobPlace.textContent = jobValue;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 