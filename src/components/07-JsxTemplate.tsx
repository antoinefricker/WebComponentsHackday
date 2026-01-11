import * as webjsx from "webjsx";

export class WebJSXComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const vdom = (
      <>
        <p style="text-decoration: underline;">WebJSX component</p>
        <p>Template is set with WebJSX</p>
        <ul>
          {[1, 2, 3].map((num) => (
            <li key={num}>Item {num}</li>
          ))}
        </ul>
      </>
    );
    webjsx.applyDiff(this, vdom);
  }
}

customElements.define("ui-webjsx-component", WebJSXComponent);
