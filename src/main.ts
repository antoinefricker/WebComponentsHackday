export * from "./components/01-Barebone";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div>
        <h2>Implemented in TS</h2>
        <ui-barebone></ui-barebone>
    </div>
`;
