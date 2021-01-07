export default class Section {
  constructor ({ renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderElements (item) {
    this._renderer(item);
  }

  addItem (item) {
    this._container.prepend(item);
  }
}