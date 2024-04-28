// Search Box popup
const searchBoxNode = document.querySelector('.search-box');
const searchButtonNode = document.querySelector('.style-btn');
searchButtonNode.addEventListener('click', () => {
    searchBoxNode.classList.add('search-box-open');
})

const popupCloseNode = document.querySelector('.popup-close');
popupCloseNode.addEventListener('click', () => {
    searchBoxNode.classList.remove('search-box-open');
})


// Navigation Popup 
const navPopup = document.querySelector('.nav-popup');
const styleNavBtn = document.querySelector('.style-nav');
styleNavBtn.addEventListener('click', () => {
    navPopup.classList.add('nav-popup-open');
})

const navCloseNode = document.querySelector('.nav-close');
navCloseNode.addEventListener('click', () => {
    navPopup.classList.remove('nav-popup-open');
})

const navOverlay = document.querySelector('.nav-popup-overlay');
navOverlay.addEventListener('click', () => {
    navPopup.classList.remove('nav-popup-open');
})

