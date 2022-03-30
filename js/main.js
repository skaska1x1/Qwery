let burger = document.querySelector('.header__burger');
let headerNav = document.querySelector('.header__nav');

burger.addEventListener('click', function () {
    headerNav.classList.toggle('active');
})

let btnScrollDown = document.querySelector('#header__scroll-svg');

// btnScrollDown.addEventListener('click', function () {
//     window.scrollTo(0, 1400);
// });

function scrollDown() {
    let windowCoords = 1400;
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

btnScrollDown.addEventListener('click', scrollDown);