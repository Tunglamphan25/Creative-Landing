// **========== Owl Carousel =============**//
$(".portfolio-box").owlCarousel({
  loop: true,
  margin: 80,
  nav: false,
  dotsEach: 1,
  responsive: {
    320: {
      items: 2.2,
    },
    576: {
      items: 2,
    },
    768: {
      items: 4,
    },
    1000: {
      center: true,
      items: 4,
    },
  },
});
$(".brand-items").owlCarousel({
  loop: true,
  margin: 80,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});
// **================ Responsive Menu ================ **//
var toggleMenu = document.querySelector(".header-button");
var topMolbie = document.querySelector(".header__top-list-mobile");
console.log(toggleMenu);
toggleMenu.addEventListener("click", function () {
  topMolbie.classList.toggle("show");
  document.querySelector(".header").classList.toggle("color");
});
var itemSubMenu = Array.from(document.querySelectorAll(".list-mobile__item"));
console.log(itemSubMenu);
itemSubMenu.forEach(function (btn) {
  btn.onclick = function () {
    btn.lastElementChild.classList.toggle("showSub");
  };
});
//**================== 3, Sticky Menu ==================== **//
var scrollState = 500;
var navClasses = document.querySelector(".header").classList;
console.log(navClasses);
var scrollTop = function () {
  return window.scrollY;
};

var scrollDetect = function (down, up) {
  var currentScroll = scrollTop();
  if (currentScroll === 0) {
    navClasses.remove("record");
  } else if (currentScroll >= scrollState) {
    console.log("down");
    down();
  } else {
    console.log("up");
    up();
  }
  scrollState = scrollTop();
};


function downAction() {
  navClasses.remove("open");
  navClasses.add("collapse");
  document.querySelector(".header").style.opacity = "0";
}

function upAction() {
  navClasses.remove("collapse");
  navClasses.add("open");
  document.querySelector(".header").style.opacity = "1";
  document.querySelector(".header").classList.add("record");
}

window.addEventListener("scroll", function () {
  scrollDetect( downAction, upAction);
});
function myFunction(x) {
  x.classList.toggle("change");
}
// Wow Js
new WOW().init();