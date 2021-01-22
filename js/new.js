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
                'top' : '88%'
            });
        }
    }); 
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    // Отправка запроса в модальном окне
    // $("#btnModal").click(function(e) {
    //     e.preventDefault();
    //     var email = $('#emailModal').val();
    //     var phone = $('#phoneModal').val();
    //     var subject = 'Новая заявка';
    //     if(email !== '') {
    //         var reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    //         if(reg.test(email)) {
    //             $.ajax({
    //                 type: 'POST',
    //                 url: "mail/sendmail.php",
    //                 data: {email: email, phone: phone, subject: subject},
    //                 success: function() {
    //                     $('#emailModal').val('');
    //                     $('#phoneModal').val('');
    //                     $("#confModal").css('display','none');
    //                     $("#formModalZapros").html('<h6 class="modal-body mx-3 text-center"><i class="fa fa-smile-o fa-3x text-success mb-3 animated rotateIn" aria-hidden="true"></i><div class="alert alert-success my-2" role="alert"><strong>Спасибо!</strong><hr class="my-3"><p>Ваша заявка успешно отправлена.<br>Мы с Вами в скором времени свяжемся.</p></div></h6>');
    //                 },
    //                 error: function(){
    //                     $("#formCallZapros").append('<div class="alert alert-danger text-center errorModal">Извините. Ошибка при отправке.<br>Пожалуйста, сообщите администратору ресурса!</div>');
    //                     setTimeout(function(){$('.errorModal').fadeOut(500);},2000);
    //                 }    
    //             });
    //         } else {
    //         $("#formModalZapros").append('<div class="alert alert-danger text-center errorModal" role="alert">Заполните правильно поле EMAIL!</div>');
    //         setTimeout(function(){$('.errorModal').fadeOut(500);},2000);
    //         }
    //     } else {
    //         $("#formModalZapros").append('<div class="alert alert-danger text-center errorModal" role="alert">Заполните обязательные поля!</div>');
    //         setTimeout(function(){$('.errorModal').fadeOut(500);},2000);
    //     }
    // });   

});