function about(){
    const content = document.querySelector("#content");
    const about = document.createElement("div");
    const description = document.createElement("p");

    description.textContent = `Our restaurant has been serving authentic japanese cuisine ever since it was established in the 1800's.
                Starting from a humble wooden shack to a full fledged restaurant. If you can't visit us at our establishment
                you can still experience our authentic japanese food by ordering in this website. We ship globally around the world
                and we're always making sure that the method for delivery wouldn't take away the experience that were offering to you.
                So, what are you waiting for? experience the real deal`;

    about.setAttribute("id","about");
    about.appendChild(description);
    
    content.appendChild(about);
}

export {about}