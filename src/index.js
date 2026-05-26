import "./style.css";
import { initial } from "./initial-load.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

function switchTab(e){
    const buttonName = e.target.textContent;

    const content = document.querySelector("#content");
    content.textContent = "";

    switch(buttonName){
        case "Home":
            initial();
            break
        case "Menu":
            menu();
            break
        case "About":
            about();
            break
    }
}

function addNavButtonListeners(){
    const navButtons = document.querySelectorAll(".navButton");

    navButtons.forEach(button => {
        button.addEventListener("click", (e)=>{switchTab(e)});
    })
}

function init(){
    addNavButtonListeners();
    initial();
}

init();