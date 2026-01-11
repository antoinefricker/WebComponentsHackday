const template = document.createElement("template");
template.innerHTML = `<p style="text-decoration: underline;">ShadowDOM component</p>`;

export class ShadowDOM extends HTMLElement {
  private shadow: ShadowRoot;

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log("ShadowDOM added to the DOM");
  }
}

customElements.define("ui-shadow-dom", ShadowDOM);
