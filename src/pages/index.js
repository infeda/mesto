import './index.css';
import Card from '../script/components/Card.js';
import FormValidator from '../script/components/FormValidator.js';
import { initialCards, config, editButton, addButton, nameInput, jobInput, headingInput, linkInput, editFormElement, addFormElement } from '../script/constants.js'; 
import Section from '../script/components/Section.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import PopupWithForm from '../script/components/PopupWithForm.js';
import UserInfo from '../script/components/UserInfo.js';

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(config, addFormElement);
addFormValidator.enableValidation();

const user = new UserInfo('.profile__header', '.profile__subheader');

const render = new Section(
  {
    renderer: (item) => {
      const popupWithImage = new PopupWithImage(item, '.popup_image');
      const card = new Card(item, '#card-template', () => { popupWithImage.open() });
      const cardElement = card.createCard();
      render.addItem(cardElement);
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

const addFormPopup = new PopupWithForm (
  {
    popupSelector: '.popup_add',
    submitForm: (arr) => {
      const item = {
        name: arr[0],
        link: arr[1]
      };
      render.renderElements(item);
    }
  },
  () => { addFormValidator.resetValidation() }
);

initialCards.forEach(item => {
  render.renderElements(item);
});

editButton.addEventListener('click', () => {
  [nameInput.value, jobInput.value] = user.getUserInfo();
  editFormPopup.open();
});

addButton.addEventListener('click', () => {
  headingInput.value = '';
  linkInput.value = '';
  addFormPopup.open();
});