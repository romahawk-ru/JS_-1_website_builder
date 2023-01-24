export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }
  render(model) {
    this.$el.innerHTML = ''
    model.forEach(block => {
      // const toHTML = templates[block.type];
      this.$el.insertAdjacentHTML('beforeend', block.toHTML());
    })
  }
}
