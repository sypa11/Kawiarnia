
window.addEventListener('scroll', function () {
    const scrollingHeader = document.querySelector('.header-container');
    var position = 80;
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > position) {
        scrollingHeader.classList.add('scrolled');
    } 
    else {
        scrollingHeader.classList.remove('scrolled');
    }

});