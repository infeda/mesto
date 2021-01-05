import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor ({popupSelector, submitForm}, resetValidation) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._resetValidation = resetValidation;
  }

  _getInputValues () {
    return [
      this._popup.querySelector('.popup-container__form-item_el_name').value, 
      this._popup.querySelector('.popup-container__form-item_el_text').value
    ]
  }

  setEventListeners () {
    this._popup.addEventListener('submit', () => {
      const [firstInputValue, secondInputValue] = this._getInputValues();
      this._submitForm(firstInputValue, secondInputValue);
      this.close();
    });
    super.setEventListeners();
  };

  close () {
    super.close();
    this._resetValidation();
  }
}