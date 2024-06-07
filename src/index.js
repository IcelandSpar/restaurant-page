import './styles.css';
import {homeBtnText, homeBtn, content} from './home.js';
import {menuBtnText, menuBtn, makeMenu} from './menu.js';
import {contactBtnText, contactBtn, makeContactInfo} from './contact.js';
import {homeContent} from './home.js';


//load text for buttons
homeBtnText();
menuBtnText();
contactBtnText();
homeContent();




homeBtn.addEventListener('click', () => {
    content.textContent = " ";
    homeContent();
})

menuBtn.addEventListener('click', () => {
    content.textContent = " ";
    makeMenu();
})

contactBtn.addEventListener('click', () => {
    content.textContent = " ";
    makeContactInfo();
})

