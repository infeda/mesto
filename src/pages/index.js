import './index.css';
import Card from '../script/components/Card.js';
import FormValidator from '../script/components/FormValidator.js';
import { config, editButton, addButton, nameInput, jobInput, editFormElement, addFormElement, editAvatarFormElement, editAvatarButton } from '../script/constants.js'; 
import Section from '../script/components/Section.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import PopupWithForm from '../script/components/PopupWithForm.js';
import PopupConfirm from '../script/components/PopupConfirm.js';
import UserInfo from '../script/components/UserInfo.js';
import Api from '../script/components/Api.js';

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(config, addFormElement);
addFormValidator.enableValidation();

const editAvatarFormValidator = new FormValidator(config, editAvatarFormElement);
editAvatarFormValidator.enableValidation();

const user = new UserInfo('.profile__header', '.profile__subheader');

const popupWithImage = new PopupWithImage('.popup_image');
popupWithImage.setEventListeners();

const popupConfirm = new PopupConfirm('.popup_delete');
popupConfirm.setEventListeners();

function createCard(item) {
  const card = new Card(item, '#card-template', 'cf1634825f33decb2b0a89b7', {
    handleCardClick: () => { popupWithImage.open(item) },
    handleLikeClick: () => {
      api.likeCard(item._id)
        .then(cardInfo => {
          card.setLikes(cardInfo.likes);
        })
      },
    handleDeleteLikeClick: () => {
      api.deleteLikeCard(item._id)
        .then(cardInfo => {
          card.setLikes(cardInfo.likes);
        })
      },
    handleDeleteClick: (cardId, element) => {
      popupConfirm.setSubmitAction(() => {
        api.deleteCard(cardId)
          .then(() => {
            element.remove();
            popupConfirm.close();
          })
          .catch(err => console.log(err))
      });
      popupConfirm.open();
      }
  });
   
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
    cardsSection.renderElements(initialCards);
  });


const editFormPopup = new PopupWithForm (
  {
    popupSelector: '.popup_edit',
    submitForm: (values) => 
      {
        api.editUserInfo(values)
          .then(values => {
            user.setUserInfo(values);
          })
          .catch(err => {
            console.log(err);
          })
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
      
      api.addNewCard(item.name, item.link)
        .then(item => {
          const cardElement = createCard(item);
          cardsSection.addItem(cardElement);
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  () => { addFormValidator.resetValidation() }
);

addFormPopup.setEventListeners();

const editAvatarPopup = new PopupWithForm (
  {
    popupSelector: '.popup_edit-avatar',
    submitForm: (avatarLink) => {
      api.editAvatar(avatarLink[0])
        .then(res => {
          document.querySelector('.profile__avatar').src = res.avatar;
        })
        .catch(err => console.log(err));
    },
  },
  () => { editAvatarFormValidator.resetValidation() }
);

editAvatarPopup.setEventListeners();



editButton.addEventListener('click', () => {
  [nameInput.value, jobInput.value] = user.getUserInfo();
  editFormPopup.open();
});

addButton.addEventListener('click', () => {
  addFormPopup.open();
});

editAvatarButton.addEventListener('click', () => {
  editAvatarPopup.open();
});