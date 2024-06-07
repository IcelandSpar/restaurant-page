export const contactBtn = document.querySelector('.contact-btn')

export function contactBtnText() {
    contactBtn.textContent = "Contact";
}

let contactContent = document.getElementById("content");

export function makeContactInfo() {
    let contactContainer = document.createElement("div");
    let contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Us";
    contactTitle.classList.add("contact-title");
    contactContainer.classList.add("contact-container");

    contactContent.appendChild(contactContainer);
    contactContainer.appendChild(contactTitle);


    for(let i = 0; i < 3; i++) {
        let contactBoxes = document.createElement("div");
        contactBoxes.classList.add(`contact-box${i}`, "contact-boxes");
        
        contactContainer.appendChild(contactBoxes);
    }

    let firstContactBox = document.querySelector(".contact-box0");
    let firstContactName = document.createElement("h2");
    let firstContactInfo = document.createElement("div");
    firstContactName.textContent = "Samantha Greene";

    firstContactBox.appendChild(firstContactName);
    firstContactBox.appendChild(firstContactInfo);

    for(let j = 0; j < 3; j++) {
        let contactInfo = document.createElement("div");
        contactInfo.classList.add(`contact-info${j}`, "contacts-info");
        

        firstContactInfo.appendChild(contactInfo)

    }

    let firstContactOcc = document.querySelector(".contact-info0");
    firstContactOcc.textContent = "Head Chef";

    let firstContactNumber = document.querySelector(".contact-info1");
    firstContactNumber.textContent = "(555) 123-4567";

    let firstContactEmail = document.querySelector(".contact-info2");
    firstContactEmail.textContent = "samantha.greene@example.com";


    let secondContactBox = document.querySelector(".contact-box1");
    let secondContactName = document.createElement("h2");
    secondContactName.textContent = "Michael Rodriguez";



    secondContactBox.appendChild(secondContactName);


    for(let j = 0; j < 3; j++) {
        let contactInfo2 = document.createElement("div");
        contactInfo2.classList.add(`contact-info2${j}`, "contacts-info");
        

        secondContactBox.appendChild(contactInfo2)

    }

    let secondOcc = document.querySelector(".contact-info20");
    secondOcc.textContent = "Restaurant Manager";
    
    let secondNumber = document.querySelector(".contact-info21");
    secondNumber.textContent = "(555) 987-6543";

    let secondEmail = document.querySelector(".contact-info22");
    secondEmail.textContent = "michael.rodriguez@example.com"

    let thirdContactBox = document.querySelector(".contact-box2");
    let thirdName = document.createElement("h2");
    thirdName.textContent = "Emily Nguyen"

    thirdContactBox.appendChild(thirdName);

    for(let j = 0; j < 3; j++) {
        let contactInfo3 = document.createElement("div");
        contactInfo3.classList.add(`contact-info3${j}`, "contacts-info");
        

        thirdContactBox.appendChild(contactInfo3)

    }

    let thirdOcc = document.querySelector(".contact-info30");
    thirdOcc.textContent = "Head Waiter";

    let thirdNumber = document.querySelector(".contact-info31");
    thirdNumber.textContent = "(555) 789-0123";

    let thirdEmail = document.querySelector(".contact-info32");
    thirdEmail.textContent = "emily.nguyen@example.com";


}