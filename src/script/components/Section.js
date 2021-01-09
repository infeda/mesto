import { initialCards } from "../constants";

export default class Section {
  constructor ({initialItems, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
    this._initialItems = initialItems;
  }

  renderElements () {
    this._initialItems.forEach(item => {
      this._renderer(item);
    });
  }

  addItem (item) {
    this._container.prepend(item);
  }
}