export * from "./components/01-Barebone";
export * from "./components/02-ShadowDOM";
export * from "./components/03-Attributes";
export * from "./components/04-Slots";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <h2>Implemented in TypeScript</h2>
    <ui-barebone></ui-barebone>
    <ui-shadow-dom></ui-shadow-dom>
    <ui-attributes width="600"></ui-attributes>
    <ui-slots></ui-slots>
`;
