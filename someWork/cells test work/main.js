//Бекграунд слайдер
let slider = document.getElementById('background_slider');
let i = 1;
let fff = setInterval(repeat, 10000000);
function repeat() {
    i++;
    switch (i) {
        case 1:
            slider.className = 'slider';
            break;
        case 2:
            slider.className = 'slider_2';
            break;
        case 3:
            slider.className = 'slider_3';
            i = 0;
            break;
    }
}



//Выезжающее меню
document.querySelector('.menu_button__icon').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('active');
    document.querySelector('.close-menu').classList.add('close-menu-active');
})
document.querySelector('.close-menu').addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('.close-menu').classList.remove('close-menu-active')
})


//Выезжающий поиск
document.querySelector('.search_button__icon').addEventListener('click', () => {
    document.querySelector('.search').classList.add('active');
    document.querySelector('.close-search').classList.add('close-search-active');
})
document.querySelector('.close-search').addEventListener('click', () => {
    document.querySelector('.search').classList.remove('active');
    document.querySelector('.close-search').classList.remove('close-search-active')
})



//Кнопка наверх
$(function() {
    $(window).scroll(function() {
    });
    $('#up_button').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});
