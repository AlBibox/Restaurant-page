function descriptionTab() {
    const descriptionWrapper = document.createElement("div");
    const description = document.createElement("h2");

    descriptionWrapper.classList.add("descriptionWrapper");
    description.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    descriptionWrapper.appendChild(description);

    return descriptionWrapper;
}

export {descriptionTab}