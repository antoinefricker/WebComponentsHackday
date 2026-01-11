import { Colors } from "../utils/Colors";
import { Parser } from "../utils/Parser";

const template = document.createElement("template");
template.innerHTML = `<p style="text-decoration: underline;">Attributes component</p>`;

const COMPONENTS_ATTRIBUTES = ["color"] as const;

export class Attributes extends HTMLElement {
  private _shadow: ShadowRoot;
  private _root: HTMLSpanElement;

  private _color: string = "#FF3366";

  constructor() {
    super();

    this._shadow = this.attachShadow({ mode: "open" });
    this._shadow.appendChild(template.content.cloneNode(true));

    this._root = this._shadow.querySelector("p")!;
  }

  connectedCallback() {
    console.log("Attributes added to the DOM");
    this.update();
  }

  attributeChangedCallback(
    name: (typeof COMPONENTS_ATTRIBUTES)[number],
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    console.log(`${name} changed from ${oldValue} to ${newValue}`);
    switch (name) {
      case "color":
        this._color = Parser.toHexColor(newValue, "#FF0000");
        break;
      default:
        console.warn(`Invalid attribute name: ${name}`);
        return;
    }
    this.update();
  }

  update(): void {
    this._root.style.padding = "4px";
    this._root.style.backgroundColor = this._color;
    this._root.style.color = Colors.getContrastColor(this._color);
  }

  static get observedAttributes() {
    return COMPONENTS_ATTRIBUTES;
  }
}

customElements.define("ui-attributes", Attributes);
