export default class Popup {
  constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open () {
    this.setEventListeners();
    this._popup.classList.add('popup_opened');
  }

  close () {
    document.removeEventListener('keydown', evt => this._handleEscClose(evt));
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose (evt) {
    evt.key === 'Escape' && this.close();
  }

  setEventListeners () {
    document.addEventListener('keydown', evt => this._handleEscClose(evt));
    this._popup.querySelector('.popup__close-button').addEventListener('click', this.close.bind(this));
  }
}