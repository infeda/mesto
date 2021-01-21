import Popup from './Popup.js';

export default class PopupConfirm extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._handleSubmitCallback = null;
    this._button = this._popup.querySelector('.popup-container__submit-button');
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }

  setEventListeners() {
    this._button.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });

    super.setEventListeners();
  }
}