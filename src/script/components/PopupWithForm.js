import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor ({popupSelector, submitForm}, resetValidation) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._resetValidation = resetValidation;
    this._formElement = this._popup.querySelector('.popup-container__form');
    this._submitButton = this._popup.querySelector('.popup-container__submit-button');
  }

  _getInputValues () {
      return Array.from(this._popup.querySelectorAll('.popup-container__form-item')).map(elem => elem.value);
  }

  _renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Сохранение...';
    }
  }

  setEventListeners () {
    this._popup.addEventListener('submit', () => {
      this._renderLoading(true);
      this._submitForm(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  };

  open () {
    this._resetValidation();
    super.open();
  }

  close () {
    this._resetValidation();
    this._formElement.reset();

    super.close();
  }
}