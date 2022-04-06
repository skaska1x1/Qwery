let burger = document.querySelector(".header__burger");
let headerNav = document.querySelector(".header__nav");

burger.addEventListener("click", function () {
  headerNav.classList.toggle("active");
});

let btnScrollDown = document.querySelector("#header__scroll-svg");

// btnScrollDown.addEventListener('click', function () {
//     window.scrollTo(0, 1400);
// });

function scrollDown() {
  let windowCoords = 1600;
  // let windowCoords = document.documentElement.clientHeight;
  (function scroll() {
    if (window.scrollY < windowCoords) {
      window.scrollBy(0, 10);
      setTimeout(scroll, 0);
    }
    // if (window.pageYOffset > windowCoords) {
    //     window.scrollTo(0, windowCoords);
    // }
  })();
}

btnScrollDown.addEventListener("click", scrollDown);

// кнопка вверх
// 1 объявляем переменную
let scroll = document.querySelector(".upward");

// 2 при скроле вниз, ниже 10px сработает событие > добавляет класс active
window.addEventListener("scroll", function () {
  scroll.classList.toggle("active", window.scrollY > 100);
});

//3. при нажатии на кнопку вверх, сработает событие > поднимет экран вверх на 0
scroll.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
