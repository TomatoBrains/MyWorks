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
//let newTest = document.querySelectorAll('.test');
dateInput.style.display = 'none';
cinemaChoise.style.display = "none";
cinemaChoise.style.display = 'none';

date.onclick = function launchEndDate(){
    if(dateInput.style.display != 'none') {
        dateInput.style.display = 'none';
        dateInput.classList.remove('modal_choise_open');
        dateTriangle.className = 'fas fa-caret-down';
    }
    else{
        dateInput.style.display = 'block';
        dateInput.classList.add('modal_choise_open');
        dateTriangle.className = 'fas fa-caret-up';
        cinemaTriangle.className = 'fas fa-caret-down';
        genreTriangle.className = 'fas fa-caret-down';
        cinemaChoise.style.display = 'none';
        genreChoise.style.display = 'none';
    }
    event.stopPropagation();
};
cinema.onclick = function launchEndCinema(){
    if(cinemaChoise.style.display != "none") {
        cinemaChoise.style.display = 'none';
        cinemaChoise.classList.remove('modal_choise_open');
        cinemaTriangle.className = 'fas fa-caret-down';
    }
    else{
        cinemaChoise.style.display = 'block';
        cinemaChoise.classList.add('modal_choise_open');
        cinemaTriangle.className = 'fas fa-caret-up';
        genreTriangle.className = 'fas fa-caret-down';
        dateTriangle.className = 'fas fa-caret-down';
        genreChoise.style.display = 'none';
        dateInput.style.display = 'none';
    }
    event.stopPropagation();
};
genre.onclick = function launchEndGenre(){
    if(genreChoise.style.display != 'none') {
        genreChoise.style.display = 'none';
        genreChoise.classList.remove('modal_choise_open');
        genreTriangle.className = 'fas fa-caret-down';
    }
    else{
        genreChoise.style.display = 'block';
        genreChoise.classList.add('modal_choise_open');
        genreTriangle.className = 'fas fa-caret-up';
        dateTriangle.className = 'fas fa-caret-down';
        cinemaTriangle.className = 'fas fa-caret-down';
        dateInput.style.display = 'none';
        cinemaChoise.style.display = 'none';
    }
    event.stopPropagation();
};

function stopEvent(){
    event.stopPropagation()
}
cinemaChoise.onclick = stopEvent;
genreChoise.onclick = stopEvent;
dateInput.onclick =  stopEvent;

window.onclick = function abc () {
            genreChoise.style.display = 'none';
            genreChoise.classList.remove('modal_choise_open');
            dateInput.style.display = 'none';
            dateInput.classList.remove('modal_choise_open');
            cinemaChoise.style.display = 'none';
            cinemaChoise.classList.remove('modal_choise_open');
            dateTriangle.className = 'fas fa-caret-down';
            cinemaTriangle.className = 'fas fa-caret-down';
            genreTriangle.className = 'fas fa-caret-down';
}

/*newTest.forEach(element => {
    document.onclick = (event) => {
        console.log(event.target)
        if(event.target !== newTest) {
            genreChoise.style.display = 'none';
            genreChoise.classList.remove('modal_choise_open');
            dateInput.style.display = 'none';
            dateInput.classList.remove('modal_choise_open');
            cinemaChoise.style.display = 'none';
            cinemaChoise.classList.remove('modal_choise_open');
        }
        }
    
});*/
