function createContactUsBox(){
    const contactUs = document.createElement("div");
    for(let i = 0; i < 3; i++){
        const field = document.createElement("div");
        const icon = document.createElement("img");
        const text = document.createElement("span");
        if(i == 0){
            icon.src = "/dist/IMG/email.png";
            text.textContent = "mail@host.com";
        }else if(i == 1){
            icon.src = "/dist/IMG/phone.png";
            text.textContent = "+00 000 0000000";
        }else{
            icon.src = "/dist/IMG/geo.png";
            text.textContent = "Black Hole 34, Universe";
        }
        field.append(icon, text);
        contactUs.appendChild(field);
    } 
    contactUs.classList.add("contactUs");
    return contactUs;
}

function createSocialBox(){
    const social = document.createElement("div");
    for (let i = 0; i < 3; i++){
        const icon = document.createElement("img");
        if(i == 0){
            icon.src = "/dist/IMG/tripadvisor.png";
        }else if(i == 1){
            icon.src = "/dist/IMG/facebook.png";
        }else{
            icon.src = "/dist/IMG/instagram.png";
        }
        social.appendChild(icon);
    }
    social.classList.add("social");
    return social;
}


function contactTab(){
    const contactBox = document.createElement("div");
    contactBox.append(createContactUsBox(), createSocialBox());
    contactBox.classList.add("contactBox");

    return contactBox   
}

export {contactTab};