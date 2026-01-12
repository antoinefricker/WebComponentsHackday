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
        <h3>Use a JSX template with WebJSX</h3>
        <p>That is much more convenient.</p>
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
