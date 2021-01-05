export default class Card {
  constructor(item, templateSelector, handleCardClick) {
    this._item = item;
    this._cardTemplate = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardTemplate)
      .content
      .children[0]
      .cloneNode(true);
  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', this._handleLikeClick.bind(this));
  
    this._element.querySelector('.card__delete').addEventListener('click', this._handleDeleteItemClick.bind(this));

    this._element.querySelector('.card__image').addEventListener('click', this._handleCardClick);
  }

  _handleLikeClick() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _handleDeleteItemClick() {
    this._element.remove();
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const cardImage = this._element.querySelector('.card__image');

    this._element.querySelector('.card__heading').textContent = this._item.name;
    cardImage.src = this._item.link;
    cardImage.alt = this._item.name;

    return this._element;
  }
};