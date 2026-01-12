import { Colors } from "../utils/Colors";
import { Parser } from "../utils/Parser";

const COMPONENTS_ATTRIBUTES = ["primary-color"] as const;

const template = document.createElement("template");
template.innerHTML = `
<h3>ThemeWrapper component</h3>

<div class="wrapper">
    <slot></slot>
</div>
<style></style>
`;

export class ThemeWrapper extends HTMLElement {
  private _primaryColor: string = "#d5a331";

  private _shadow: ShadowRoot;
  private _styleElement: HTMLStyleElement;

  constructor() {
    super();

    this._shadow = this.attachShadow({ mode: "open" });
    this._shadow.appendChild(template.content.cloneNode(true));

    this._styleElement = this._shadow.querySelector("style")!;
  }

  connectedCallback() {
    console.log("Attributes added to the DOM");
    this.update();
  }

  attributeChangedCallback(
    name: (typeof COMPONENTS_ATTRIBUTES)[number],
    _oldValue: string | undefined,
    newValue: string | undefined
  ) {
    if (name === "primary-color") {
      this._primaryColor = Parser.toHexColor(newValue, "#d5a331");
      this.update();
      return;
    }
  }

  private update(): void {
    this._styleElement.textContent = `
        :host {
            --primary-color: ${this._primaryColor};
            --primary-contrast-color: ${Colors.getContrastColor(
              this._primaryColor
            )};
            display: block;
            border: 1px dotted #cccccc;
            padding: 0 16px; 
        }
    `;
  }

  static get observedAttributes() {
    return COMPONENTS_ATTRIBUTES;
  }
}

customElements.define("ui-theme-wrapper", ThemeWrapper);
