let container = document.querySelector('.container');
let date = document.querySelector('.date');
let dateInput = document.querySelector('.date_input');
let cinema = document.querySelector('.cinema');
let cinemaChoise = document.querySelector('.cinema.choise_modal');
let genre = document.querySelector('.genre');
let genreChoise = document.querySelector('.genre.choise_modal');
let dateTriangle = document.querySelector('.date i');
let cinemaTriangle = document.querySelector('.cinema i');
let genreTriangle = document.querySelector('.genre i');
let status = false;


date.onclick = function launchEnd(){
    if(status) {
        dateInput.style.display = 'none';
        dateInput.classList.remove('modal_choise_open');
        dateTriangle.className = 'fas fa-caret-down';
        status = false;
    }
    else{
        dateInput.style.display = 'inline-block';
        dateInput.classList.add('modal_choise_open');
        dateTriangle.className = 'fas fa-caret-up';
        cinemaTriangle.className = 'fas fa-caret-down';
        genreTriangle.className = 'fas fa-caret-down';
        cinemaChoise.style.display = 'none';
        genreChoise.style.display = 'none';
        status = true;
    }
}
cinema.onclick = function launchEnd(){
    if(status) {
        cinemaChoise.style.display = 'none';
        cinemaChoise.classList.remove('modal_choise_open');
        cinemaTriangle.className = 'fas fa-caret-down';
        status = false;
    }
    else{
        cinemaChoise.style.display = 'inline-block';
        cinemaChoise.classList.add('modal_choise_open');
        cinemaTriangle.className = 'fas fa-caret-up';
        genreTriangle.className = 'fas fa-caret-down';
        dateTriangle.className = 'fas fa-caret-down';
        genreChoise.style.display = 'none';
        dateInput.style.display = 'none';
        
        status = true;
    }
}
genre.onclick = function launchEnd(){
    if(status) {
        genreChoise.style.display = 'none';
        genreChoise.classList.remove('modal_choise_open');
        genreTriangle.className = 'fas fa-caret-down';
        status = false;
    }
    else{
        genreChoise.style.display = 'inline-block';
        genreChoise.classList.add('modal_choise_open');
        genreTriangle.className = 'fas fa-caret-up';
        dateTriangle.className = 'fas fa-caret-down';
        cinemaTriangle.className = 'fas fa-caret-down';
        dateInput.style.display = 'none';
        cinemaChoise.style.display = 'none';
        status = true;
    }
}
container.onclick = function end() {
    if (event.target == container) {
        genreChoise.style.display = 'none';
        genreChoise.classList.remove('modal_choise_open');
        genreTriangle.className = 'fas fa-caret-down';
        dateInput.style.display = 'none';
        dateInput.classList.remove('modal_choise_open');
        dateTriangle.className = 'fas fa-caret-down';
        cinemaChoise.style.display = 'none';
        cinemaChoise.classList.remove('modal_choise_open');
        cinemaTriangle.className = 'fas fa-caret-down';
}}



