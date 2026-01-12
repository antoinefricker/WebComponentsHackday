import { Colors } from "../utils/Colors";
import { Parser } from "../utils/Parser";

const template = document.createElement("template");
template.innerHTML = `
<h3>Handle attributes</h3>
<span class="swatch-block"></span>
<span class="swatch-label"></span>
<br />
`;

const COMPONENTS_ATTRIBUTES = ["color"] as const;

export class HandleAttributes extends HTMLElement {
  private _swatchBlock: HTMLSpanElement;
  private _swatchLabel: HTMLSpanElement;

  private _color: string = "#FF3366";

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));

    this._swatchBlock = shadow.querySelector("span.swatch-block")!;
    this._swatchLabel = shadow.querySelector("span.swatch-label")!;
  }

  connectedCallback() {
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
    this._swatchBlock.style.display = "inline-block";
    this._swatchBlock.style.height = "0.6rem";
    this._swatchBlock.style.width = "0.6rem";
    this._swatchBlock.style.border = "4px solid #eeeeee";
    this._swatchBlock.style.borderRadius = "2px";
    this._swatchBlock.style.outline = "1px solid #333333";

    this._swatchBlock.style.backgroundColor = this._color;
    this._swatchBlock.style.color = Colors.getContrastColor(this._color);

    this._swatchLabel.textContent = `Color: ${this._color}`;
  }

  static get observedAttributes() {
    return COMPONENTS_ATTRIBUTES;
  }
}

customElements.define("ui-handle-attributes", HandleAttributes);
