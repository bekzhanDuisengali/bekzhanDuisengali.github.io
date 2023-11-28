// const slider = document.querySelector('.carousel__inner');
// const btnNext = document.querySelector('.next_slide');
// const btnPrev = document.querySelector('.prev_slide');
// let slideIndex = 0;
// function showSlide(index){
//     slider.style.transform = `translateX(${-index * 100}%)`;
// }
// function nextSlide(){
//     slideIndex++;
//     if(slideIndex >= slider.children.length){
//         slideIndex = 0;
//     }
//     showSlide(slideIndex);
// }
// function prevSlide(){
//     slideIndex--;
//     if(slideIndex < 0){
//         slideIndex = slider.children.length-1;
//     }
//     showSlide(slideIndex);
// }
// btnNext.addEventListener('click', nextSlide);
// btnPrev.addEventListener('click', prevSlide);

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 500,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/chevron left solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/chevron right solid.png"</button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
    });
    $(function() {
      
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
          $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });
        
      });
      
    $('.catalog-item__link').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    }); 
      
    $('.catalog-item__back').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });

    
    $('[data-modal=consultation]').on('click',function(){
        $('.overlay,#consultation').fadeIn();
    })

    $('.modal__close').on('click',function(){
        $('.overlay,#consultation, #order, #order').fadeOut();
    })
    $('.button_mini').each(function(i){
        $(this).on('click',function(){
            $('.overlay, #thanks').fadeOut();
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay,#order').fadeIn();
        })
    });

    
    function valideForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Введите имя!",
                    minlength: jQuery.validator.format("At least {0} characters!")
                },
                phone: "Введите номер телефона",
                email: {
                    required: "Введите вашу почту",
                    email: "Введите в верном формате"
                }
            }
            
        });
    }
    valideForms('#consultation-form');
    valideForms('#order form');
    valideForms('#consultation form');
    $('input[name=phone]').mask("+7 (999)-999-99-99");
    
    $('form').submit(function(e){
        e.preventDefault();

        if(!$(this).valid()){
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
        
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>1600){
            $('.pageup').fadeIn();
        } else{
            $('.pageup').fadeOut();
        }
    });
    $("a [href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    })
});
    
  

// if(change){
    //     change.style.display='block';
    // }
    // link.textContent=change.textContent;
    // link.forEach(element=>{
    //     console.log(element.textContent);
    // })
    // tabs.forEach(item=>{
    //     console.log(item.textContent);
    // })
    // for(let i = 0;i<tabs.length;i++){
    //     tabs[i].style.display='none';
    // }

// Получаем кнопку "Подробнее" и соответствующий блок с информацией
// Получаем ссылку, блок с информацией и блок-обертку
// Получаем все ссылки и блоки с информацией
// const links = document.querySelectorAll('.catalog__link');
// const tabInfos = document.querySelectorAll('.catalog__tabinfo');
// const wrappers = document.querySelectorAll('.catalog__wrapper');
// const backButton = document.querySelectorAll('.catalog__back');
// // Добавляем обработчик события для каждой ссылки
// links.forEach((link, index) => {
//     link.addEventListener('click', function(event) {
//         // Предотвращаем стандартное действие ссылки (переход по ссылке)
//         event.preventDefault();

//         // Заменяем содержимое соответствующего блока-обертки текстом из соответствующего catalog__tabinfo
//         wrappers[index].innerHTML = tabInfos[index].innerHTML;
//     });
// });

    