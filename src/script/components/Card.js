export default class Card {
  constructor(item, templateSelector, userId, {handleCardClick, handleLikeClick}) {
    this._item = item;
    this._cardTemplate = templateSelector;
    this._userId = userId;
    // this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    // this._handleDeleteClick = handleDeleteClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardTemplate)
      .content
      .children[0]
      .cloneNode(true);
  }

  _setEventListeners() {
    this._cardLike.addEventListener('click', () => {
      this._handleLikeClick();
    });
  
    this._element.querySelector('.card__delete').addEventListener('click', this._handleDeleteItemClick.bind(this));

    this._cardImage.addEventListener('click', this._handleCardClick);
  }

  // _toggleLikeColor() {
  //   this._cardLike.classList.toggle('card__like_active');
  // }

  _handleDeleteItemClick() {
    this._element.remove();
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._cardLike = this._element.querySelector('.card__like');
    this._likesCounter = this._element.querySelector('.card__like-counter');

    this._setEventListeners();

    this._element.querySelector('.card__heading').textContent = this._item.name;
    this._cardImage.src = this._item.link;
    this._cardImage.alt = this._item.name;
    this.setLikes(this._item.likes);

    return this._element;
  }

  setLikes(likes) {
    //метод принимает данные лайков карточки и обновляет отображение карточки. 
    //Он используется при первой отрисовке карточки и при ответе сервера на установку и снятие лайка
    this._likesCounter.textContent = likes.length;

    if (Object.values(likes).some(like => like._id === "cf1634825f33decb2b0a89b7")) {
      console.log('u like this');
      this._cardLike.classList.add('card__like_active');
    };
  }
};