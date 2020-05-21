let launch = document.querySelector('.open_modal_btn');
let modal = document.querySelector('.modal-window');
let container = document.querySelector('.modal_container');
let close = document.querySelectorAll('.js-close')[0];
let modalClose = document.querySelector('.modal-window_close');

launch.onclick = function start() {
    modal.style.display='block';
    modal.classList.add('modal-window_open');
    modal.classList.remove('modal-window_close');
    container.style.backgroundColor='#4d4d4d';
    launch.style.display='none';
};
close.onclick = function end() {
    modal.classList.add('modal-window_close');
    modal.classList.remove('modal-window_open');
    container.style.backgroundColor='#fff';
    launch.style.display='block';
};
container.onclick = function containerEnd () {
    if (event.target == container) {
        modal.classList.add('modal-window_close');
        modal.classList.remove('modal-window_open');
        container.style.backgroundColor='#fff';
        launch.style.display='block';
      }
}
container.addEventListener('transitionend', function () {
    modal.style.display='none';
})

function anim() {
    if (modalClose.timePassed >=1000) {
        modal.style.display='none';
    };
}
