import './index.css';
import Card from '../script/components/Card.js';
import FormValidator from '../script/components/FormValidator.js';
import { initialCards, config, editButton, addButton, nameInput, jobInput, editFormElement, addFormElement } from '../script/constants.js'; 
import Section from '../script/components/Section.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import PopupWithForm from '../script/components/PopupWithForm.js';
import UserInfo from '../script/components/UserInfo.js';

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(config, addFormElement);
addFormValidator.enableValidation();

const user = new UserInfo('.profile__header', '.profile__subheader');

const popupWithImage = new PopupWithImage('.popup_image');
popupWithImage.setEventListeners();

function createCard(item) {
  const card = new Card(item, '#card-template', () => { popupWithImage.open(item) });
  const cardElement = card.createCard();
  return cardElement;
}

const cardsSection = new Section(
  {
    initialItems: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardsSection.addItem(cardElement);
    }
  },
  '.elements'
);

const editFormPopup = new PopupWithForm (
  {
    popupSelector: '.popup_edit',
    submitForm: (values) => 
      {
        user.setUserInfo(values);
      }
  },
    () => { editFormValidator.resetValidation() }
);

editFormPopup.setEventListeners();

const addFormPopup = new PopupWithForm (
  {
    popupSelector: '.popup_add',
    submitForm: (arr) => {
      const item = {
        name: arr[0],
        link: arr[1]
      };
      const cardElement = createCard(item);
      cardsSection.addItem(cardElement);
    }
  },
  () => { addFormValidator.resetValidation() }
);

addFormPopup.setEventListeners();

cardsSection.renderElements();

editButton.addEventListener('click', () => {
  [nameInput.value, jobInput.value] = user.getUserInfo();
  editFormPopup.open();
});

addButton.addEventListener('click', () => {
  addFormPopup.open();
});