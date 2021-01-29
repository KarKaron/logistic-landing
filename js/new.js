$(function() {
  "use strict";
  /* Эффекты MDB при появлении */
  new WOW().init();
  
  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  // Маска телефона
  // $('#phoneModal').on('click', function() {
  //   $(this).mask("+7(999)999-99-99");
  // });

  //Отправка запроса в модальном окне
  $("#btnModal").click(function(e) {
    e.preventDefault();
    var name = $('#nameModal').val();
    var phone = $('#phoneModal').val();
    var tonnage = $('#tonnageModal').val();
    var box = $('#typeModal').val();
    if(name !== '' && phone !== '') {
      $.ajax({
        type: 'POST',
        url: "mail/sendmail.php",
        data: {name: name, phone: phone, tonnage: tonnage, box: box},
        success: function() {
          $('#nameModal').val('');
          $('#phoneModal').val('');
          $('#tonnageModal').val('');
          $('#typeModal').val('');
          $("#formModalZapros").addClass('d-none');
          $('#closeOrder').addClass('d-none');
          $('#orderSave').removeClass('d-none');
        },
        error: function() {
          $("#formModalZapros div").addClass('d-none');
          $("#formCallZapros").append('<div class="alert alert-danger text-center errorModal">Извините. Ошибка при отправке.<br>Пожалуйста, сообщите администратору ресурса!</div>');
          setTimeout(function(){$('.errorModal').fadeOut(500);},2000);
        }    
      });
    } else {
      $('#nameModal').addClass('formControlError');
      $('#phoneModal').addClass('formControlError');
      $('.errorInput').forEach(item => {
        item.classList.remove('d-none');
      });
    }
  });   

});