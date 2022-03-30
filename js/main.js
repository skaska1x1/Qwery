let burger = document.querySelector('.header__burger');
let headerNav = document.querySelector('.header__nav');

burger.addEventListener('click', function () {
    // headerNav.style = "transform: translateY(0%);"
    // burger.classList.toggle('active')
    headerNav.classList.toggle('active')
})