const template = document.createElement("template");
template.innerHTML = `
    <p style="text-decoration: underline;">Styling component</p>
    <p>I can use a theme also such as <span class="highlight">here</span></p>

    <style>
        :host{
            .highlight {
                background-color: var(--primary-color, #d5a331);
                color: var(--primary-contrast-color, #000000);
                padding: 2px 4px;
                border-radius: 4px;
            }
        }
    </style>
`;

export class Styling extends HTMLElement {
  private shadow: ShadowRoot;

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log("Styling added to the DOM");
  }
}

customElements.define("ui-styling", Styling);
