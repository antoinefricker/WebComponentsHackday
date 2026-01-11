export class Barebone extends HTMLElement {
  constructor() {
    super();

    this.textContent = "Barebone component";
  }

  connectedCallback() {
    console.log("Barebone added to the DOM");
  }
}

customElements.define("ui-barebone", Barebone);
