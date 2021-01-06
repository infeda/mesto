import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor ({popupSelector, submitForm}, resetValidation) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._resetValidation = resetValidation;
  }

  _getInputValues () {
      return Array.from(this._popup.querySelectorAll('.popup-container__form-item')).map(elem => elem.value);
  }

  setEventListeners () {
    
    this._submit = () => {
      this._submitForm(this._getInputValues());
      this.close();
    }

    this._popup.addEventListener('submit', this._submit);
    super.setEventListeners();
  };

  open () {
    this._resetValidation();
    super.open();
  }

  close () {
    this._resetValidation();

    super.close();
    this._popup.removeEventListener('submit', this._submit);
  }
}