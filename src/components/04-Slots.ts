const template = document.createElement("template");
template.innerHTML = `<div>
    <h3>Using slots</h3>
    <div>
        <slot></slot>
    </div>
    <p>
        A <slot name="shape">circle</slot> peg in a round hole
    </p>
</div>`;

export class Slots extends HTMLElement {
  private _shadow: ShadowRoot;

  constructor() {
    super();

    this._shadow = this.attachShadow({ mode: "open" });
    this._shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("ui-slots", Slots);
