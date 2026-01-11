export * from "./components/01-Barebone";
export * from "./components/02-ShadowDOM";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div>
        <h2>Implemented in TS</h2>
        <ui-barebone></ui-barebone>
        <ui-shadow-dom></ui-shadow-dom>
    </div>
`;
