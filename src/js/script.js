import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

//HEADER BURGER MENU DESKTOP
const burgerMenuButton = document.querySelector('.header-top__burger-menu-trigger');

burgerMenuButton.onclick = function () {
  showHeaderTopBurgerMenu();
}

function showHeaderTopBurgerMenu () {
  burgerMenuButton.classList.toggle('active');
  const mobileMenu = document.querySelector('.header-top__burger-menu-nav');
  mobileMenu.classList.toggle('active');
  const mobileMenuContainer = document.querySelector('.header-top__burger-menu-container');
  mobileMenuContainer.classList.toggle('active');
  const body = document.querySelector('body');
  body.classList.toggle('lock');
}

const burgerMobileMenuButton = document.querySelector('.mobile-menu-button-trigger');

burgerMobileMenuButton.onclick = function () {
  showMobileMenu();
}

function showMobileMenu () {
  const mobileMenu = document.querySelector('.header-bottom__menu');
  mobileMenu.classList.toggle('active');
  const mobileMenuContainer = document.querySelector('.mobile-menu-button-container');
  mobileMenuContainer.classList.toggle('active');
  mobileMenuContainer.querySelector('.header-top__burger-menu').classList.toggle('active');
}

//HEADER BURGER MENU DROPDOWN BUTTONS
let dropdownButtons = document.querySelectorAll(".dropbtn");
console.log(dropdownButtons);
dropdownButtons.forEach(function(el) {
  el.addEventListener('click', function(event) {
    if (event.target.matches('.dropbtn')) {
      el.classList.toggle("show-styles");
      el.nextElementSibling.classList.toggle("show");
    } else {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  })
});

//TOP NEWS MOBILE SLIDER
const topNewsMobile = new Swiper('#top-news--mobile__slider', {
  loop: true,
  spaceBetween: 10,
  lazyLoading: true,
  slidesPerView: 'auto',
});

//LATEST NEWS TABS 
let tabs_items = document.querySelectorAll(".latest-news__tabs");
tabs_items.forEach(function (tabs) {
  let controls = tabs.querySelector(".latest-news__tabs-control");
  let tab = controls.querySelectorAll(".tabs__tab");
  let contents = tabs.querySelector(".latest-news__contents");
  let content = contents.querySelectorAll(".latest-news__tabs-content");

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

// LATEST BLOG NEWS SLIDER
const latestBlogNews = new Swiper('#latest-blog-news__slider', {
  // Optional parameters
  loop: true,
  spaceBetween: 10,
  lazyLoading: true,
  slidesPerView: 'auto',

  breakpoints: {
    400: {
      slidesPerView: 'auto',
      spaceBetween: 10,
    },
    650: {
      slidesPerView: 'auto',
      spaceBetween: 10,
    },
    776: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4.5,
    },
    1025: {
      slidesPerView: 5,
    },
  },
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

//BACK TO TOP BTN
const scrollToTopButton = document.getElementById('footer__bottom-arrow-to-top');

const scrollFunc = () => {
  let y = window.scrollY;
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};

scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
};

//TABS SHOW/HIDE CONTENT
const hideBtn = document.querySelector('.latest-news__tabs-hide-btn');
const showMoreBtn = document.querySelector('.latest-news__show-more-btn');
const extraListItems = document.querySelector('.latest-news__list-items--extra');

showMoreBtn.onclick = function() {
  extraListItems.classList.toggle('show');
  showMoreBtn.classList.add('show-pale');
  hideBtn.classList.add('show-color');
};

hideBtn.onclick = function() {
  extraListItems.classList.toggle('show');
  showMoreBtn.classList.remove('show-pale');
  showMoreBtn.classList.add('show-color');
  hideBtn.classList.add('show-pale');
};