import './index.css';
import Card from '../script/components/Card.js';
import FormValidator from '../script/components/FormValidator.js';
import { config, editButton, addButton, nameInput, jobInput, editFormElement, addFormElement } from '../script/constants.js'; 
import Section from '../script/components/Section.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import PopupWithForm from '../script/components/PopupWithForm.js';
import UserInfo from '../script/components/UserInfo.js';
import Api from '../script/components/Api.js'


// function getInitialCards() {
//   fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards', {
//    headers: {
//     authorization: '45595d98-1f05-41ff-b759-a22d91a48b67'
//     }
//   })
//     .then(res => res.json())
//     .then((result) => {
//       console.log(result);
//     });
// } 

// getInitialCards();

// function getUserInfo() {
//   fetch('https://mesto.nomoreparties.co/v1/cohort-19/users/me', {
//     headers: {
//       authorization: '45595d98-1f05-41ff-b759-a22d91a48b67',
//       // 'Content-Type': 
//       }
//     })
//       .then(res => res.json())
//       .then((result) => {
//         console.log(result);
//       });
// }

// getUserInfo();

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
    renderer: (item) => {
      const cardElement = createCard(item);
      cardsSection.addItem(cardElement);
    }
  },
  '.elements'
);

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-19', '45595d98-1f05-41ff-b759-a22d91a48b67');
api.getUserInfo()
  .then(res => {
    user.setUserInfo([res.name, res.about]);
    user.setAvatar(res.avatar, '.profile__avatar');
  }) 
  .catch(err => {
    console.log(err);
  });

api.getInitialCards()
  .then(initialCards => {
    console.log(initialCards);
    cardsSection.renderElements(initialCards);
  })

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