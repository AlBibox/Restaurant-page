function createBackground() {
    const background = document.createElement("img");
    background.src = "IMG/bg.jpg";
    background.classList.add("background");

    return background;
}

function createHeadline() {
    const headline = document.createElement("div");
    const title = document.createElement("h1");

    headline.classList.add("headline");
    title.textContent = "MILLIWAYS";
    headline.appendChild(title);

    return headline;
}



function createNavigation(){
    const navbarWrapper = document.createElement("div");
    const navbar = document.createElement("ul");
    const elementCount = 3;
    navbarWrapper.classList.add("navbarWrapper");

    for(let i = 0; i < elementCount; i++){
        const element = document.createElement("li");
        const voice = document.createElement("p");
        const selector = document.createElement("span");

        if(i == 0){
            element.classList.add("selected");
            element.classList.add("item1");
            voice.textContent = "HOME";
        }else if (i == 1){
            element.classList.add("item2");
            voice.textContent = "THE MENU";
        }else{
            element.classList.add("item3");
            voice.textContent = "CONTACT US";
        }       
        element.append(voice, selector);
        navbar.appendChild(element);
    }  
    navbarWrapper.appendChild(navbar);

    return navbarWrapper;
}

function descriptionTab() {
    const descriptionWrapper = document.createElement("div");
    const description = document.createElement("h2");

    descriptionWrapper.classList.add("descriptionWrapper");
    description.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    descriptionWrapper.appendChild(description);

    return descriptionWrapper;
}

function createFooter(){
    const footer = document.createElement("div");
    const text = document.createElement("p");
    
    text.textContent = "© 2020 - Alberto Benedetto";
    footer.appendChild(text);
    footer.classList.add("footer");

    return footer;
}


const pageLoad = () => {
    const content = document.querySelector("#content");
    const boxTabs = document.createElement("div");
    boxTabs.classList.add("boxTabs");

    boxTabs.appendChild(descriptionTab());
    content.append(createBackground(), createHeadline(), createNavigation(), boxTabs, createFooter());
   
    
    //MENU SELECTOR ANIMATION
    const items = document.querySelectorAll("li");
    items.forEach(item => item.addEventListener("click", () => {
        items.forEach(e => e.classList.remove("selected"));
        item.classList.add("selected");
    }));
}

export {pageLoad, descriptionTab}

