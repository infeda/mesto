import { initialCards } from "../constants";

export default class Section {
  constructor ({ renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderElements (initialItems) {
    this._initialItems = initialItems;
    this._initialItems.forEach(item => {
      this._renderer(item);
    });
  }

  addItem (item) {
    this._container.prepend(item);
  }
}