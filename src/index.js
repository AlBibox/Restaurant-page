import {pageLoad, descriptionTab} from "./modules/page-load";
import {menuTab} from "./modules/menu-page";
import {contactTab} from "./modules/contact-page";

pageLoad();

function navEvents(){
    const boxTabs = document.querySelector(".boxTabs");
    const item1 = document.querySelector(".item1");
    const item2 = document.querySelector(".item2");
    const item3 = document.querySelector(".item3");

    //LOAD TAB 1
    item1.addEventListener("click", () => {
        boxTabs.removeChild(boxTabs.childNodes[0]);
        boxTabs.appendChild(descriptionTab());
    });

    //LOAD TAB 2
    item2.addEventListener("click", () => {
        boxTabs.removeChild(boxTabs.childNodes[0]);
        boxTabs.appendChild(menuTab());
    });

    //LOAD TAB 3
    item3.addEventListener("click", () => {
        boxTabs.removeChild(boxTabs.childNodes[0]);
        boxTabs.appendChild(contactTab());
    });
}

navEvents();