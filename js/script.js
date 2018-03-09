var about = document.querySelector('.about-me');
var main = document.querySelector('main');
var header = document.querySelector('.header');

header.addEventListener('click', function(e) {
    about.classList.toggle('open');
    e.stopPropagation();
});
main.addEventListener('click', function() {
    about.classList.remove('open');
});