import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup-container-image__image');
    this._popupHeading = this._popup.querySelector('.popup-container-image__heading');
  }

  open (data) {
    this._popupImage.src = data.link;
    this._popupHeading.textContent = data.name;
    this._popupHeading.alt = data.name;
    
    super.open();
  };
}
