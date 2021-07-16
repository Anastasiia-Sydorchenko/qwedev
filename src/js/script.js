import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

//HEADER BURGER MENU 
const burgerMenuButton = document.querySelector('.header-top__burger-menu');

burgerMenuButton.onclick = function () {
  showMobileMenu();
}

function showMobileMenu () {
  burgerMenuButton.classList.toggle('active');

  const mobileMenu = document.querySelector('.header-top__burger-menu-nav');
  mobileMenu.classList.toggle('active');

  const body = document.querySelector('body');
  body.classList.toggle('lock');
}

//LATEST NEWS TABS 
// Get all tabs
let tabs_items = document.querySelectorAll(".latest-news__tabs");

// Loop through all tabs
tabs_items.forEach(function (tabs) {
  // Set letiable
  let controls = tabs.querySelector(".latest-news__tabs-control");
  let tab = controls.querySelectorAll(".tabs__tab");
  let contents = tabs.querySelector(".latest-news__contents");
  let content = contents.querySelectorAll(".latest-news__tabs-content");

  // Loop through all tabs
  tab.forEach(function (item) {
    item.onclick = function (e) {
      e.preventDefault();

      // Get clicked tab ID
      let tabId = item.dataset.tab;

      // Set current tab
      tab.forEach(function (item) {
        if (tabId == item.dataset.tab) {
          item.classList.add("tabs__tab--current");
          item.setAttribute('aria-selected','true');
          item.removeAttribute('tabindex','-1');
        } else {
          item.classList.remove("tabs__tab--current");
          item.setAttribute('aria-selected','false');
          item.setAttribute('tabindex','-1');
        }
      });

      // Set current content
      content.forEach(function (item) {
        if (tabId == item.dataset.tabContent) {
          item.classList.add("latest-news__tabs-content--current");
          item.removeAttribute('hidden','hidden');
        } else {
          item.classList.remove("latest-news__tabs-content--current");
          item.setAttribute('hidden','hidden');
        }
      });
    };
  });
});

// LATEST BLOP NEWS SLIDER
const latestBlogNews = new Swiper('#latest-blog-news__slider', {
  // Optional parameters
  loop: true,
  spaceBetween: 10,
  lazyLoading: true,
  slidesPerView: 5,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// FAQ ACCORDION
let faqQuestion = document.getElementsByClassName("it-news__answers-question");
let i;

for (i = 0; i < faqQuestion.length; i++) {
  faqQuestion[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } 
  });
}

// FAQ ACCORDION ARROW-BUTTON
let faqQuestions = document.querySelectorAll('.it-news__answers-question');

for (faqQuestion of faqQuestions) {
  let arrowToDown = faqQuestion.querySelector('.it-news__answers-arrow');
  faqQuestion.onclick = function () {
    arrowToDown.classList.toggle('it-news__answers-arrow--active')
  };
};