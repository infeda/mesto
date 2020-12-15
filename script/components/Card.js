export default class Card {
    constructor(name, url, templateSelector, openPopupImage) {
      this._imageUrl = url;
      this._cardName = name;
      this._cardTemplate = templateSelector;
  
      this._openPopupImage = openPopupImage;
    }
  
    _getTemplate() {
      return document
        .querySelector(this._cardTemplate)
        .content
        .children[0]
        .cloneNode(true);
    }
  
    _setEventListeners() {
      this._element.querySelector('.card__like').addEventListener('click', () => {
        this._handleLikeClick();
      });
    
      this._element.querySelector('.card__delete').addEventListener('click', () => {
        this._handleDeleteItemClick();
      });
  
      this._element.querySelector('.card__image').addEventListener('click', () => {
        this._handleImageClick();
      });
    }
  
    _handleLikeClick() {
      this._element.querySelector('.card__like').classList.toggle('card__like_active');
    }
  
    _handleDeleteItemClick() {
      this._element.remove();
    }
  
    _handleImageClick() {
      this._openPopupImage(this._imageUrl, this._cardName);
    }
  
    createCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      const cardImage = this._element.querySelector('.card__image');
  
      this._element.querySelector('.card__heading').textContent = this._cardName;
      cardImage.src = this._imageUrl;
      cardImage.alt = this._cardName;
  
      return this._element;
    }
  };