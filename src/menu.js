import sushi from "./images/sushi.jpg";
import onigiri from "./images/onigiri.jpg";
import udon from "./images/udon.jpg";
import ramen from "./images/ramen.jpg";
import takoyaki from "./images/takoyaki.jpg";
import mochi from "./images/mochi.jpg";


function menu(){
    const foodArr = [
        {name: "Sushi", image: sushi},
        {name: "Onigiri", image: onigiri},
        {name: "Udon", image: udon},
        {name: "Ramen", image: ramen},
        {name: "Takoyaki", image: takoyaki},
        {name: "Mochi", image: mochi},

    ];
    const content = document.querySelector("#content");
    const menu = document.createElement("div");

    menu.setAttribute("id","menu");

    foodArr.forEach(food => {
        const card = document.createElement("div");
        const thumbnail = document.createElement("img");
        const foodName = document.createElement("p");

        foodName.textContent = food.name

        thumbnail.src = food.image;

        card.classList.add("card");
        card.appendChild(thumbnail);
        card.appendChild(foodName);
        // card.textContent = food.name;

        menu.appendChild(card);
    })

    content.appendChild(menu);
}

export {menu}