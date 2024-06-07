export const menuBtn = document.querySelector('.menu-btn')

export function menuBtnText() {
    menuBtn.textContent = "Menu";
}

const menuContent = document.getElementById("content");

export function makeMenu() {

    let menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    
    menuContent.appendChild(menuContainer);

    let menuTitle = document.createElement("h1");
    

    menuContainer.appendChild(menuTitle);
    menuTitle.textContent = "Our Menu";
    menuTitle.classList.add("menu-title");

    let beveragesTitle = document.createElement("h2");
    menuContainer.appendChild(beveragesTitle);
    beveragesTitle.textContent = "Beverages";

    makeMenuItems(menuContainer, 2, "beverages");
   
    //beverage 1
    let beverage1 = document.querySelector(".beverages-item0");
    let beverage1Title = document.createElement("h3");
    beverage1Title.textContent = "Mystic Mango Madness";

    let beverage1Descript = document.createElement("p");
    beverage1Descript.textContent = `Dive into a tropical oasis with our Mystic Mango Madness. This refreshing beverage combines the exotic flavors of ripe mangoes with a hint of tangy citrus, creating a symphony of sweetness that dances on your taste buds. Served over ice with a garnish of fresh mint leaves, it's the perfect way to beat the heat on a sunny day.`

    beverage1.appendChild(beverage1Title);
    beverage1.appendChild(beverage1Descript);

    let bev1Container = document.createElement("div");
    bev1Container.classList.add("bev-1-container");


    let bevPrice = document.createElement("h2");
    bevPrice.textContent = "$5.99";
    let bevPicture = document.createElement("div");

    
    bevPicture.classList.add("bev-picture");

    beverage1.appendChild(bev1Container);
    bev1Container.appendChild(bevPrice);
    bev1Container.appendChild(bevPicture);

    //bev 2

    let bev2 = document.querySelector(".beverages-item1");
    let bev2Title = document.createElement("h3");
    bev2Title.textContent = "Velvet Vanilla Dream";
    let bev2Descript = document.createElement("p");
    bev2Descript.textContent = "Indulge in the creamy richness of our Velvet Vanilla Dream. This luxurious beverage blends smooth vanilla bean with velvety milk, creating a decadent treat that soothes the soul. Served hot or iced, it's a comforting companion for any time of day. Topped with a dollop of whipped cream and a sprinkle of cinnamon, it's a true delight for the senses.";

    bev2.appendChild(bev2Title);
    bev2.appendChild(bev2Descript);
    
    let bev2Container = document.createElement("div");
    bev2Container.classList.add("bev-2-container");

    let bev2Price = document.createElement("h2");
    let bev2Picture = document.createElement("div");
    bev2Picture.classList.add("bev-2-picture");
    bev2Price.textContent = "$4.99";

    bev2.appendChild(bev2Container);
    bev2Container.appendChild(bev2Price);
    bev2Container.appendChild(bev2Picture);
    
}

function makeMenuItems(parent, containers, type) {

    for(let i = 0; i < containers; i++) {
        let menuItems = document.createElement("div");
        parent.appendChild(menuItems);
        menuItems.classList.add(`${type}-item${i}`, "menu-items");


        
    }


    

}