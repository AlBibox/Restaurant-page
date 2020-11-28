function menuTab(){
    const menuBox = document.createElement("div");

    for(let i = 0; i < 2; i++){
        const column = document.createElement("div");
        
        for(let j = 0; j < 14; j++){
            let element = document.createElement("div");
            if(j == 0 || j == 7){
                let text = document.createElement("h2");

                text.textContent = "Title";
                element.appendChild(text);
                element.classList.add("title");
            }else{
                let dishName = document.createElement("p");
                let dishPrice = document.createElement("p");

                dishName.textContent = "Lorem Ipsum";
                dishPrice.textContent = "Price";
                element.append(dishName, dishPrice);
                element.classList.add("dish");
            }
            column.appendChild(element);
            column.classList.add("column");
        }
        menuBox.appendChild(column);
        menuBox.classList.add("menuBox");
    }
    return menuBox;    
}

export {menuTab}