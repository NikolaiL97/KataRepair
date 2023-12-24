let textOpen = document.querySelector('.text-open');
let buttonOpen = document.querySelector('.main__items--open');
let mainItem = document.querySelectorAll('.main__item');
let imgOpen = document.querySelector('.main__open');
let textOpenContent = 'Показать все';
textOpen.textContent = 'Показать все';
let mainItemOpen = document.querySelectorAll('.main__item--open')
buttonOpen.addEventListener('click', function() 
    {  
        if (textOpen.textContent === textOpenContent) {
            for (let i = 0; i < mainItem.length; i++){
            mainItem[i].classList.remove('main__item--open');
            }
            textOpen.textContent = 'Скрыть';
            imgOpen.classList.add('main__open-rotate');
        } else {
            for (let i = 0; i < mainItemOpen.length; i++){
            mainItemOpen[i].classList.add('main__item--open');
            }
            imgOpen.classList.remove('main__open-rotate');
            textOpen.textContent = 'Показать все';
        }
});



    let swiper = new Swiper(".mySwiper", {
    //   spaceBetween: 320,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        
        // dynamicBullets: true,
      },
      
      mousewheel: true,
      keyboard: true,
    });
  