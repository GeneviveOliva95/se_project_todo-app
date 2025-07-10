class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems() {
    this._data.forEach((items) => {
      this._renderer(items);
    });
  }

  addItem(element) {
    this._containerSelector.append(element);
  }
}

export default Section;
