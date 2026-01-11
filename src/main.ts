export * from "./components/01-Barebone";
export * from "./components/02-ShadowDOM";
export * from "./components/03-Attributes";
export * from "./components/04-Slots";
export * from "./components/05-Styling";
export * from "./components/06-ThemeWrapper";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <h2>Implemented in TypeScript</h2>
    <ui-barebone></ui-barebone>
    <ui-shadow-dom></ui-shadow-dom>
    <ui-attributes width="600"></ui-attributes>
    <ui-slots></ui-slots>
    <ui-styling></ui-styling>
    <ui-theme-wrapper primary-color="#FF3366">
      <ui-styling></ui-styling>
    </ui-theme-wrapper>
`;
