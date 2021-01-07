import './index.css';
import Card from '../script/components/Card.js';
import FormValidator from '../script/components/FormValidator.js';
import { initialCards, config } from '../script/utils.js'; 
import Section from '../script/components/Section.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import PopupWithForm from '../script/components/PopupWithForm.js';
import UserInfo from '../script/components/UserInfo.js';

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const nameInput = document.querySelector('.popup-container__form-item_el_name');
const jobInput = document.querySelector('.popup-container__form-item_el_text');
const headingInput = document.querySelector('.popup-container__form-item_el_heading');
const linkInput = document.querySelector('.popup-container__form-item_el_link');
const editFormElement = document.querySelector('.popup-container__form_edit');
const addFormElement = document.querySelector('.popup-container__form_add');

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(config, addFormElement);
addFormValidator.enableValidation();

const user = new UserInfo('.profile__header', '.profile__subheader');

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
      const item = [];
      item[0] = {
        name: arr[0],
        link: arr[1]
      };
      const section = new Section(
        {
          items: item,
          renderer: (item) => {
            const popupWithImage = new PopupWithImage(item, '.popup_image');
            const card = new Card(item, '#card-template', () => { popupWithImage.open() });
            const cardElement = card.createCard();
            section.addItem(cardElement);
          }
        },
        '.elements'
      );
      section.renderElements();
    }
  },
  () => { addFormValidator.resetValidation() }
);

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const popupWithImage = new PopupWithImage(item, '.popup_image');
      const card = new Card(item, '#card-template', () => { popupWithImage.open() });
      const cardElement = card.createCard();
      cardList.addItem(cardElement);
    }
  },
  '.elements'
);

cardList.renderElements();

editButton.addEventListener('click', () => {
  [nameInput.value, jobInput.value] = user.getUserInfo();
  editFormPopup.open();
});

addButton.addEventListener('click', () => {
  headingInput.value = '';
  linkInput.value = '';
  addFormPopup.open();
});