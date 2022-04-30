
document.querySelector('.btn_login').onclick = function () {
    document.querySelector('.overlay').classList.add('overlay_active')
    document.querySelector('.popup__form_login').classList.add('active')
}

document.querySelector('.btn_singUp').onclick = function(){
    document.querySelector('.overlay').classList.add('overlay_active')
    document.querySelector('.popup__form_singUp').classList.add('active')
}

document.querySelector('.popup__close').onclick = function () {
    document.querySelector('.overlay').classList.remove('overlay_active')
    document.querySelector('.popup__form_login').classList.remove('active')
    document.querySelector('.popup__form_singUp').classList.remove('active')
}

document.querySelector('.tools__more').onclick = function () {
    document.querySelector('.tools__more').classList.toggle('active')
    if (document.querySelector('.tools__more').classList.contains('active')){
        document.querySelector('.tools__more').textContent = 'hide'
    } else{
        document.querySelector('.tools__more').textContent = 'Load more'
    }
    document.querySelectorAll('.tools__card_hide').forEach(function (card) {
        card.classList.toggle('active')
    })
}



let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    speed: 900,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});