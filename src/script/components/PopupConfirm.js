import Popup from './Popup.js';

export default class PopupConfirm extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
    this._popup.querySelector('.popup-container__submit-button').addEventListener('click', this._handleSubmitCallback);
  }
}