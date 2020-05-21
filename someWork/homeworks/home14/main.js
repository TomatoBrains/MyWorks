let openModal = document.querySelector('.open__modal-button');
let modalList = document.querySelector('.nav__list-mobile');
let closeModal = document.querySelector('.close__modal-button');

openModal.onclick = function open() {
    modalList.style.display = 'block';
    modalList.classList.add('open');
    event.stopPropagation();
}
closeModal.onclick = close;
window.onclick = close;
function close() {
    modalList.style.display = 'none';
    modalList.classList.remove('open');
}
function stopEvent(){
    event.stopPropagation()
}
modalList.onclick = stopEvent;