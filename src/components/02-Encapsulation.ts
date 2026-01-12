const getComponentNode = (subtitle: string): Node => {
  const template = document.createElement("template");
  template.innerHTML = `
        <h3>Encapsulation: ${subtitle}</h3>
        <p>Click on the component to see event propagation through the component shadow DOM.</p>
        <ul></ul>
    `;
  return template.content.cloneNode(true);
};

export class EncapsulationOpenedShadow extends HTMLElement {
  constructor(
    subtitle: string = "Opened shadow DOM",
    shadowMode: "open" | "closed" = "open"
  ) {
    super();

    this.initialize(subtitle, shadowMode);
  }

  protected initialize(subtitle: string, shadowMode: "open" | "closed"): void {
    const shadow = this.attachShadow({ mode: shadowMode });
    shadow.appendChild(getComponentNode(subtitle));

    document
      .querySelector("html")!
      .addEventListener("click", (event: MouseEvent) => {
        if (!this.contains(event.target as Node)) {
          return;
        }

        shadow.querySelector("ul")!.innerHTML = event
          .composedPath()
          .map((node) => {
            return `<li>${node.constructor.name}</li>`;
          })
          .join("");
      });
  }
}

customElements.define(
  "ui-encapsulation-opened-shadow",
  EncapsulationOpenedShadow
);

export class EncapsulationClosedShadow extends EncapsulationOpenedShadow {
  constructor() {
    super("Closed shadow DOM", "closed");
  }
}

customElements.define(
  "ui-encapsulation-closed-shadow",
  EncapsulationClosedShadow
);
