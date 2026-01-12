export class Barebone extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<h3>Barebone implementation</h3>`;
  }

  connectedCallback() {
    console.log("Barebone added to the DOM");
  }
}

customElements.define("ui-barebone", Barebone);

const template = document.createElement("template");
template.innerHTML = `<h3>Barebone implementation: with template</h3>`;

export class BareboneWithTemplate extends HTMLElement {
  private _shadow: ShadowRoot;

  constructor() {
    super();

    this._shadow = this.attachShadow({ mode: "closed" });
    this._shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log("BareboneWithTemplate added to the DOM");
  }
}

customElements.define("ui-barebone-template", BareboneWithTemplate);
