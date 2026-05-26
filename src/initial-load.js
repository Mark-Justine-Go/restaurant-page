function initial(){
    const body = document.querySelector("body");
    const content = document.querySelector("#content");
    const hero = document.createElement("h1");
    const orderButton = document.createElement("button");

    hero.classList.add("hero");
    hero.textContent = "The best authentic japanese food you can eat";

    orderButton.setAttribute("id","order-button");
    orderButton.textContent = "Order";

    content.appendChild(hero);
    content.appendChild(orderButton);
}

export {initial}