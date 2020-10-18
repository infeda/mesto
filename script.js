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