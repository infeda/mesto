import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor (data, popupSelector) {
    super(popupSelector);
    this._imageLink = data.link;
    this._imageName = data.name;
  }

  open () {
    this._popup.querySelector('.popup-container-image__image').src = this._imageLink;
    this._popup.querySelector('.popup-container-image__heading').textContent = this._imageName;
    this._popup.querySelector('.popup-container-image__heading').alt = this._imageName;
    
    super.open();
  };
}
