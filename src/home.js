export const homeBtn = document.querySelector('.home-btn');

export function homeBtnText() {

    homeBtn.textContent = "Home";
}

export const content = document.getElementById("content")

export function homeContent() {
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");

    const homeTitle = document.createElement("h1");

    homeTitle.textContent = "Flavorscape Bistro";
    homeTitle.classList.add("home-title");
    content.appendChild(contentContainer);
    contentContainer.appendChild(homeTitle);
    
    contentContainerFactory(3, contentContainer)

    let summary = document.querySelector('.restaurant-detail0');
    summary.textContent = `Welcome to Flavorscape Bistro, where global flavors meet exceptional service. Located in the heart of the city, our cozy restaurant offers a diverse menu crafted with the finest ingredients sourced locally and abroad. Whether you're indulging in savory starters or decadent desserts, each dish promises a culinary adventure. Our attentive staff ensures a memorable dining experience, perfect for intimate dinners or casual gatherings. Join us at Flavorscape Bistro for a taste sensation that will leave you wanting more.`
    summary.style.cssText = " min-height: 20%; width: 70%; margin: 20px auto 20px auto;border: 3px solid black; padding: 25px;"


    let hoursContainer = document.querySelector(".restaurant-detail1");
    let hoursTitle = document.createElement("h2");
    let hoursInfo = document.createElement("ul");
    
    hoursTitle.textContent = "Hours";
    hoursContainer.appendChild(hoursTitle);
    hoursContainer.appendChild(hoursInfo);

    for(let i = 0; i < 7; i++) {
        let days = document.createElement("li")
        days.classList.add(`days${i}`);
        hoursInfo.appendChild(days);
        days.style.cssText = "list-style-type: none;"
    }
    
    let mondayHrs = document.querySelector(".days0");
    mondayHrs.textContent = "Monday: 11:00 AM - 9:00 PM";

    let tuesdayHrs = document.querySelector(".days1");
    tuesdayHrs.textContent = "Tuesday: 11:00 AM - 9:00 PM";

    let WedHrs = document.querySelector(".days2");
    WedHrs.textContent = "Wednesday: 11:00 AM - 9:00 PM";

    let ThursHrs = document.querySelector(".days3");
    ThursHrs.textContent = "Thursday: 11:00 AM - 9:00 PM";

    let FriHrs = document.querySelector(".days4");
    FriHrs.textContent = "Friday: 11:00 AM - 10:00 PM";

    let SatHrs = document.querySelector(".days5");
    SatHrs.textContent = "Saturday: 11:00 AM - 10:00 PM";

    let SunHrs = document.querySelector(".days6");
    SunHrs.textContent = "Sunday: Closed";
    


    let locationContainer = document.querySelector(".restaurant-detail2");
    locationContainer.classList.add("location-container")
    let locationTitle = document.createElement("h2");
    locationTitle.textContent = "Location";
    let locationInfo = document.createElement("p");

    locationInfo.textContent = "Flavorscape Bistro 123 Main Street Cityville, USA"


    locationContainer.appendChild(locationTitle);
    locationContainer.appendChild(locationInfo);

}

function contentContainerFactory(iterations, parentContainer) {
    for (let i = 0; i < iterations; i++) {
        const restaurantDetails = document.createElement("div");

        restaurantDetails.classList.add(`restaurant-detail${i}`);
        parentContainer.appendChild(restaurantDetails);
        restaurantDetails.textContent = " ";
        restaurantDetails.style.cssText = " min-height: 20%; width: 70%; margin: 20px auto 20px auto;border: 3px solid black;"

    }

}