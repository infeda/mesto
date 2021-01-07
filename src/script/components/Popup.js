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

  _handleClickClose (evt) {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-icon')) {
      this.close.bind(this)();
    }
  }

  setEventListeners () {
    document.addEventListener('keydown', evt => this._handleEscClose.bind(this)(evt));
    this._popup.addEventListener('click', evt => this._handleClickClose.bind(this)(evt));
  }
}