let nav = document.querySelector('.header__nav');
let hamburger = document.querySelector('.hamburger');
let hamburgerFirstLine = document.querySelector('.hamburger__line:nth-child(1)');
let hamburgerSecondLine = document.querySelector('.hamburger__line:nth-child(2)');
let hamburgerThirdLine = document.querySelector('.hamburger__line:nth-child(3)');

hamburger.addEventListener('click', function() {
    hamburgerFirstLine.classList.toggle('hamburger__line-1');
    hamburgerSecondLine.classList.toggle('hamburger__line-2');
    hamburgerThirdLine.classList.toggle('hamburger__line-3');

    nav.classList.toggle('display__nav');
})