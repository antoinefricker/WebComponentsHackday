export class Barebone extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<p style="text-decoration: underline;">Barebone component</p>`;
  }

  connectedCallback() {
    console.log("Barebone added to the DOM");
  }
}

customElements.define("ui-barebone", Barebone);
