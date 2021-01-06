export default class Section {
  constructor ({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
    this._renderedItems = items;
  }

  renderElements () {
    this._renderedItems.forEach(item => this._renderer(item));
  }

  addItem (item) {
    this._container.prepend(item);
  }
}