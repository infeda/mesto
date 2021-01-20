export default class Card {
  constructor(item, templateSelector, userId, {handleCardClick, handleLikeClick, handleDeleteLikeClick, handleDeleteClick}) {
    this._item = item;
    this._cardTemplate = templateSelector;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteLikeClick = handleDeleteLikeClick;
    this._handleDeleteClick = handleDeleteClick;
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
      if (!this._cardLike.classList.contains('card__like_active')) {
        this._handleLikeClick();
      } else {
        this._handleDeleteLikeClick();
      }
    });
  
    this._element.querySelector('.card__delete').addEventListener('click', () => this._handleDeleteClick(this._item._id, this._element));

    this._cardImage.addEventListener('click', this._handleCardClick);
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
    this.setDeleteButton();

    return this._element;
  }

  _isLiked() {
    this._cardLike.classList.contains('card__like_active') ? true : false;
  }

  setLikes(likes) {
    this._likesCounter.textContent = likes.length;

    if (Object.values(likes).some(like => like._id === this._userId)) {
      this._cardLike.classList.add('card__like_active');
    } else {
      this._cardLike.classList.remove('card__like_active');
    }
  }

  setDeleteButton() {
    if(!(this._item.owner._id === this._userId)) {
      this._element.querySelector('.card__delete').classList.add('card__delete_invisible');
    }
  }
};