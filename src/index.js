import "./style.css";
import { wrapMenu, formCalc } from "./js/constants";

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(document.querySelector('.header_position_fixed'));
    if (document.querySelector('.header_position_fixed')) {
      wrapHeader();
    }
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

function wrapHeader() {
  const navigation = document.querySelector('.header__navigation');
  const header = document.querySelector('.header');
  const headerTitle = document.querySelector('.header__title');
  navigation.classList.toggle('header__navigation_type_open');
  wrapMenu.classList.toggle('header__menu-wrap_type_close');
  header.classList.toggle('header_position_fixed');
  headerTitle.classList.toggle('header__title_position_fixed');
}

wrapMenu.addEventListener('click', wrapHeader);

formCalc.addEventListener('input', () => {
  const result = document.querySelector('.form__result');
  const inputSquare = document.querySelector('.input__square');
  const inputLights = document.querySelector('.input__lights');
  result.textContent = (inputSquare.value * 1000) + (inputLights.value * 350) + ' рублей'
})