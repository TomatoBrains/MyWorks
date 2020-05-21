let modalbtn = document.querySelector('.header__content-button');
let btnMidline = document.querySelector('.header__content-Midline');
let btnBotline = document.querySelector('.header__content-Botline');
let btnTopline = document.querySelector('.header__content-Topline');
let nav = document.querySelector('.nav__menu')
let flag = false;

modalbtn.addEventListener('click', function () {
    if (flag === false) {
        nav.style.display = 'block';
        nav.classList.add('nav__menu-open');
        btnBotline.style.transform = 'rotate(135deg)';
        btnBotline.style.marginTop = '0';
        btnTopline.style.transform = 'rotate(45deg)';
        btnMidline.style.display = 'none';
        flag = true;
    }
    else  {
        nav.style.display = 'none';
        btnBotline.style.transform = 'rotate(0)';
        btnBotline.style.marginTop = '8px';
        btnTopline.style.transform = 'rotate(0)';
        btnMidline.style.display = 'block';
        flag = false;
    }
})
