$(function() {
    "use strict";
    /* Эффекты MDB при появлении */
    new WOW().init();
    
    /* Отключаем кнопку отправки */
    $("#checkModal").change(function() {
        if($(this).prop("checked")===false) {
            $("#btnModal").prop("disabled", true);
        } else {
            $("#btnModal").prop("disabled", false);
        }
    });
    $("#checkCall").change(function() {
        if($(this).prop("checked")===false) {
            $("#btnCall").prop("disabled", true);
        } else {
            $("#btnCall").prop("disabled", false);
        }
    });
    $("#checkForm").change(function() {
        if($(this).prop("checked")===false) {
            $("#btnForm").prop("disabled", true);
        } else {
            $("#btnForm").prop("disabled", false);
        }
    });
    
    /* Кнока наверх */
    $(window).scroll(function(){
        // if ($(this).scrollTop() > 100) {
        //     $('.scrollup').fadeIn();
        // } else {
        //     $('.scrollup').fadeOut();
        // }
        if ($(document).scrollTop() > 50) {
            $('#orderButton').css({
                'position': 'fixed',
                'bottom' : '5%',
                'top' : 'auto'
            });
        } 
        if ($(document).scrollTop() < 250) {
            $('#orderButton').css({
                'position': 'absolute',
                'bottom' : 'auto',
                'top' : '904px'
            });
        }
    }); 
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    
    // Отправка запроса в модальном окне
    $("#btnModal").click(function(e) {
        e.preventDefault();
        var email = $('#emailModal').val();
        var phone = $('#phoneModal').val();
        var subject = 'Новая заявка';
        if(email !== '') {
            var reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
            if(reg.test(email)) {
                $.ajax({
                    type: 'POST',
                    url: "mail/sendmail.php",
                    data: {email: email, phone: phone, subject: subject},
                    success: function() {
                        $('#emailModal').val('');
                        $('#phoneModal').val('');
                        $("#confModal").css('display','none');
                        $("#formModalZapros").html('<h6 class="modal-body mx-3 text-center"><i class="fa fa-smile-o fa-3x text-success mb-3 animated rotateIn" aria-hidden="true"></i><div class="alert alert-success my-2" role="alert"><strong>Спасибо!</strong><hr class="my-3"><p>Ваша заявка успешно отправлена.<br>Мы с Вами в скором времени свяжемся.</p></div></h6>');
                    },
                    error: function(){
                        $("#formCallZapros").append('<div class="alert alert-danger text-center errorModal">Извините. Ошибка при отправке.<br>Пожалуйста, сообщите администратору ресурса!</div>');
                        setTimeout(function(){$('.errorModal').fadeOut(500);},2000);
                    }    
                });
            } else {
            $("#formModalZapros").append('<div class="alert alert-danger text-center errorModal" role="alert">Заполните правильно поле EMAIL!</div>');
            setTimeout(function(){$('.errorModal').fadeOut(500);},2000);
            }
        } else {
            $("#formModalZapros").append('<div class="alert alert-danger text-center errorModal" role="alert">Заполните обязательные поля!</div>');
            setTimeout(function(){$('.errorModal').fadeOut(500);},2000);
        }
    });

    // Отправка звонка в модальном окне
    $("#btnCall").click(function(e) {
        e.preventDefault();
        var name = $('#nameCall').val();
        var phone = $('#phoneCall').val();
        var subject = 'Новый обратный звонок';
        if(phone !== '') {
            $.ajax({
                type: 'POST',
                url: "mail/sendcall.php",
                data: {name: name, phone: phone, subject: subject},
                success: function() {
                    $('#nameCall').val('');
                    $('#phoneCall').val('');
                    $('#phoneCall').removeClass('valid');
                    $("#confCall").css('display','none');
                    $("#formCallZapros").html('<h6 class="modal-body mx-3 text-center"><i class="fa fa-smile-o fa-3x text-success mb-3 animated rotateIn" aria-hidden="true"></i><div class="alert alert-success my-2" role="alert"><strong>Спасибо!</strong><hr class="my-3"><p>Ваша заявка успешно отправлена.<br>Мы с Вами в скором времени свяжемся.</p></div></h6>');
                },
                error: function(){
                    $("#formCallZapros").append('<div class="alert alert-danger text-center errorModal">Извините. Ошибка при отправке.<br>Пожалуйста, сообщите администратору ресурса!</div>');
                    setTimeout(function(){$('.errorModal').fadeOut(500);},2000);
                }    
            });
        } else {
            $("#formCallZapros").append('<div class="alert alert-danger text-center errorModal" role="alert">Заполните обязательные поля!</div>');
            setTimeout(function(){$('.errorModal').fadeOut(500);},2000);
        }
    });
    
    // Отправка сообщения в блоке контактов
    $("#btnForm").click(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
        var subject = 'Оставлено сообщение';
        if(email !== '' && message !== '') {
            var reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
            if(reg.test(email)) {
                $.ajax({
                    type: 'POST',
                    url: "mail/sendmail.php",
                    data: {name: name, email: email, phone: phone, message: message, subject: subject},
                    success: function() {
                        $('#name').val('');
                        $('#email').val('');
                        $('#email').removeClass('valid');
                        $('#phone').val('');
                        $('#message').val('');
                        $('#message').removeClass('valid');
                        $('#contactForm label').removeClass('active');
                        $("#contactForm").css('display','none');
                        $("#contactFormBlock").append('<h6 id="successForm" class="modal-body mx-3 text-center"><i class="fa fa-smile-o fa-3x text-success mb-3 animated rotateIn" aria-hidden="true"></i><div class="alert alert-success my-2" role="alert"><strong>Спасибо!</strong><hr class="my-3"><p>Ваша заявка успешно отправлена.<br>Мы с Вами в скором времени свяжемся.</p></div></h6>');
                        setTimeout(function(){$('#successForm').fadeOut(500);},4000);
                        setTimeout(function(){$('#contactForm').css('display','block');},4000);
                    },
                    error: function(){
                        $("#contactFormError").append('<div class="text-danger text-center">Извините. Ошибка при отправке.<br>Пожалуйста, сообщите администратору ресурса!</div>');
                    }    
                });
            } else {
                $("#contactFormError").append('<div class="alert alert-danger text-center errorModal" role="alert">Заполните правильно поле EMAIL!</div>');
                setTimeout(function(){$('.errorModal').fadeOut(500);},2000);
            }
        } else {
            $("#contactFormError").append('<div class="alert alert-danger text-center errorModal" role="alert">Заполните обязательные поля!</div>');
            setTimeout(function(){$('.errorModal').fadeOut(500);},2000);
        }
    });

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [56.112357, 47.306549],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #4B515D; font-weight: bold; width: 100px; text-align: center; padding: 3px 5px;">$[properties.iconContent]</div>'
            ),
    
            myPlacemarkWithContent = new ymaps.Placemark([56.112357, 47.306549], {
                hintContent: '<div style="color: #4B515D; text-align: center; background: #fff; padding: 2px 5px;">ООО &ldquo;КОМПАНИЯ&rdquo;<br>123456, Россия<br>г. Москва, Новая улица, дом 1</div>',
                iconContent: 'ООО &ldquo;КОМПАНИЯ&rdquo;'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: 'img/map-icon.png',
                // Размеры метки.
                iconImageSize: [50, 50],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                //iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [-24, -26],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
    
        myMap.geoObjects
            .add(myPlacemarkWithContent);
    });
});