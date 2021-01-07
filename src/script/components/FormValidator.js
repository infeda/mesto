export default class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._errors = this._formElement.querySelectorAll(this._inputErrorClass);
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });

    
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.resetValidation();
    });
  };

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
      inputElement.classList.add('popup-container__form-item_invalid');
    } else {
      this._hideInputError(inputElement);
      inputElement.classList.remove('popup-container__form-item_invalid');
    };
  };

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    };
  };

  _hasInvalidInput() {
    return this._inputList.some( (inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  resetValidation() {
    
    this._errors.forEach((error) => {
      error.classList.remove(this._errorClass);
      this._hideInputError(form, input);
    });
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      inputElement.classList.remove('popup-container__form-item_invalid');
    });
    this._toggleButtonState();
  };

  enableValidation() {
    this._setEventListeners();
  }
}